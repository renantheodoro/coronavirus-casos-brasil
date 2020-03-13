<template>
  <div id="app">
    <IndexReport />
  </div>
</template>

<script>
import IndexReport from './components/IndexReport.vue';

export default {
  name: 'App',
  components: {
    IndexReport
  },
  metaInfo: {
    title: 'Coronavírus',
    titleTemplate: '%s | Casos confirmados no Brasil'
  }
};
</script>

<style></style>
