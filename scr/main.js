// import App from './App.vue';

new Vue({
  el: '#app',
  components: { 
    'App': httpVueLoader('App.vue') 
  },
  template: '<App/>'
});

