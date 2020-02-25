<template>
  <div>
    <Title title="T-Calcurator" />
    <Errors :errors="errors" />
    <div class="calculator-wrap" ref="calculatorWrap">
      <div class="calculator">
        <Setting
          ref="setting"
          @toggleIsSide="toggleIsSide"
        />
        <p class="calculator-setting">
          <input
            type="checkbox"
            class="calculator-setting-toggle"
            id="toggle"
            @change="showSetting"
          >
          <label
            for="toggle"
          >
            <font-awesome-icon :class="['icon-toggle', isSide ? 'is-side' : '']" icon="cog" />
          </label>
        </p>
        <Display
          :current="current"
          :history="histories[0]"
          :calculating="calculating"
          @updateDisplay="updateDisplay"
        />
        <Buttons
          :operator="operator"
          :numbers="numbers"
          :operators="operators"
          :actions="actions"
          :histories="histories"
          :isSide="isSide"
          :isAllCLeared="isAllCLeared"
          @pushNumber="updateDisplay"
          @delete="deleteLastNumber"
          @pushAction="pushActionButton"
          @pushOperation="pushOperationButton"
          @showHistory="showHistory"
          @toggleIsSide="toggleIsSide"
          @backSelectedHistory="backSelectedHistory"
          @back="back"
        />
      </div>
      <History
        :className="['is-side', isShowHistory && isSide ? 'is-shown' : '']"
        :histories="histories"
        @backSelectedHistory="backSelectedHistory"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CalculatorStore from '../store/CalculatorStore'
import Title from './Title.vue'
import Setting from './Setting.vue'
import Display from './Display.vue'
import Errors from './Errors.vue'
import Buttons from './Buttons.vue'
import History from './History.vue'

@Component({
  components: {
    Title,
    Setting,
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
  histories = this.store.getHistories()
  calculating = this.store.getCalculating()
  isAllCLeared = this.store.getIsAllCleared()
  numbers = CalculatorStore.NUMBERS
  operators = CalculatorStore.OPERATORS
  actions = CalculatorStore.ACTIONS

  isSide = false
  isShowHistory = false
  settingClassName = ''

  update () {
    this.current = this.store.getCurrent()
    this.operator = this.store.getOperator()
    this.errors = this.store.getErrors()
    this.histories = this.store.getHistories()
    this.calculating = this.store.getCalculating()
    this.isAllCLeared = this.store.getIsAllCleared()
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

  backSelectedHistory (index: number) {
    this.store.backSelectedHistory(index)
    this.update()
  }

  back () {
    this.store.back()
    this.update()
  }

  showHistory () {
    this.isShowHistory = !this.isShowHistory
  }

  toggleIsSide () {
    this.isSide = !this.isSide
  }

  showSetting () {
    this.$refs.setting.show()
  }

  closeSetting () {
    const setting = this.$refs.setting as HTMLElement
    setting.classList.remove('is-shown')
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
    &-setting {
      color: #fff;
      z-index: 101;
      margin: 0;
      font-size: 14px;
      position: absolute;
      width: 1em;
      height: 1em;
      cursor: pointer;
      top: 5px;
      left: 8px;
      @media #{$not_sp} {
        &:hover {
          opacity: .8;
        }
      }
      &-toggle {
        display: none;
      }
    }
  }
  .icon {
    &-toggle {
      cursor: pointer;
    }
  }
  .toggleIsSide {
    font-size: map-get($fontSize, history);
    label {
      cursor: pointer;
    }
  }
</style>
