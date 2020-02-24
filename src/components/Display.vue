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
    padding: 10px 10px 4px 10px;
    background: map-get($backgroundColors, display);
    color: #fff;
    font-size: map-get($fontSize, display);
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    min-height: 90px;
    position: relative;
    z-index: 100;
    > *  {
      flex-basis: 100%;
    }
    &-formula {
      font-size: map-get($fontSize, history);
      margin: 0 0 15px 0;
    }
    &-number {
      margin: 0;
      width: 100%;
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
