var Goo = {};
Goo.install = function(Vue,option){
	let opt ={
			defaultType:"button"
		}
	Vue.prototype.$ts=function(tip,type){
		
		if(type){
			opt.defaultType=type
			
		}
		if(document.getElementsByClassName("vue-goo").length){
			return
		}
		let a = Vue.extend({
			template:"<span class='vue-goo' style='height:50px;background:gray;color:blue;border-radius:5px;border:2px soild black;text-align:center;line-height:50px;display:inline-block;padding:0 20px;position:absolute;left:50%;top:50%;'>"+tip+"</span>"
		})
		let b = new a().$mount().$el
		document.body.appendChild(b)
		setTimeout(function(){
			document.body.removeChild(b)
		},2500)
	}
}

module.exports=Goo;
