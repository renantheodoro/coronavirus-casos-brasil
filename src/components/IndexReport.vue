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

    <footer>
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

      <div class="collaborators">
        <h2>Colaboradores:</h2>
        <ul class="">
          <li>
            <a href="https://www.linkedin.com/in/darleisoares/">
              <svg
                height="2500"
                width="2490"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <path
                    d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                    fill="#069"
                  />
                  <path
                    d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                    fill="#fff"
                  />
                </g>
              </svg>
              Darlei Santos Soares</a
            >
          </li>
          <li>
            <a href="https://br.linkedin.com/in/renantheodoro" target="_blank">
              <svg
                height="2500"
                width="2490"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <path
                    d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                    fill="#069"
                  />
                  <path
                    d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                    fill="#fff"
                  />
                </g>
              </svg>
              Renan Barbosa Theodoro</a
            >
          </li>
        </ul>
      </div>
    </footer>
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
