<template>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Setting extends Vue {
  @Prop() private className!: boolean

  show () {
    const setting = this.$refs.setting as HTMLElement
    setting.classList.add('is-shown')
  }

  closeSetting () {
    const setting = this.$refs.setting as HTMLElement
    setting.classList.remove('is-shown')
  }

  toggleIsSide () {
    this.$emit('toggleIsSide')
  }
}

</script>

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
</style>
