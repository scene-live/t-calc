<template>
  <div>
    <Title title="T-Calcurator" />
    <ul class="calculator-errors">
      <li
        v-for="(error, index) in errors"
        :key="index"
      >
        {{ error }}
      </li>
    </ul>
    <div class="calculator">
      <Display
        :current="current"
        @updateDisplay="updateDisplay"
      />
      <Buttons
        :operator="operator"
        :numbers="numbers"
        :operators="operators"
        :actions="actions"
        @pushNumber="updateDisplay"
        @delete="deleteLastNumber"
        @pushAction="pushActionButton"
        @pushOperation="pushOperationButton"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CalculatorStore from '../store/CalculatorStore'
import Title from './Title.vue'
import Display from './Display.vue'
import Buttons from './Buttons.vue'

@Component({
  components: {
    Display,
    Buttons,
    Title
  }
})
export default class Calculator extends Vue {
  store = new CalculatorStore()

  current = this.store.getCurrent()
  operator = this.store.getOperator()
  errors = this.store.getErrors()
  numbers = CalculatorStore.NUMBERS
  operators = CalculatorStore.OPERATORS
  actions = CalculatorStore.ACTIONS

  update () {
    this.current = this.store.getCurrent()
    this.operator = this.store.getOperator()
    this.errors = this.store.getErrors()
  }

  updateDisplay (value: string, isInput: boolean) {
    this.store.updateDisplay(value, isInput)
    this.update()
  }

  deleteLastNumber () {
    this.store.deleteLastNumber()
    this.update()
  }

  pushActionButton (action: string) {
    this.store.pushActionButton(action)
    this.update()
  }

  pushOperationButton (operator: string) {
    this.store.pushOperationButton(operator)
    this.update()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calculator {
    width: $buttonSize * 4 + 1;
    margin: 0 auto;
    overflow: hidden;
    background: map-get($backgroundColors, base);
    border-bottom: 1px solid map-get($backgroundColors, base);
    &-title {
      font-size: map-get($fontSize, title);
    }
    &-errors {
      width: $buttonSize * 4 + 1;
      margin: 0 auto;
      text-align: left;
      color: $attentionColor;
      font-size: map-get($fontSize, errors);
      font-weight: bold;
    }
  }
</style>
