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
    display: block;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    color: map-get($defaultButtonColor, color);
    background: map-get($defaultButtonColor, background);
    font-size: map-get($fontSize, btn);
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
    &:focus {
      outline: none;
    }
    &-numbers {
      color: map-get($numberButtonColor, color);
      background: map-get($numberButtonColor, background);
    }
    &-actions {
      color: map-get($actionButtonColor, color);
      background: map-get($actionButtonColor, background);
    }
  }
</style>
