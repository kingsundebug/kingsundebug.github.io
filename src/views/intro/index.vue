<template>
  <div class="app-container">
    <h2>欢迎来到王阳的第一人空间~~~~~~~~ Welcome!</h2>
    <p class="qianming">
      世界上只有一种英雄主义,就是看清生活的真相之后依旧热爱.
    </p>
    <audio ref="audio" autoplay src="" />
    <div
      :style="{ background: controlColor }"
      class="musicControl"
      @click="controlMusic"
    />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isPlay: false
    }
  },
  computed: {
    controlColor() {
      return this.isPlay ? ' linear-gradient(red, green)' : '#3B8BB1'
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const audio = this.$refs.audio
      if (this.$refs.audio) {
        audio.src = 'https://music.163.com/song/media/outer/url?id=167827.mp3'
        audio.play()
        this.isPlay = true
      }
    },
    controlMusic() {
      this.isPlay ? this.$refs.audio.pause() : this.$refs.audio.play()
      this.isPlay = !this.isPlay
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  h2 {
    text-align: center;
  }
  .qianming {
    text-align: right;
    color: rgba(255, 0, 0, 0.678);
  }
  .musicControl {
    position: fixed;
    top: 100px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
