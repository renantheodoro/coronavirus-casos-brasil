<template>
  <main>
    <h1 class="main-question">
      Quantos casos de <br />
      <strong class="highlight">Coronavirus</strong> no Brasil?
    </h1>
    <p v-if="report" class="main-response">
      <big>{{ report.brazil.latest.cases }}</big>
    </p>

    <!-- <ul class="locate-list">
      <li>
        <strong class="locate-title">
          São Paulo
        </strong>

        <span class="locate-report">3</span>
      </li>
      <li>
        <strong class="locate-title">
          Rio de Janeiro
        </strong>

        <span class="locate-report">3</span>
      </li>
      <li>
        <strong class="locate-title">
          Minas Gerais
        </strong>

        <span class="locate-report">3</span>
      </li>
    </ul> -->

    <div class="info-box">
      <p v-if="report" class="source">
        <small
          >Fontes: <br />
          <a
            v-for="(item, index) in report.brazil.latest.sources"
            :key="index"
            :href="item.link"
            target="_blank"
            ><strong>- {{ item.websitename }}</strong> <br
          /></a>
        </small>
      </p>

      <p class="updated">
        <small
          >Atualização em <strong>06 de fevereiro de 2020</strong> às
          <strong>19:00</strong></small
        >
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexReport',
  props: {
    msg: String
  },

  data() {
    return {
      report: null
    };
  },

  created() {
    this.axios
      .get(`https://dt6g6dr24g.execute-api.us-east-1.amazonaws.com/prod/casos`)
      .then(response => {
        console.log('res', response.data.data);
        this.report = response.data.data;
      });
  }
};
</script>
