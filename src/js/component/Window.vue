<style scoped lang="stylus">
.window-root
  text-align center
  padding 20px
.window_space
  button
    display block
    margin 0 auto
    margin-bottom 30px
    font-size 20px
    width 160px
    height 50px
  ul
    list-style-type square
    display inline-block
    text-align left
</style>

<template lang="pug">

.window-root
  .window_space
    button(v-on:click="updateWindowInfo") 更新目前的數值
    ul
      li window.innerWidth：{{innerWidth}}
      li window.innerHeight：{{innerHeight}}
      li window.outerWidth：{{outerWidth}}
      li window.outerHeight：{{outerHeight}}
      li window.screen.availWidth : {{availWidth}}
      li window.screen.availHeight : {{availHeight}}
      li document.body.clientWidth :{{bodyWidth}}
      li document.body.clientHeight :{{bodyHeight}}
      li document.documentElement.clientWidth :{{documentWidth}}
      li document.documentElement.clientHeight :{{documentHeight}}
  
</template>

<script>
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        bodyWidth: document.body.clientWidth,
        bodyHeight: document.body.clientHeight,
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight,
      };
    },
    computed: {},
    methods: {
      ...mapActions(['showLoading']),
      updateWindowInfo: function() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.outerWidth = window.outerWidth;
        this.outerHeight = window.outerHeight;
        this.availWidth = window.screen.availWidth;
        this.availHeight = window.screen.availHeight;
        this.bodyWidth = document.body.clientWidth;
        this.bodyHeight = document.body.clientHeight;
        this.documentWidth = document.documentElement.clientWidth;
        this.documentHeight = document.documentElement.clientHeight;
      }
    },
    mounted() {},
    destroyed() {},
    components: {},
  };
</script>
