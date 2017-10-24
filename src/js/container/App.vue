<style lang="stylus" src="app.styl"></style>

<template lang="pug">
#app
  main
    transition(name="fade", mode="out-in")
      router-view.view
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    ...mapActions(['showLoading']),
  },
  mounted() {
  },
  components: {
  },
};
</script>

