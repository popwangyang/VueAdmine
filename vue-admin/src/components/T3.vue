<template>
	<div id="T3">
		<div class="tabs is-toggle">
			<ul class="t3">
				<li class="is-active">
					<router-link to="/home1/home1_a">
						<span class="icon is-small"><i class="fas fa-image"></i></span>
						<span>垂直导航</span>
					</router-link>
				</li>
				<li>
					<a>
						<span class="icon is-small"><i class="fas fa-music"></i></span>
						<span>Music</span>
					</a>
				</li>
				<li>
					<a>
						<span class="icon is-small"><i class="fas fa-film"></i></span>
						<span>Videos</span>
					</a>
				</li>
				<li>
					<a>
						<span class="icon is-small"><i class="fas fa-file-alt"></i></span>
						<span>Documents</span>
					</a>
				</li>
			</ul>
		</div>
   <router-view></router-view>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		name: 'T3',
		data() {
			return {

			}

		},
		methods: {

		},
		mounted:function(){
			this.$router.push("/home1/home1_a")
			$(".t3 li").click(function(){
				$(this).addClass("is-active").siblings().removeClass()
				
			})
			
		}

	}
</script>

<style scoped>

</style>