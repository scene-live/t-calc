<template>
  <div>
    <Title title="T-Calcurator" />
    <Errors :errors="errors" />
    <div class="calculator-wrap" ref="calculatorWrap">
      <div class="calculator">
        <div class="setting" ref="setting">
          <h2>設定</h2>
          <font-awesome-icon
            class="setting-close"
            icon="times"
            @click="closeSetting"
          />
          <div class="setting-content">
            <h3 class="setting-title">履歴表示</h3>
            <p class="setting-item">
              <input
                type="checkbox"
                class="setting-check"
                name="toggleIsSide"
                id="toggleIsSide"
                @change="toggleIsSide"
              >
              <label for="toggleIsSide" class="setting-label">横に表示する</label>
            </p>
          </div>
          <div class="setting-content">
            <h3 class="setting-title">フォント</h3>
            <div class="setting-item has-option">ヒラギノ角ゴシック</div>
          </div>
          <div class="setting-content">
            <h3 class="setting-title">テーマ</h3>
            <div class="setting-item has-option">ダーク</div>
          </div>
        </div>
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
  histories = this.store.getHistories()
  calculating = this.store.getCalculating()
  isAllCLeared = this.store.getIsAllCleared()
  numbers = CalculatorStore.NUMBERS
  operators = CalculatorStore.OPERATORS
  actions = CalculatorStore.ACTIONS

  isSide = false
  isShowHistory = false

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
    const setting = this.$refs.setting as HTMLElement
    setting.classList.add('is-shown')
  }

  closeSetting () {
    const setting = this.$refs.setting as HTMLElement
    setting.classList.remove('is-shown')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .setting {
    color: #fff;
    background: map-get($backgroundColors, base);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    z-index: 102;
    transition: .5s;
    &.is-shown {
      transform: translate(100%, 0)
    }
    &-close {
      font-size: 1.6rem;
      position: absolute;
      width: 1em;
      height: 1em;
      cursor: pointer;
      top: 5px;
      left: 8px;
    }
    &-content {
      text-align: left;
      margin-bottom: 10px;
    }
    &-title {
      font-size: 1.6em;
      margin-bottom: 5px;
      position: relative;
      padding: 0 10px 0;
      display: inline-block;
      color: $mainColor;
      background: map-get($backgroundColors, base);
      &::before, &:after {
        content: '';
        display: block;
        height: 1px;
        background: $mainColor;
        position: absolute;
        bottom: 50%;
        left: 0;
      }
      &::before {
        z-index: -1;
        width: $buttonSize * 4 + 1;
      }
    }
    &-item {
      font-size: 1.4em;
      padding: .5em 10px;
      margin: 0;
      position: relative;
      &.has-option {
        cursor: pointer;
        @media #{$not_sp} {
          &:hover {
            &::before {
              opacity: .2;
            }
          }
        }
        &::after {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          position: absolute;
          top: 50%;
          right: 10px;
          transform: rotate(45deg) translateX(-50%);
        }
      }
    }
    &-check {
      display: none;
    }
    &-label {
      position: relative;
      display: block;
      &::before, &::after {
        content: '';
        cursor: pointer;
        display: block;
        position: absolute;
        z-index: 105;
        transition: .3s;
      }
      &::before {
        width: 40px;
        height: 20px;
        top: 0;
        right: 0px;
        background: #ccc;
        border-radius: 10px;
      }
      &::after {
        top: 1px;
        right: 19px;
        width: 18px;
        height: 18px;
        background: #fff;
        border-radius: 50%;
      }
      .setting-check:checked + & {
        &::before {
          background: $mainColor;
        }
        &::after {
          right: 2px;
        }
      }
    }
  }
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
