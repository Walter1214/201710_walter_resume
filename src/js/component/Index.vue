<style scoped>

</style>

<template lang="pug">

.index-root
  // Resume
  
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
// import Resume from '@/component/Resume';


export default{
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ...mapGetters(['showSuccess']),
  },
  methods: {
    ...mapActions(['showLoading']),
  },
  mounted() {
    
  },
  destroyed() {

  },
  components: {
    // Resume,
  },
};
</script>
