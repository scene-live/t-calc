<template>
  <div
    :class="[
      'display',
      current.length > 12 ?  'is-long' : '',
      current.length > 16 ?  'is-longer' : '',
    ]">
      <p class="display-number">{{ current }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Display extends Vue {
  @Prop() private current!: string;
}
</script>

<style scoped lang="scss">
  .display {
    text-align: right;
    padding: 25px 10px 0 10px;
    background: map-get($backgroundColors, display);
    color: #fff;
    font-size: map-get($fontSize, display);
    min-height: 65px;
    line-height: 1;
    display: flex;
    align-items: flex-end;
    &.is-long {
      font-size: map-get($fontSize, displayLong);
    }
    &.is-longer {
      font-size: map-get($fontSize, displayLonger);
    }
    &-number {
      flex-basis: 100%;
      margin: 0;
    }
  }
</style>
