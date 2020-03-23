<template>
  <div class="spinner-box">
    <p class="loader-message" v-html="messages[messageIndex]"></p>

    <div class="pulse-container">
      <div class="pulse-bubble pulse-bubble-1"></div>
      <div class="pulse-bubble pulse-bubble-2"></div>
      <div class="pulse-bubble pulse-bubble-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',

  data() {
    return {
      messageIndex: 0,
      messages: [
        `<strong>Aguarde só um momento</strong> <br> Estamos carregando os dados...`,
        `<strong>O servidor pode estar lento</strong> <br> Espere só mais um momento...`,
        `<strong>Se estiver demorando</strong> <br> Verifique sua conexão com à internet.`
      ]
    };
  },

  methods: {
    updateMessage() {
      if (this.messageIndex >= this.messages.length - 1) {
        this.messageIndex = 0;
      } else {
        this.messageIndex++;
      }
    }
  },

  mounted() {
    const self = this;
    let initialTime = 1000;
    const maxTime = 4000;

    const loaderInterval = setInterval(() => {
      initialTime += 1000;

      if (initialTime >= maxTime) {
        self.$emit('timedOut');
        clearInterval(loaderInterval);
      } else {
        self.updateMessage();
      }
    }, 10000);
  }
};
</script>
