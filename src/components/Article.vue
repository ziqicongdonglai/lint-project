<template>
  <div>
    <h2>这是id={{ $route.params.id }}文章组件</h2>
    <h2>这是id={{ $route.query.id }}文章组件</h2>
  </div>
</template>

<script>
export default {
  name: 'ArticleView'
}
</script>

<style scoped></style>
