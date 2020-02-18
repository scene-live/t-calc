<template>
  <ul class="errors">
    <li
      v-for="(error, index) in errors"
      :key="index"
    >
      {{ error }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Errors extends Vue {
  @Prop() private errors!: string[]
}
</script>

<style scoped lang="scss">
  .errors {
    width: $buttonSize * 4 + 1;
    margin: 0 auto;
    text-align: left;
    color: $attentionColor;
    font-size: map-get($fontSize, errors);
    font-weight: bold;
    .is-history & {
      flex-basis: 100%;
    }
  }
</style>
