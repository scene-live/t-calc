<template>
  <div :class="['history', className ? className : '']">
    <p :class="['history-close', className ? 'is-hidden' : '']" @click="hideHistory">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
    </p>
    <ul class="history-list">
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
      <li class="history-item">123 + 23 = 146</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class History extends Vue {
  @Prop() private className!: string
  hideHistory () {
    this.$emit('hideHistory')
  }
}
</script>

<style scoped lang="scss">
  .history {
    flex-basis: 100%;
    border-left: 1px solid map-get($backgroundColors, base);
    border-right: 1px solid map-get($backgroundColors, base);
    background: #fff;
    transition: .5s;
    &.is-hidden {
      width: $buttonSize * 2;
      flex-basis: $buttonSize * 2;
      border-bottom: 1px solid map-get($backgroundColors, base);
      position: absolute;
      top: 0;
      left: 0;
      &.is-shown {
        transform: translate($buttonSize * 4, 0)
      }
    }
    &-close {
      background: map-get($backgroundColors, base);
      cursor: pointer;
      padding: 10px 0;
      margin: 0;
      transition: .3s;
      @media #{$not_sp} {
        &:hover {
          opacity: .8;
        }
      }
      &.is-hidden {
        display: none;
      }
    }
    &-list {
      height: $buttonAreaHeight;
      overflow-y: scroll;
      .is-hidden & {
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
      transition: .3s;
      @media #{$not_sp} {
        &:hover {
          opacity: .8;
        }
      }
    }
  }
</style>
