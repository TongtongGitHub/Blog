<template>
	<div class="blog-header">
		<div class="logo">
			<a href="#">MR.LIUTONGTONG</a>
		</div>
		<div class="bar J-bar"><i class="fa fa-bars fa-lg"></i></div>
		<nav class="J-nav">
			<ul>
				<!-- 使用 router-link 组件来导航. -->
				<!-- 通过传入 `to` 属性指定链接. -->
				<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
				<router-link to="/"><li>Blog</li></router-link>
				<router-link to="/contact"><li>Contact</li></router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'blog-header',
		data () {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.blog-header {
		background: #fff;
		width: 100%;
		height: 90px;
		position: relative;
		line-height: 90px;
		border-bottom: 1px solid #ccc;
		.logo a{
			float: left;
			font-size: 24px;
			color: #666;
			padding-left: 50px;
		}
		.bar {
			display: none;
		}
		nav {
			float: right;
			padding-right: 50px;
		}
		ul li {
			display: inline-block;
			float: left;
			width: 100px;
			text-align: center;
		}

		ul a {
			color: #5e5d5d;
			&:hover {
				color: #ff4242;
			}
		}
	}

	@media screen and (max-width: 800px) {
		.blog-header {
			.bar{
				float: right;
				display: block;
				padding-right: 50px;
				.fa {
					display: inline-block;
					cursor: pointer;
				}
			}
			nav {
				float: none;
				position: absolute;
				top: 90px;
				left: 0px;
				width: 100%;
				background: #fff;
				height: 0;
				overflow: hidden;

				transition: height 0.2s;

				ul li {
					float: none;
					text-align: center;
					margin-left: 0;
					height: 40px;
					line-height: 40px;
					border-bottom: 1px solid #aaa;
					&:first-child {
						border-top: 1px solid #aaa;
					}
				}
			}
			.nav-show {
				height: 165px;
			}
		}
	}
</style>
