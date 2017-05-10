<template>
  <div class="container">
      <BlogHeader></BlogHeader>
      <router-view></router-view>
  </div>
</template>

<script>
  import BlogHeader from './Header.vue';

  export default {
    name: 'app',
    data () {
      return {
      }
    },
  //注册子组件
  components: {BlogHeader}
}
</script>

<style lang="scss">
  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
  }
</style>
