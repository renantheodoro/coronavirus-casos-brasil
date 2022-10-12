<template>
  <main v-if="!errorMessage">
    <section class="main-content -with-background">
      <h1 class="header">
        Casos confirmados de
        <br />
        <strong class="highlight">Coronavírus</strong>
        <strong class="yellow">no Brasil</strong>
      </h1>

      <div v-if="report" class="results-report">
        <div v-if="report.confirmed" class="row">
          <p class="report-item -confirmed">
            <span class="report-number">{{
              report.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }}</span>
            <span class="report-legend">
              <strong>Casos confirmados</strong>
            </span>
          </p>
        </div>
        <div class="row">
          <p v-if="report.deaths" class="report-item -deaths">
            <span class="report-number">{{
              report.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }}</span>
            <span class="report-legend">
              <strong>Mortes confirmadas</strong>
            </span>
          </p>
        </div>

        <div v-if="report.recovered" class="row">
          <p class="report-item -recovered">
            <span class="report-number">{{
              report.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }}</span>
            <span class="report-legend">
              <strong>Casos recuperadossss</strong>
            </span>
          </p>
        </div>

        <div class="row">
          <div class="updated-message">
            <p>
              Atualizado há <strong>{{ updatedInMinutes }}</strong>
            </p>
          </div>
        </div>

        <div class="row">
          <small class="updated-hour"
            ><i class="im im-info"></i>Os dados são atualizados de <br />
            <strong>hora em hora</strong>.</small
          >
        </div>

        <!-- <p v-if="report" class="report-item -health-text">
          <span class="report-number">{{ report.cases }}</span>
          <span class="report-legend">
            Dados do
            <strong>Ministério da Saúde</strong>
          </span>
        </p>

        <p v-if="report" class="report-item -media-text">
          <span class="report-number">{{ report.cases_from_midia }}</span>
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

    <Footer :updatedAt="updatedAt" />

    <Loader v-if="loader" @timedOut="closeLoader" />
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
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

export default {
  name: "IndexReport",

  components: { Loader, Footer },

  props: {
    msg: String,
  },

  data() {
    return {
      loader: true,
      report: {
        confirmed: null,
        deaths: null,
        recovered: null,
      },

      updatedAt: null,
      updatedInMinutes: null,
      errorMessage: false,
    };
  },

  async created() {
    this.getResults();
  },

  methods: {
    getResults() {
      this.axios
        .get(
          `https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=BR`
        )
        .then((response) => {
          this.report.confirmed = response.data.latest.confirmed;
          this.report.deaths = response.data.latest.deaths;
          this.report.recovered = response.data.latest.recovered;

          console.log(response);

          this.updatedAt = this.convertDate(
            response.data.locations[0].last_updated
          );

          this.updatedInMinutes = this.convertDateInMinutes(
            response.data.locations[0].last_updated
          );
        })
        .catch(() => {
          this.errorMessage = false;
        })
        .finally(() => {
          this.loader = false;
        });
    },

    convertDate(ts) {
      return new Date(ts).toLocaleString().replace(" ", " às ");
    },

    convertDateInMinutes(ts) {
      const date = new Date() - new Date(ts);
      const minutes = new Date(date).getMinutes();

      let messageInMinutes;

      if (minutes >= 60) {
        messageInMinutes = "1 hora e " + (minutes - 60) + " minutos";
      } else if (minutes < 1) {
        messageInMinutes = "menos de um minuto";
      } else {
        messageInMinutes = minutes + " minutos";
      }

      return messageInMinutes;
    },

    getDate(date) {
      let day;
      let month;
      let year;

      let monthArr = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];

      day = date.split("/")[0];
      month = monthArr[parseInt(date.split("/")[1]) - 1];
      year = date.split("/")[2].replace(" ", " às ");

      return day + " de " + month + " de " + year;
    },

    closeLoader() {
      this.loader = false;
      this.errorMessage = true;
    },

    reloadPage() {
      location.reload();
    },
  },
};
</script>
