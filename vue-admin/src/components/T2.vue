<template>
	<div id="T2">
		<div class="tabs is-boxed">
			<ul class="t2">
				<li class="is-active">
					<router-link to="/home/home_a">
						<span class="icon is-small"><i class="fas fa-image"></i></span>
						<span>Pictures</span>
					</router-link>
				</li>
				<li>
					<router-link to="/home/home_b">
						<span class="icon is-small"><i class="fas fa-music"></i></span>
						<span>Music</span>
					</router-link>
				</li>
				<li>
					<router-link to="/home/home_c">
						<span class="icon is-small"><i class="fas fa-film"></i></span>
						<span>Videos</span>
					</router-link>
				</li>
				<li>
					<router-link to="/home/home_d">
						<span class="icon is-small"><i class="fas fa-file-alt"></i></span>
						<span>Documents</span>
					</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>

</template>

<script>
	import $ from "jquery";
	export default {
		name: 'T2',
		data() {
			return {
				a:'T2'
			}
		},
		
		mounted:function(){
			 this.$router.push("/home/home_a")
			$(".t2").find("li").click(function(){
				$(this).addClass("is-active").siblings().removeClass()
				
			})
			
			
		}

	}
</script>

<style scoped>

</style>