<style scoped lang="stylus">

</style>

<template lang="pug">

.facebook-root
  h1 facebook hi
  
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
