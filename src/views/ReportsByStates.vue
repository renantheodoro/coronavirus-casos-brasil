<template>
  <main>
    <section class="main-content">
      <h2 class="main-question">
        Casos confirmados de
        <br />
        <strong class="highlight">Coronavírus</strong>
        <strong class="yellow">por Estado</strong>
      </h2>

      <div class="search-section">
        <input type="text" required v-model="search" placeholder="Busque por Estado" />
      </div>

      <ul class="locate-list">
        <li v-for="(state, index) in filteredList" :key="index">
          <div class="locate-content">{{state.cases || 0}}</div>
          <div class="locate-title">{{state.name}}</div>
        </li>
      </ul>
    </section>

    <Footer :sources="sources" :updatedAt="updatedAt" />

    <Loader v-if="loader" />
  </main>
</template>

<script>
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

class StateResult {
  constructor(name, uf, cases) {
    this.name = name;
    this.uf = uf;
    this.cases = cases;
  }
}

export default {
  name: "ReportsByStates",

  components: { Loader, Footer },

  data() {
    return {
      sources: [],
      updatedAt: null,
      loader: true,
      search: "",
      stateList: []
    };
  },

  created() {
    this.axios
      .get(`https://dt6g6dr24g.execute-api.us-east-1.amazonaws.com/prod/casos`)
      .then(response => {
        const states = response.data.data.brazil.states;

        this.sources = response.data.data.brazil.latest.sources;
        this.updatedAt = this.getDate(response.data.meta.last_update);

        states.forEach(state => {
          this.stateList.push(
            new StateResult(state.state, state.UF, state.cases)
          );
        });

        this.loader = false;
      });
  },

  computed: {
    filteredList() {
      return this.stateList.filter(state => {
        return state.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
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