<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <reader v-bind:flowers="stuffInfo"></reader>
  </div>
</template>

<script>
import Reader from './components/Reader';

export default {
  name: 'App',
  components: {
    Reader
  },
  data() {
    return {
      stuffInfo: [
        {
          title: 'Poem #1',
          author: 'Rachel B.'
        },
        {
          title: 'Poem #2',
          author: 'Teri K.'
        },
        {
          title: 'Prose #1',
          author: 'Amber D.'
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


