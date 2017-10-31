<style scoped lang="stylus">
.basic_root
	width 100%
	font-size 0
.basic_container
	width 100%	
	display flex
	justify-content space-between
.head_shot
	width 200px
	height 200px
	background-image url('~img/head_shot_0.jpg')
	background-position center -20px
	background-size cover
	border-radius 150px
	display inline-block
	vertical-align top
	border 3px solid #666666

.information
	width 480px
	height 200px
	display inline-flex
	vertical-align top
	// padding 20px
	padding-left 50px
	flex-direction column
	justify-content center
	font-size 26px
	
.blod
	font-weight 700


</style>

<template lang="pug">
.basic_root
	.basic_container
		.head_shot
		.information
			span.blod 黃柄灝
			span 0911-970762
			span xx159357222@gmail.com	
		.information
			span.blod 朝陽科技大學-資訊工程系 畢
			span.blod 輔仁大學-資訊工程系 碩 畢
			span.blod 兵役 役畢

  
</template>

<script>
	import {
		mapActions
	} from 'vuex';
	
	export default {
		data() {
			return {
				count: 0,
			};
		},
		computed: {},
		methods: {
			...mapActions(['showLoading']),
		},
		mounted() {
	
		},
		destroyed() {
	
		},
		components: {},
	};
</script>
