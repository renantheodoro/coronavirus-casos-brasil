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
    title: 'Coronavírus no Brasil',
    titleTemplate: '%s | Quantos casos confirmados?'
  }
};
</script>

<style></style>
