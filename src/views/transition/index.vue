<template>
  <div class="app-container">
    <transition appear name="fade-slide-mode" mode="in-out">
      <button v-if="isEditing" key="save" @click="isEditing = !isEditing">
        Save
      </button>
      <button v-else key="edit" @click="isEditing = !isEditing">
        Edit
      </button>
    </transition>
    <router-link class="item" :to="{path: '/toggleCom'}">去组件切换</router-link>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      turn: '这是一个data属性',
      isEditing: true
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.app-container {
  button {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .fade-slide-mode-enter-active,.fade-slide-mode-leave-active{
    transition: all .3s ease
  }
  .fade-slide-mode-enter{
    opacity: 0;
    transform: translateX(30px);
  }
  .fade-slide-mode-leave-to{
    opacity: 0;
    transform: translateX(-30px);
  }
}
</style>
