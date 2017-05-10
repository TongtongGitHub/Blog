<template>
  <div class="blog-nav">
      <div class="loading" v-if="loading">
      Loading...
      </div>

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <ul v-if="articleList">
          <li class="source" v-for="article in articleList">
            <router-link :to="{ name: 'article', params: { id: article.number }}">{{article.title}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'blogNav',
    data () {
      return {
        articleList: null
      }
    },
    created: function(){
      var self = this;
      self.error = self.sources = null
      self.loading = true
      $.ajax({
        url: "https://api.github.com/repos/TongtongGitHub/TongtongBlog/issues?creator=TongtongGitHub",
        type: "GET",
        dataType: "json",
        data: {
        },
        success: function(data){
          self.loading = false;
          if (data) {
            self.articleList = data;
          }else {
            self.error = "fail to get articles!"
        }
        },
        error: function(){
          console.log("error")
        }
      });
    },
  }
</script>

<style lang="scss">
	.blog-nav {
    overflow-y: scroll;
    position: absolute;
    top: 91px;
    bottom: 0;
    border-right: 1px solid #ccc;
    width: 200px;
    background: #fff;
    padding: 50px 50px;
    font-size: 18px;
    line-height: 2;
    a {
      color: #7f8c8d;
      &:hover {
        color: #222;
      }
    }
  }
</style>
