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

      <div v-if="comments" class="comments">
        <div v-for="comment in comments" class="comment">
          <div class="title">
            <span>{{comment.user.login}}</span> commented at <span>{{comment.created_at}} :</span>
          </div>
          <div class="text"><span>{{comment.body}}</span></div>
        </div>
      </div>
      <div class="link">
        <p><input v-on:click="linkGitHub" type="button" value="Comment"></p>
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
            if(data.length > 0)
              self.comments = data;
          },
          error: function(){
            console.log("error")
          }
        });
      },
      linkGitHub(){
        var contentId = this.$route.params.id;
        window.open("https://github.com/TongtongGitHub/TongtongBlog/issues/" + contentId);
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
      .article, .comments, .link {
        width: 1000px;
        margin: 0px auto;
        padding: 20px;
      }
      .comments {
        border: 1px solid #ccc;
      }
      .list {
        padding-left: 50px;
      }
      .title{
        margin-bottom: 10px;
        span {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .text {
        background: #dedede;
        padding: 10px;
      }
      .link {
        margin-top: 20px;
        padding: 0 20px;
        border: 1px solid #ccc;
        text-align: center;
        input {
          width: 80px;
          height: 30px;
        }
      }
    }
  }
</style>
