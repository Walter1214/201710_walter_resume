<style scoped lang="stylus">
@require '../../css/base/_walter.styl'
a
  display block

</style>

<template lang="pug">

.index-root
  router-link(to="/resume") Resume
  router-link(to="/window") GoWindow
  router-link(to="/youtube") GoYoutube
  router-link(to="/facebook") GoFacebook
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
