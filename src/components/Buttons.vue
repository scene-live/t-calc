<template>
  <div class="btns">
    <div class="btns-left">
      <ul class="btns actions">
        <li
          v-for="(action, index) in actions"
          :key="index"
          class="btns-item"
        >
          <Button
            :text="action"
            className="btn-actions"
            @pushButton="pushActionButton"
          />
        </li>
      </ul>
      <ul class="btns numbers">
        <li
          v-for="(number, index) in numbers"
          :key="index"
          :class="[ 'btns-item', number === 0 ? '' : '']"
        >
          <Button
            :text="number"
            className="btn-numbers"
            @pushButton="updateDisplay"
          />
        </li>
        <li class="btns-item">
          <button
            class="btn btn-numbers"
            @click="deleteLastNumber"
          >
            <svg clip-rule="evenodd" fill-rule="evenodd" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 5h17v16h-17l-7-7.972zm7 6.586-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414z"/></svg>
          </button>
        </li>
      </ul>
    </div>
    <ul class="btns-right operators">
      <li
        v-for="(operator, index) in operators"
        :key="index"
        class="btns-item"
      >
        <Button
          :text="operator"
          className="btn-operators"
          @pushButton="pushOperationButton"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Buttons extends Vue {
  @Prop() private numbers!: [];
  @Prop() private operators!: [];
  @Prop() private actions!: [];

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
}
</script>

<style scoped lang="scss">
  .btns {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: $buttonSize;
      height: $buttonSize;
      line-height: $buttonSize;
      border-top: 1px solid map-get($backgroundColors, base);
      border-left: 1px solid map-get($backgroundColors, base);
      background: #fff;
      &.is-zero {
        width: $buttonSize * 2;
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
  }
</style>
