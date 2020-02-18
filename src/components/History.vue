<template>
  <div class="history">
    <p class="history-close" @click="hideHistory">
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
    }
    &-list {
      height: $buttonAreaHeight;
      overflow-y: scroll;
    }
    &-item {
      cursor: pointer;
      color: #fff;
      background: map-get($backgroundColors, base);
      text-align: right;
      font-size: map-get($fontSize, btn);
      padding: 15px 10px;
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
