<template>
  <div>
    <Title title="Calcurator" />
    <div class="calculator">
      <Display
        :current="this.current"
      />
      <Buttons
        :numbers="this.numbers"
        :operators="this.operators"
        :actions="this.actions"
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
  @Prop() private title!: string;

  store = new CalculatorStore();

  current = this.store.getCurrent();
  numbers = CalculatorStore.NUMBERS
  operators = CalculatorStore.OPERATORS
  actions = CalculatorStore.ACTIONS

  update () {
    this.current = this.store.getCurrent()
  }

  updateDisplay (number: string) {
    this.store.updateDisplay(number)
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
  }
</style>
