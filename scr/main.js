import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  components: { 
    'App': httpVueLoader('App.vue') 
  },
  template: '<App/>'
});

