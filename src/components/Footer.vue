<template>
  <footer>
    <div class="column">
      <h2>Fontes:</h2>

      <div class="sources">
        <div
          v-for="(source, index) in sources"
          :key="index"
          class="source-block"
        >
          <p class="source-name">
            <strong>({{ source.initials }})</strong> <br />
            {{ source.name }}
          </p>
          <a :href="source.website" target="_blank" class="source-link"
            >Website <i class="im im-external-link"></i
          ></a>
          <a :href="source.repository" target="_blank" class="source-link"
            >Repositório <i class="im im-external-link"></i
          ></a>
        </div>

        <!-- <a
          v-for="(source, index) in sources"
          :key="index"
          href="https://github.com/CSSEGISandData/COVID-19"
          target="_blank"
        >
          <strong
            >Johns Hopkins University Center for Systems Science and Engineering
            (JHU CSSE)</strong
          >
        </a> -->

        <!-- <br />
          <a v-for="(source, index) in sources" :key="index" :href="source.link" target="_blank">
            <strong>- {{ source.website }}</strong>
            <br />
          </a>
          <br /> -->
      </div>

      <!-- <p v-if="results.updatedAt" class="updated">
        <small>
          Atualização em:
          <br />
          <strong>{{ results.updatedAt }}</strong>
        </small>
      </p> -->
    </div>

    <div class="column">
      <div class="row">
        <div class="column">
          <h2>Atualizado em:</h2>

          <p v-if="updatedAt" class="updated">
            {{ updatedAt }}
            <br />
            <small class="updated-hour"
              ><i class="im im-info"></i>Os dados são atualizados de
              <strong>hora em hora</strong>.</small
            >
          </p>
        </div>
        <div class="column">
          <h2>Colaboradores:</h2>

          <ul class="collaborators">
            <li>
              <a
                href="https://br.linkedin.com/in/renantheodoro"
                target="_blank"
              >
                <i class="im im-linkedin"></i>
                Renan Barbosa Theodoro
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/darleisoares/">
                <i class="im im-linkedin"></i>
                Darlei Santos Soares
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      sources: [
        {
          name:
            "Johns Hopkins University Center for Systems Science and Engineering",
          initials: "JHU CSSE",
          repository: "https://github.com/CSSEGISandData/COVID-19",
          website: "https://systems.jhu.edu/",
        },
        {
          name:
            "U.S. County data that comes from the Conference of State Bank Supervisors",
          initials: "CSBS",
          repository: "https://www.csbs.org/information-covid-19-coronavirus",
          website: "https://www.csbs.org/",
        },
      ],
    };
  },

  props: {
    updatedAt: {
      type: String,
    },
  },
};
</script>
