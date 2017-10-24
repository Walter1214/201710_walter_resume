<style scoped lang="stylus">
.history_container
  width 100%
  padding-top 30px



h1
  font-size 28px
  font-weight 700
  margin 10px 0

.skill
  padding-left 20px
  span
    font-size 20px
    line-height 30px

.work_name
  ul
    list-style-type square
    padding-left 30px
    font-size 22px
    line-height 36px
    font-weight 700
  
  span
    font-size 20px
    line-height 30px
    color #666666
.product
  h2
    display block
    padding 10px 0 10px 20px
    font-size 22px
    color #444444
    font-weight 700

    &:before
      content '。'
      display inline

.p_wrapper
  display flex
  align-items center
  padding-left 20px

  img
    width 40%
    vertical-align top
  span 
    display inline-block
    width 60%
    font-size 20px
    line-height 30px
    vertical-align top
    padding 0 15px
    color #666666
    a
      color #666666
  &.right
    img
      order 2
    span
      order 1
  
</style>

<template lang="pug">

.history-root
  .history_container
    .work_name
      h1 工作經驗
      ul
        li 米蘭營銷策劃股份有限公司 互動設計師 1年
        span 米蘭是整合式網路廣告行銷公司，負責前端網頁製作與維護，整合創意、設計、業務的意見製作出符合的RWD互動式網頁，更新各式瀏覽器、手機、平板、桌機(Mac/微軟)的平台相容性與新的前端技術磨合問題尋求解決的方法，大部份處理廣告案居多。例：Hennessy、sony、maybelline…等，處理與維護平台案。例：知音官網、Lexus…等。
        li 天鏡科技股份有限公司 軟體工程師 2年
        span 天鏡科技股份有限公司主要技術能力為 Web/APP 功能性平台開發。主要產品為果果 Cirple 智慧社區、策略無限 Stranity 期貨自動化交易系統，第一年負責新竹財團法人工業技術研究院(工研院)的外包案，網頁與智慧家電例：電視、冷氣、電燈…等做遠端控制達成節約能源的目標，目前網頁給澎湖住宅使用中。第二年負責智慧社區的警衛app，針對收發包裏、巡邏定位、登入系統與離線機制四個功能製作。
    h1 技能
    .skill
      span Html、Pug、CSS、SCSS、Styuls、Javascript ES5、Vue、Gulp
    h1 作品
    .product
      h2 Maybelline
      .p_wrapper
        img(src="~img/mb.jpg")
        span 活動網頁桌手機兩個版本，清楚介紹眼線液與五種眼線風格搭配，使用者可以上傳明顯的眼睛個人照片與搭配預設的五種眼線，合成個人風格的眼線圖片並分享到FB留言牆，參與活動抽獎。
      h2 Hennessy X.O
      .p_wrapper.right
        img(src="~img/hennessy.jpg")
        span 活動網頁桌手機兩個版本，一頁式網頁，主要介紹軒尼軒的品味風格、合作門市、全國據點資訊與預訂資訊提供。
      h2 3M
      .p_wrapper
        img(src="~img/3m.png")
        span 活動網頁桌手機兩個版本，主要介紹3M便利貼特色、新產品的介紹、抽獎活動、使用者撰寫文字搭配五種風格的便利貼分享到Line與FB的朋友溫馨祝福，首頁的聖誕樹上的小便利貼可以觀看其他人的祝詞。
      h2 知音官網
      .p_wrapper.right
        img(src="~img/jeancard.png")
        span 平台網頁RWD版本。
          | 
          a(href="http://www.jeancard.com/" target="_blank") 官網連結
      h2 LEXUS
      .p_wrapper
        img(src="~img/lexus.jpg")
        span 平台官方網頁，新增兩個主題預約試乘與售後服務。
          | 
          a(href="https://www.lexus.com.tw/service.aspx" target="_blank") 官網連結
      h2 Heineken
      .p_wrapper.right
        img(src="~img/heineken.jpg")
        span 活動網頁桌手機兩個版本，基本的抽獎頁面。
      h2 JP摩根
      .p_wrapper
        img(src="~img/jp.jpg")
        span 活動網頁桌手機兩個版本。
          | 
          a(href="https://www.jpmorganam.com.tw/event/2017goodincomeinvest/page.html#/hy" target="_blank") 官網連結
         
  
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
