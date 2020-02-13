<template>
  <button
    :class="['btn', className ? className : '']"
    @click="pushButton"
  >{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop() private text!: string;
  @Prop() private className!: string;

  pushButton (event: any) {
    this.$emit('pushButton', event.target.innerHTML)
  }
}
</script>

<style scoped lang="scss">
  .btn {
    @include button;
  }
</style>
