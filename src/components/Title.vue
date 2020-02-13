<template>
  <h1 class="calculator-title">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Title extends Vue {
  @Prop() private title!: string
}
</script>
