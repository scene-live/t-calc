<template>
  <div>
    <Title title="T-Calcurator" />
    <Errors :errors="errors" />
    <div class="calculator-wrap" ref="calculatorWrap">
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
          :isSide="isSide"
          @pushNumber="updateDisplay"
          @delete="deleteLastNumber"
          @pushAction="pushActionButton"
          @pushOperation="pushOperationButton"
          @showHistory="showHistory"
          @toggleIsSide="toggleIsSide"
        />
      </div>
      <History
        :className="['is-side', isShowHistory && this.isSide ? 'is-shown' : '']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CalculatorStore from '../store/CalculatorStore'
import Title from './Title.vue'
import Display from './Display.vue'
import Errors from './Errors.vue'
import Buttons from './Buttons.vue'
import History from './History.vue'

@Component({
  components: {
    Title,
    Display,
    Errors,
    Buttons,
    History
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

  isSide = false
  isShowHistory = false

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

  showHistory () {
    this.isShowHistory = !this.isShowHistory
  }

  toggleIsSide () {
    this.isSide = !this.isSide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calculator {
    width: $buttonSize * 4 + 1;
    overflow: hidden;
    position: relative;
    z-index: 10;
    background: map-get($backgroundColors, base);
    border-bottom: 1px solid map-get($backgroundColors, base);
    &-wrap {
      width: $buttonSize * 4 + 1;
      margin: 0 auto;
      position: relative;
    }
    &-title {
      font-size: map-get($fontSize, title);
    }
  }
  .toggleIsSide {
    font-size: map-get($fontSize, history);
    label {
      cursor: pointer;
    }
  }
</style>
