<template>
  <div class="container">
  	
  <div class="notification">
  	<div class="tabs is-centered">
  <ul class="hellow">
    <li class="is-active">
      <router-link tage="a" to="/home">
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span>概括</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home1">
        <span class="icon is-small"><i class="fas fa-music"></i></span>
        <span>Music</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home2">
        <span class="icon is-small"><i class="fas fa-film"></i></span>
        <span>Videos</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home3">
        <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
        <span>Documents</span>
      </router-link>
    </li>
  </ul>
</div>
<router-view></router-view>
  </div>
 
</div>

  
</template>

<script>
	import $ from "jquery"
  
  
export default {
	
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
  	
  },
  mounted:function(){
  	this.$router.push("home")
  	console.log(this.$msg)
  	$(".hellow").find("li").click(function(){
  		$(this).addClass("is-active").siblings().removeClass()
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 a {
	text-decoration: none !important;
}
.notification{
	background: white;
}
</style>
