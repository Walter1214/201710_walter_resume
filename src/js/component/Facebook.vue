<style scoped lang="stylus">

</style>

<template lang="pug">

.facebook-root
  a.link(href="javascript:;" v-on:click="fbStatus()") FBStatus
  div {{ fbResponse }}
  a.link(href="javascript:;" target="_blank") test
</template>

<script>
  import {
    mapActions
  } from 'vuex';
  
  export default {
    data() {
      return {
        count: 0,
        fbResponse: {},
      };
    },
    computed: {},
    methods: {
      ...mapActions(['showLoading']),
      fbStatus: function() {
        FB.getLoginStatus((response) => {
          this.fbResponse = response;
        });
      }
    },
    mounted() {
  
    },
    destroyed() {
  
    },
    components: {},
  };
</script>
