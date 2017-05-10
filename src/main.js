/*
*	main.js 入口文件
**/
import './scss/base.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import './scss/solarized-light.css'

import Vue from 'vue'
import VueRouter from 'vue-router';
import hljs from 'highlight.js'

import App from './components/App.vue';
import Blog from './components/Blog.vue';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Article from './components/Article.vue';

Vue.use(VueRouter);


// 定义路由
// 每个路由应该映射一个组件
const routes = [
{ 
	path: '/', 
	component: App,
	//定义子路由
	children: [ 
		{ 
			path: '/', 
			component: Blog,
			children:[
				{
					path: '/',
					component: Home
				},
				{
					path: 'blog/:id',
					name: 'article',
					component: Article
				}
			]	
		},
		{
			path: '/contact',
			component: Contact
		}
	]
}
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

Vue.directive('highlight',
	function (el) {
	  let blocks = el.querySelectorAll('pre code');
	  blocks.forEach((block)=>{
	    hljs.highlightBlock(block)
	  })
	}
)

new Vue({
	router
}).$mount('#app')



