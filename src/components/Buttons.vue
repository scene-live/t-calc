<template>
  <div class="btns-wrap" ref="btns">
    <div class="btns-left">
      <ul class="btns">
        <li
          v-for="(action, index) in actions"
          :key="index"
          class="btns-item"
        >
          <Button
            :text="action"
            :className="['btn-main', action === 'AC' ? 'is-clear' : '']"
            @pushButton="pushActionButton"
          />
        </li>
      </ul>
      <ul class="btns">
        <li
          v-for="(number, index) in numbers"
          :key="index"
          :class="['btns-item', number === 0 ? 'is-zero' : '']"
        >
          <Button
            :text="number"
            className="btn-default"
            @pushButton="updateDisplay"
          />
        </li>
      </ul>
      <ul class="btns">
        <li class="btns-item is-small">
          <button
            class="btn btn-sub"
            :disabled="!isAllCLeared"
            @click="back"
          >
            <font-awesome-icon icon="reply" />
          </button>
        </li>
        <li class="btns-item is-small">
          <button
            class="btn btn-sub"
            @click="showHistory"
          >
            <font-awesome-icon icon="history" />
          </button>
        </li>
        <li class="btns-item is-small">
          <button
            class="btn btn-sub"
            @click="deleteLastNumber"
          >
            <font-awesome-icon icon="backspace" />
          </button>
        </li>
      </ul>
    </div>
    <ul class="btns-right">
      <li
        v-for="(operator, index) in operators"
        :key="index"
        :class="['btns-item', operator === '=' ? 'is-equal' : '']"
      >
        <Button
          :text="operator"
          :className="[ 'btn-main is-large', addActiveClass(operator) ]"
          @pushButton="pushOperationButton"
        />
      </li>
    </ul>
    <History
      :histories="histories"
      @hideHistory="hideHistory"
      @backSelectedHistory="backSelectedHistory"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './Button.vue'
import History from './History.vue'

@Component({
  components: {
    Button,
    History
  }
})
export default class Buttons extends Vue {
  @Prop() private operator!: string;
  @Prop() private numbers!: [];
  @Prop() private operators!: [];
  @Prop() private actions!: [];
  @Prop() private histories!: [];
  @Prop() private isSide!: boolean;
  @Prop() private isAllCLeared!: boolean;

  addActiveClass (operator: string) {
    if (operator === this.operator) return 'is-active'
  }

  updateDisplay (value: string) {
    this.$emit('pushNumber', value)
  }

  deleteLastNumber () {
    this.$emit('delete')
  }

  pushActionButton (action: string) {
    this.$emit('pushAction', action)
  }

  pushOperationButton (operator: string) {
    this.$emit('pushOperation', operator)
  }

  showHistory () {
    if (this.isSide) {
      this.$emit('showHistory')
      return
    }
    const btns = this.$refs.btns as HTMLInputElement
    btns.classList.add('is-shown')
  }

  hideHistory () {
    const btns = this.$refs.btns as HTMLInputElement
    btns.classList.remove('is-shown')
  }

  toggleIsSide () {
    this.$emit('toggleIsSide')
  }

  backSelectedHistory (index: number) {
    this.$emit('backSelectedHistory', index)
  }

  back () {
    this.$emit('back')
  }
}
</script>

<style scoped lang="scss">
  .btns {
    display: flex;
    flex-wrap: wrap;
    transition: .3s;
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      transition: .5s;
      height: $buttonAreaHeight;
      &.is-shown {
        transform: translate(0, $buttonAreaHeight * -1)
      }
    }
    &-item {
      width: $buttonSize;
      height: $buttonHeight;
      line-height: $buttonSize;
      border-top: 1px solid map-get($backgroundColors, display);
      border-left: 1px solid map-get($backgroundColors, display);
      background: #fff;
      &.is-zero {
        width: $buttonSize * 2;
      }
      &.is-equal {
        height: $buttonHeight * 2;
      }
    }
    &-left {
      flex-basis: $buttonSize * 3;
    }
    &-right {
      flex-basis: $buttonSize;
    }
  }

  .btn {
    @include button;
    &-toggle {
      display: none;
    }
  }
  .icon-toggle {
    transform: translate(0, -13px);
    &.is-side {
      transform: rotate(90deg) translate(-13px, 0);
    }
  }
</style>
