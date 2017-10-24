<style scoped lang="stylus">

</style>

<template lang="pug">

.index-root
  h1 Index hi
  
</template>

<script>
import { mapActions } from 'vuex';

export default{
  data() {
    return {
      count: 0,
    };
  },
  computed: {
  },
  methods: {
    ...mapActions(['showLoading']),
  },
  mounted() {

  },
  destroyed() {

  },
  components: {
  },
};
</script>
