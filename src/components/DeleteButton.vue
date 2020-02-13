<template>
  <button
    class="btn btn-numbers"
    @click="pushButton"
  >D</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DeleteButton extends Vue {
  pushButton () {
    this.$emit('pushButton')
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
