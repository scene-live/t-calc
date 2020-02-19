<template>
  <div :class="['history', className ? className : '']">
    <p :class="['history-close', className ? 'is-hidden' : '']" @click="hideHistory">
      <font-awesome-icon icon="chevron-down" />
    </p>
    <ul class="history-list">
      <li
        v-for="(history, index) in histories"
        :key="index"
        class="history-item"
        @click="backSelectedHistory(index)"
      >
        {{history.lfs}} {{history.operator}} {{history.rhs}} = {{history.result}}
      </li>
      <li v-if="histories.length === 0" class="history-item is-empty">履歴はありません</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class History extends Vue {
  @Prop() private className!: string
  @Prop() private histories!: []

  hideHistory () {
    this.$emit('hideHistory')
  }

  backSelectedHistory (index: number) {
    this.$emit('backSelectedHistory', index)
  }
}
</script>

<style scoped lang="scss">
  .history {
    flex-basis: 100%;
    border-left: 1px solid map-get($backgroundColors, base);
    border-right: 1px solid map-get($backgroundColors, base);
    background: map-get($backgroundColors, base);
    transition: .5s;
    &.is-side {
      width: $buttonSize * 2;
      flex-basis: $buttonSize * 2;
      border-bottom: 1px solid map-get($backgroundColors, base);
      position: absolute;
      top: 0;
      right: 0;
      &.is-shown {
        transform: translate($buttonSize * 2, 0)
      }
    }
    &-close {
      color: #fff;
      font-size: 2em;
      background: map-get($backgroundColors, base);
      cursor: pointer;
      padding: 10px 0;
      margin: 0;
      transition: .3s;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .2);
        opacity: 0;
      }
      @media #{$not_sp} {
        &:hover {
          opacity: .8;
          &::before {
            opacity: 1;
          }
        }
      }
      &.is-hidden {
        display: none;
      }
    }
    &-list {
      height: $buttonAreaHeight;
      overflow-y: scroll;
      .is-side & {
        height: $buttonAreaHeight + 90;
      }
    }
    &-item {
      cursor: pointer;
      color: #fff;
      background: map-get($backgroundColors, base);
      text-align: right;
      font-size: map-get($fontSize, history);
      padding: 10px 5px;
      border-bottom: 1px solid #3c434c;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .2);
        opacity: 0;
      }
      @media #{$not_sp} {
        &:hover {
          opacity: .8;
          &::before {
            opacity: 1;
          }
        }
      }
      &.is-empty {
        text-align: center;
        border-bottom: none;
        cursor: auto;
        @media #{$not_sp} {
          &:hover {
            opacity: 1;
          }
        }
        &::before {
          display: none;
        }
      }
    }
  }
</style>
