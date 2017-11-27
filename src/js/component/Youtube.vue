<style scoped lang="stylus">
.youtube-root
  width 100%
.youtube_wrapper
  width 100%
  max-width 1920px
  margin 0 auto
  text-align center
  padding 50px 0

  
</style>

<template lang="pug">

.youtube-root
  .youtube_wrapper
      #player
      .control_space
        button(v-on:click="setVideo(0)") Play
        button(v-on:click="setVideo(1)") Pause
        button(v-on:click="setVideo(2)") Stop
        </br>
        button(v-on:click="setVideo(3)") GetPlaybackRate
        select(v-model="selected")
          option 0.25
          option 0.5
          option 1
          option 1.5
          option 2
        </br>
        label Second：
        input(type="text" v-model="seekNumber")
        button(v-on:click="videoSetSeekTo()") SeekTo
        </br>
        label LoadById：
        input(type="text" v-model="videoId")
        button(v-on:click="videoSetId()") ChangeId
  
</template>

<script>
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        player: -1,
        selected: 1,
        seekNumber: 0,
        videoId:'bHQqvYy5KYo',
      };
    },
    computed: {},
    methods: {
      ...mapActions(['showLoading']),
      onYouTubeIframeAPIReady: function() {
        this.player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {}
        });
      },
      setVideo: function(val) {
        switch (val) {
          case 0:
            this.player.playVideo();
            break;
          case 1:
            this.player.pauseVideo();
            break;
          case 2:
            this.player.stopVideo();
            break;
          case 3:
            // 到指定的影片秒數與是否播放影片
            this.player.getPlaybackRate();
            break;
          default:
            break;
        }
      },
      videoSetSeekTo: function() {
        // 到指定的影片秒數與是否播放影片
        this.player.seekTo(this.seekNumber, true);
      },
      videoSetId : function (){
        this.player.cueVideoById(this.videoId);
      }
    },
    mounted() {
      this.onYouTubeIframeAPIReady();
    },
    watch: {
      selected: function(val) {
        this.player.setPlaybackRate(val);
      }
    },
    destroyed() {},
    components: {},
  };
</script>
