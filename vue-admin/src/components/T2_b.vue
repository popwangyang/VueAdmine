<template>
	<div id="T2_b">
		<div class="field">
			<label class="label">Label</label>
			<div class="control">
				<input class="input" type="text" placeholder="Text input" v-model="ipt"> <a class="button is-inof" @click="tab">添加</a>
			</div>
			<p class="help">This is a help text</p>
		</div>
		<h1 v-mjj="color">{{a}}</h1>
		
		<p v-for="item in arr">{{item | capitalize}}</p>
  <aside class="menu">
  <p class="menu-label">
    菜单1
  </p>
  <ul class="menu-list">
    <li><a class="is-active">菜单2</a></li>
    <li><a>菜单3</a></li>
  </ul>

</aside>
<h1>{{count}}</h1>
<h1>{{name}}</h1>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		name: 'T2_b',
		data() {
			return {
				arr:[],
				ipt:'',
				a:"oooo",
				color:'blue',
				count:this.$store.state.count,
				name:this.$store.state.name
			}
		},
		methods:{
			tab(){
				this.arr.push(this.ipt)
				this.ipt=""
				this.a="pppp"
				console.log(this)
				this.$nextTick(function(){
				console.log("aa")
			})
			}
			
		},
		filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
      }
  },
	mounted(){
		
		
	}
	
		

	}
</script>

<style scoped="scoped">

</style>