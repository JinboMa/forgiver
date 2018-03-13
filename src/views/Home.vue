<template lang="pug">
.home Home Page.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  test = 12
}
</script>
