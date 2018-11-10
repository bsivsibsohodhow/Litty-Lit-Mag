// import App from './App.vue';

new Vue({
  el: '#app',
  components: { 
    'App': httpVueLoader('scr/App.vue') 
  },
  template: '<App/>'
});

