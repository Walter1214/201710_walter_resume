import Vue from 'vue';

import './util/init';

import store from './vuex/store';
import router from './app.router';
import App from './container/App.vue';
import './util/vue.global.mixin';

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

export default app;
