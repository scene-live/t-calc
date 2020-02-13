<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <button @click="changeText">Click</button>
    <HelloWorld :text="text" msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Calculator title="Calculator" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue'
import Calculator from './components/Calculator.vue'

@Component({
  components: {
    Calculator
  }
})
export default class App extends Vue {
  // text = 'test';
  // changeText () {
  //   this.text = 'changed'
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
