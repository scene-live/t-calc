<template>
  <div class="display">
    <p class="display-formula">
      {{ calculating }}
    </p>
    <input
      type="text"
      :class="[
        'display-number',
        current.length > 11 ?  'is-long' : '',
        current.length > 15 ?  'is-longer' : '',
        current.length > 18 ?  'is-scrolled' : '',
      ]"
      ref="display"
      :value="current"
      @input="updateDisplay"
      @blur="setFocus"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Display extends Vue {
  @Prop() private current!: string;
  @Prop() private history!: {};
  @Prop() private isSide!: boolean;
  @Prop() private calculating!: string;

  mounted () {
    this.setFocus()
  }

  getInput () {
    return this.$refs.display as HTMLInputElement
  }

  setFocus () {
    const input = this.getInput()
    input.focus()
    input.setSelectionRange(input.value.length, input.value.length)
  }

  updateDisplay () {
    this.$emit('updateDisplay', this.getInput().value, true)
    this.$forceUpdate()
    this.setFocus()
  }

  toggleIsSide () {
    this.$emit('toggleIsSide')
  }
}
</script>

<style scoped lang="scss">
  .display {
    text-align: right;
    padding: 25px 10px 0 10px;
    background: map-get($backgroundColors, display);
    color: #fff;
    font-size: map-get($fontSize, display);
    line-height: 1;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 100;
    &-formula {
      font-size: map-get($fontSize, history);
      margin: 0;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    &-number {
      margin: 0;
      flex-basis: 100%;
      width: 100%;
      min-height: 65px;
      display: block;
      appearance: none;
      text-align: right;
      color: #fff;
      font-size: map-get($fontSize, display);
      line-height: 1;
      border: none;
      background: transparent;
      &:focus {
        outline: none;
      }
      &.is-scrolled {
        overflow-y: scroll;
      }
      &.is-long {
        font-size: map-get($fontSize, displayLong);
      }
      &.is-longer {
        font-size: map-get($fontSize, displayLonger);
      }
    }
  }
  .icon-toggle {
    transform: rotate(-90deg);
    &.is-side {
      transform: rotate(0);
    }
  }
</style>
