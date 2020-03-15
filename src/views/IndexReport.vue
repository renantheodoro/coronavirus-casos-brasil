<template>
  <main>
    <section class="main-content -with-background">
      <h1 class="main-question">
        Casos confirmados de
        <br />
        <strong class="highlight">Coronavírus</strong>
        <strong class="yellow">no Brasil</strong>
      </h1>

      <div class="results-report">
        <p v-if="report" class="main-response -health-text">
          <big class="report-number">{{ report.cases }}</big>
          <span class="report-legend">
            Dados do
            <strong>Ministério da Saúde</strong>
          </span>
        </p>

        <p v-if="report" class="main-response -media-text">
          <big class="report-number">{{ report.cases_from_midia }}</big>
          <span class="report-legend">
            Dados da
            <strong>Mídia</strong>
          </span>
        </p>
      </div>

      <router-link
        class="link-see-all-results"
        :to="{name: 'reports-by-states'}"
      >Ver casos por Estado</router-link>
    </section>

    <Footer :sources="sources" :updatedAt="updatedAt"/>

    <Loader v-if="loader" />
  </main>
</template>

<script>
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

export default {
  name: "IndexReport",

  components: { Loader, Footer },

  props: {
    msg: String
  },

  data() {
    return {
      loader: true,
      report: null,
      sources: null,
      updatedAt: null
    };
  },

  created() {
    this.axios
      .get(`https://dt6g6dr24g.execute-api.us-east-1.amazonaws.com/prod/casos`)
      .then(response => {
        this.report = {
          cases: response.data.data.brazil.latest.cases,
          cases_from_midia: response.data.data.brazil.latest.cases_from_midia,
          states: response.data.data.brazil.states
        };

        this.sources = response.data.data.brazil.latest.sources;
        this.updatedAt = this.getDate(response.data.meta.last_update);

        this.loader = false;
      });
  },

  methods: {
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
        "dezembro"
      ];

      day = date.split("/")[0];
      month = monthArr[parseInt(date.split("/")[1]) - 1];
      year = date.split("/")[2].replace(" ", " às ");

      return day + " de " + month + " de " + year;
    }
  }
};
</script>
