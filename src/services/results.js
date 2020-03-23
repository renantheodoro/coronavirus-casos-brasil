import Vue from 'vue';

export default new Vue({
  data() {
    return {
      loader: true,
      // report: null,
      report: {
        confirmed: null,
        deaths: null,
        recovered: null
      },
      sources: [
        {
          name:
            'Johns Hopkins University Center for Systems Science and Engineering',
          initials: 'JHU CSSE',
          repository: 'https://github.com/CSSEGISandData/COVID-19',
          website: 'https://systems.jhu.edu/'
        },
        {
          name:
            'U.S. County data that comes from the Conference of State Bank Supervisors',
          initials: 'CSBS',
          repository: 'https://www.csbs.org/information-covid-19-coronavirus',
          website: 'https://www.csbs.org/'
        }
      ],
      updatedAt: null,
      updatedInMinutes: null
    };
  },

  methods: {
    getResults() {
      this.axios
        .get(
          // `https://dt6g6dr24g.execute-api.us-east-1.amazonaws.com/prod/casos`
          `https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=BR`
        )
        .then(response => {
          this.report.confirmed = response.data.latest.confirmed;
          this.report.deaths = response.data.latest.deaths;
          this.report.recovered = response.data.latest.recovered;

          this.updatedAt = this.convertDate(
            response.data.locations[0].last_updated
          );

          this.updatedInMinutes = this.convertDateInMinutes(response.data.locations[0].last_updated);
        })
        .catch(() => {
          this.errorMessage = false;
        })
        .finally(() => {
          this.loader = false;
        });
    },

    convertDate(ts) {
      return new Date(ts).toLocaleString().replace(' ', ' às ');
    },

    convertDateInMinutes(ts) {
      const date = new Date() - new Date(ts);
      const minutes = new Date(date).getMinutes();

      let messageInMinutes;

      if(minutes >= 60) {
        messageInMinutes = '1 hora e ' + (minutes - 60) + ' minutos';
      } else if(minutes < 1) {
        messageInMinutes = 'menos de um minuto';
      } else {
        messageInMinutes = minutes + ' minutos';
      }

      return messageInMinutes;
    }
  }
});
