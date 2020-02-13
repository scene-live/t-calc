<template>
  <div class="display">
    <p
      :class="[
        'display-number',
        current.length > 12 ?  'is-long' : '',
        current.length > 16 ?  'is-longer' : '',
        current.length > 18 ?  'is-scrolled' : '',
      ]"
    >
      {{ current }}
    </p>
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
    &-number {
      flex-basis: 100%;
      margin: 0;
      &.is-scrolled {
        overflow-y: scroll;
      }
      &.is-long {
        font-size: map-get($fontSize, displayLong);
      }
      &.is-longer {
        font-size: map-get($fontSize, displayLonger);
      }
    }
  }
</style>
