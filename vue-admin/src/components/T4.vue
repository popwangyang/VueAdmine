<template>
	<div id="T4">
		<div class="tabs is-toggle is-toggle-rounded">
  <ul class="T4">
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span>Pictures</span>
      </a>
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
	</div>
</template>

<script>
	import $ from "jquery";
	export default{
		name:'T4',
		data(){
			return{
			}
		},
		mounted:function(){
			$(".T4").find("li").click(function(){
				$(this).addClass("is-active").siblings().removeClass()
			})
		}
	}
</script>

<style>
</style>