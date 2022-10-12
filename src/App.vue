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
};
</script>