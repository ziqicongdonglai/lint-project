<template>
  <div class="home">
    <div class="top-bar">
      <router-link to="/zhihu.com/follow">关注</router-link>
      <router-link to="/zhihu.com/recommend">推荐</router-link>
      <router-link to="/zhihu.com/hot">热榜</router-link>
      <router-link to="/zhihu.com/zvideo">视频</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
@import '../style/virables.scss';
.home {
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  width: 100%;
  background-color: $bgColor;
  border-bottom: 0.01rem solid #ddd;
  align-items: center;
}

a {
  color: $content-fontcolor;
  text-decoration: none;
  font-size: 0.16rem;
  padding: 0.2rem;
  text-align: center;
}

a:hover {
  color: #175199;
}

.router-link-active {
  color: $active-color;
}

.content {
  flex: 1;
  background-color: $bgColor;
  padding: 0.2rem;
  box-sizing: border-box;
  border-radius: 0 0 0.05rem 0.05rem;
}
</style>
