<template>
  <div>
    <img :src="item" alt="" />
  </div>
</template>

<script>
export default {
  name: 'videoS',
  data() {
    return {
      item: null
    }
  },
  created() {
    this.item = require('../assets/vid_' + this.$route.params.id + '.png')
    console.log(this.item)
  }
}
</script>

<style lang="scss" scoped></style>
