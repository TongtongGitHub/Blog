<template>

  <div class="blog-world">
    <blogNav></blogNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import blogNav from "./Nav.vue";
  export default {
    name: 'blog-world',
    data () {
      return {
      }
    },
    components: {blogNav}
  }
</script>

<style lang="scss">
	.blog-world {
    height: calc(100% - 91px);
  }
</style>
