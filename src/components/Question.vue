<template>
  <div>
    <h2>这是id={{ $route.params.id }}问题组件</h2>
    <h2>这是id={{ $route.query.id }}问题组件</h2>
  </div>
</template>

<script>
export default {
  name: 'QuestionView'
}
</script>

<style scoped></style>
