<template>
  <main v-if="!errorMessage">
    <section class="main-content -with-background">
      <h1 class="header">
        Casos confirmados de
        <br />
        <strong class="highlight">Coronavírus</strong>
        <strong class="yellow">no Brasil</strong>
      </h1>

      <div v-if="$results.report" class="results-report">
        <div class="row">
          <p class="report-item -confirmed">
            <big class="report-number">{{ $results.report.confirmed }}</big>
            <span class="report-legend">
              <strong>Casos confirmados</strong>
            </span>
          </p>
        </div>
        <div class="row">
          <p class="report-item -deaths">
            <big class="report-number">{{ $results.report.deaths }}</big>
            <span class="report-legend">
              <strong>Mortes confirmadas</strong>
            </span>
          </p>
          <p class="report-item -recovered">
            <big class="report-number">{{ $results.report.recovered }}</big>
            <span class="report-legend">
              <strong>Casos recuperados</strong>
            </span>
          </p>
        </div>

        <div class="row">
          <div class="updated-message">
            <p>
              Atualizado há <strong>{{ $results.updatedInMinutes }}</strong>
            </p>
          </div>
        </div>

        <!-- <p v-if="$results.report" class="report-item -health-text">
          <big class="report-number">{{ $results.report.cases }}</big>
          <span class="report-legend">
            Dados do
            <strong>Ministério da Saúde</strong>
          </span>
        </p>

        <p v-if="$results.report" class="report-item -media-text">
          <big class="report-number">{{ $results.report.cases_from_midia }}</big>
          <span class="report-legend">
            Dados da
            <strong>Mídia</strong>
          </span>
        </p> -->
      </div>

      <!-- <router-link
        class="link-see-all-results"
        :to="{ name: 'reports-by-states' }"
        >Ver casos por Estado</router-link
      > -->
    </section>

    <Footer />

    <Loader v-if="$results.loader" @timedOut="closeLoader" />
  </main>

  <div v-else class="error-message">
    <p class="loader-message">
      <strong>Estamos com problemas no servidor.</strong> <br />
      Por favor, tente mais tarde.
      <a @click="reloadPage" class="btn">
        <i class="im im-sync"></i>
        Recarregar página
      </a>
    </p>
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';

export default {
  name: 'IndexReport',

  components: { Loader, Footer },

  props: {
    msg: String
  },

  data() {
    return {
      report: null,
      errorMessage: false
    };
  },

  async created() {
    this.$results.getResults();
  },

  methods: {
    getDate(date) {
      let day;
      let month;
      let year;

      let monthArr = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
      ];

      day = date.split('/')[0];
      month = monthArr[parseInt(date.split('/')[1]) - 1];
      year = date.split('/')[2].replace(' ', ' às ');

      return day + ' de ' + month + ' de ' + year;
    },

    closeLoader() {
      this.loader = false;
      this.errorMessage = true;
    },

    reloadPage() {
      location.reload();
    }
  }
};
</script>
