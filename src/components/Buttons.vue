<template>
  <div class="btns-wrap" ref="btns">
    <ul class="btns actions">
      <li class="btns-item is-small">
        <button
          class="btn btn-actions"
        >
          <font-awesome-icon icon="reply" />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"/></svg> -->
        </button>
      </li>
      <li class="btns-item is-small">
        <button
          class="btn btn-actions"
          @click="showHistory"
        >
          <font-awesome-icon icon="history" />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"/></svg> -->
        </button>
      </li>
      <li class="btns-item is-small">
        <input
          type="checkbox"
          class="btn-toggle"
          id="toggle"
          @change="toggleIsSide"
        >
        <label
          for="toggle"
          class="btn btn-actions"
        >
          <font-awesome-icon :class="['icon-toggle', isSide ? 'is-side' : '']" icon="angle-double-up" />
          <!-- <svg :class="['icon-toggle', isSide ? 'is-side' : '']" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.554 12l-6 6h-3.979l3.093-3h-10.668v-6h10.668l-3.093-3h3.979l6 6zm.446-6h-3.979l6 6-6 6h3.979l6-6-6-6z"/></svg> -->
        </label>
      </li>
      <li class="btns-item is-small">
        <button
          class="btn btn-actions"
          @click="deleteLastNumber"
        >
          <font-awesome-icon icon="backspace" />
          <!-- <svg clip-rule="evenodd" fill-rule="evenodd" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 5h17v16h-17l-7-7.972zm7 6.586-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414z"/></svg> -->
        </button>
      </li>
    </ul>
    <div class="btns-left">
      <ul class="btns actions">
        <li
          v-for="(action, index) in actions"
          :key="index"
          class="btns-item"
        >
          <Button
            :text="action"
            :className="['btn-actions', action === 'AC' ? 'is-clear' : '']"
            @pushButton="pushActionButton"
          />
        </li>
      </ul>
      <ul class="btns numbers">
        <li
          v-for="(number, index) in numbers"
          :key="index"
          :class="['btns-item', number === 0 ? 'is-zero' : '']"
        >
          <Button
            :text="number"
            className="btn-numbers"
            @pushButton="updateDisplay"
          />
        </li>
      </ul>
    </div>
    <ul class="btns-right operators">
      <li
        v-for="(operator, index) in operators"
        :key="index"
        :class="['btns-item']"
      >
        <Button
          :text="operator"
          :className="[ 'btn-operators', addActiveClass(operator) ]"
          @pushButton="pushOperationButton"
        />
      </li>
    </ul>
    <History
      @hideHistory="hideHistory"
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
  @Prop() private isSide!: boolean;

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
      border-top: 1px solid map-get($backgroundColors, base);
      border-left: 1px solid map-get($backgroundColors, base);
      background: #fff;
      &.is-zero {
        width: $buttonSize * 2;
      }
      &.is-equal {
        height: $buttonSize * 1.6;
      }
      &.is-small {
        height: $buttonSize * .6;
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
