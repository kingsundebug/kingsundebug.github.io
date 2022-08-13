<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom right,#3eede7, #3b2e7e);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter {
  transform: translateY(50px);
  opacity: 0;
}

.fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.fade-leave {
  transform: translateY(-20px);
  opacity: 0.5;
}

.fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
