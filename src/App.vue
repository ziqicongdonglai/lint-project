<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style lang="scss">
@import '/src/style/virables';
* {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  background-color: $dark-bgColor;
  height: 100vh;
}
</style>
