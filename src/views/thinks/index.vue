<template>
  <div class="app-container">
    <h2 class="point">随笔一</h2>
    <div class="main">
      <p>嘿~你打算去码头整点薯条吗?</p>
      <p>  穷尽一生,给自己一个答案</p>

      <p>生命的终极目的</p>
      <p>你要去往何处</p>
      <p>你将在何处落脚</p>
      <p>过去的哪个瞬间</p>
      <p>让你久久难以忘怀</p>
      <p>哪段经历</p>
      <p>最让你放不下</p>
      <p>还记得那个女孩吗</p>
      <p>或许你当时可以选择果敢一点</p>
      <p>曾经做过哪些愚蠢的选择</p>
      <p>哪个抉择让你觉得遗憾</p>
      <p>要是当初不做这个选择</p>
      <p>是不是现在会不一样</p>
      <p>现在会过得好一点</p>
      <p>一切还能补救吗</p>
      <p>晚上入眠之前</p>
      <p>总是在你脑海里出现的是哪段场景</p>
      <p>现在的你</p>
      <p>是让你欣慰的吗</p>
      <p>这无尽的人生啊</p>
      <p>总是在开玩笑和被开玩笑中解脱与救赎</p>
      <p>生活摇摆不定</p>
      <p>天气阴晴圆缺</p>
      <p>人间有离别</p>
      <p>世界很温暖</p>
      <p>也很冷漠</p>
      <p>...</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.app-container {
  .point {
    color: #3b2e7e;
  }
  .main {
    animation: appear 4s forwards;
    width: 95%;
    margin: 20px auto;
  }
  @keyframes disappear {
    0% {
     opacity: 1;
     color: red;
    }
    100% {
     opacity: 0;
     color:#3BDADC;
    }
  }
   @keyframes appear {
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  }
}
</style>
