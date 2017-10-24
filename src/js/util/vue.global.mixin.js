/* eslint no-console:off */
import Vue from 'vue';

Vue.mixin({
  methods: {
    gaPage(value) {
      ga('send', 'pageview', value);
      console.log(`%cGA:${value}`, 'background: #222; color: #E87F0E; font-size:16px;');
    },
    gaEvent(value) {
      ga('send', 'event', 'Button', 'click', value);
      console.log(`%cGA:${value}`, 'background: #222; color: #aabbcc; font-size:12px;');
    },
  },
});
