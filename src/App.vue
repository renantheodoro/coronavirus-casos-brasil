<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Coronavírus',
    titleTemplate: '%s | Casos confirmados no Brasil'
  },

  created() {
    // firebase analytics trigger
    this.$analytics.logEvent("notification_received");
  }
};
</script>

<style></style>
