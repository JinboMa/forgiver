<template lang="pug">
#app
  #nav
    router-link(to="/") Home
  router-view
</template>

<script lang="ts">
import './app.styl'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
}
</script>
