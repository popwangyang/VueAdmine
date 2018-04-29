<template>
	<div id="T2_a">
		<div class="box">
			<article class="media">
				<div class="media-left">
					<figure class="image is-64x64">
						<img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
					</figure>
				</div>
				<div class="media-content">
					<div class="content">
						<p>
							<strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
							<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
						</p>
					</div>
					<nav class="level is-mobile">
						<div class="level-left">
							<a class="level-item">
								<span class="icon is-small"><i class="fas fa-reply"></i></span>
							</a>
							<a class="level-item">
								<span class="icon is-small"><i class="fas fa-retweet"></i></span>
							</a>
							<a class="level-item">
								<span class="icon is-small"><i class="fas fa-heart"></i></span>
							</a>
						</div>
					</nav>
				</div>
			</article>
		</div>
		<a class="button is-inof is-large" @click="btn">点击</a>
		<a class="button is-primary is-large" @click="btn1">++</a>
		<a class="button is-primary is-large" @click="btn2">--</a>
		<input type="text" v-model="ipt" /><a class="button is-inof is-large" @click="btn3">更改</a>
		<h1>{{count}}</h1>
		<h1>{{name}}</h1>
	</div>
</template>

<script>
	export default {
		name: "T2_a",
		data() {
			return {
				a: "T2_a",
				ipt:''
			}
		},
		computed:{
			count(){
				return this.$store.state.count;
			},
			name(){
				return this.$store.state.name;
			}
		},
		methods:{
			btn(){
				this.$ts("000000000000")
			},
			btn1(){
				console.log(this.$store)
				this.$store.commit("add")
				
			},
			btn2(){
				this.$store.commit("jian")
			},
			btn3(){
				this.$store.commit({
					type:"goo",
					name:this.ipt
				})
				this.ipt=""
			}
		}

	}
</script>

<style>

</style>