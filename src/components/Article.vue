<template>
  <div class="blog-source">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="content" class="content">
      <div v-html="content" class="article"  v-highlight>
      </div>
    </div>

    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
  import BlogFooter from './Footer.vue';
  export default {
    name: 'blog-article',
    data () {
      return {
        loading: false,
        content: null,
        comments: null,
        error: null
      }
    },
    created: function(){
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData(){
        var self = this;
        self.error = self.content = null
        self.loading = true
        var contentId = this.$route.params.id;
        $.ajax({
          url: "https://api.github.com/repos/TongtongGitHub/TongtongBlog/issues/" + contentId,
          type: "GET",
          dataType: "json",
          success: function(data){
            self.loading = false;
            if (data) {
              var html = BlogUtil.formatArticle(data.body);
              self.content = html;
            }else {
              self.error = "fail to get article!"
            }
          },
          error: function(){
            console.log("error")
          }
        });

        $.ajax({
          url: "https://api.github.com/repos/TongtongGitHub/TongtongBlog/issues/" + contentId + "/comments",
          type: "GET",
          dataType: "json",
          success: function(data){
            self.comments = data;
          },
          error: function(){
            console.log("error")
          }
        });
      }
    },
    components: {BlogFooter}
  }
</script>

<style lang="scss">
  .blog-source {
    height: 100%;
    overflow-y: scroll;
    .loading, .error {
      padding: 20px;
      min-height: calc(100% - 91px);
      margin-left: 300px;
      text-align: center;
    }
    .content {
      min-height: calc(100% - 91px);
      margin-left: 300px;
      background: #fff;
      padding: 20px;
      .article {
        width: 1000px;
        margin: 0px auto;
        padding: 20px;
      }
      .list {
        padding-left: 50px;
      }
    }
  }
</style>
