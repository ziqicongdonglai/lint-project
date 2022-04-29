<template>
  <div>
    <router-view></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutView',
  data() {
    return {}
  }
}
</script>

<style scoped></style>
