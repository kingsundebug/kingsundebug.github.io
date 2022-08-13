<template>
  <transition name="toast" @after-leave="handleAfterLeave">
    <div :style="positionStyle" class="toast-contain">
      <div v-show="show" class="toast-item">{{ message }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ToastMsg',
  components: {},
  data() {
    return {
      message: '',
      show: true,
      verticalOffset: 20,
      closed: false,
      timer: null,
      onClose: null
    }
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },
  watch: {
    closed(newval) {
      if (newval) {
        this.show = false
      }
    }
  },
  created() {},
  mounted() {
    this._startTime()
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    _startTime() {
      this.timer = setTimeout(() => {
        this.close()
      }, 1500)
    },
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.toast-contain {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  .toast-item {
    min-width: 240px;
    background-color: red;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
}
.toast-enter-active,.toast-leave-active {
  transition: all,.3s;
}
.toast-enter,.toast-leave-to {
  top: 0;
  transform: translateY(0);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}
</style>
