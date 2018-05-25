<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('/styles/base.css');
  @import url('/styles/common.css');
  @import url('/icons/iconfont/iconfont.css');

  #app {
    font-family:Arial, 'Avenir', Helvetica,  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
</style>
