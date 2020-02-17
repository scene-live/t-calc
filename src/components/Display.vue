<template>
  <div class="display">
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
    &-operator {
      font-size: 1.5rem;
      color: map-get($backgroundColors, display);
      text-align: center;
      margin: 0;
      position: absolute;
      width: 1em;
      background: #fff;
      border-radius: 3px;
      top: 5px;
      right: 5px;
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
</style>
