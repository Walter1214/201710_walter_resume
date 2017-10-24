<style scoped lang="stylus">
@require '../../css/base/_walter.styl'
.resume-root
  width 100%
  font-family Microsoft JhengHei,'標楷體',Aria,'Comic Sans MS'

.resume-container
  width 100%
  min-width 1200px
  max-width 1200px
  padding 20px
  margin 0 auto
  border 1px solid black

</style>

<template lang="pug">

.resume-root
  .resume-container
    Basic
    History
</template>

<script>
import { mapActions } from 'vuex';
import Basic from '@/component/resume/Basic';
import History from '@/component/resume/History';
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
    Basic,
    History
  },
};
</script>
