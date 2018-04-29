<template>
	<div id="T1">
		<div class="tabs is-toggle is-fullwidth is-large">
  <ul class="T1">
    <li class="is-active">
      <router-link>
        <span class="icon"><i class="fas fa-image"></i></span>
        <span>垂直导111111111111航菜单</span>
      </router-link>
    </li>
    <li>
      <a>
        <span class="icon"><i class="fas fa-music"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"><i class="fas fa-film"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"><i class="fas fa-file-alt"></i></span>
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
	
	export default{
		name:'T1',
		data(){
			return{
				
			}
		},
		mounted:function(){
		     	$(".T1").find("li").click(function(){
		     		$(this).addClass("is-active").siblings().removeClass()
		     	})
		}
		
		
	}
</script>

<style>
</style>