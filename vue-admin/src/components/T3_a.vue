<template>
 <div id="T3_a">
 	<div v-for="a in arr">
 	  <h3 style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">{{a.name}}</h3>
 	  <div v-if="a.childs.length>0" v-for="b in a.childs" >
 	  	<div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-left: 20px;">
 	  		
 	  		<h3><Checkbox  :id="b.id">{{b.name}}</Checkbox></h3>
 	  		 	  		
 	  	</div>
 	  		
 	  			
 	  			
 	  		<div v-if="b.childs.length>0" v-for="c in b.childs" style="padding-bottom:6px;margin-bottom:6px;margin-left: 40px;display: inline-block;">
 	  			
        <Checkbox  :value="c.is_selected" :id="c.id">{{c.name}}</Checkbox>
       
            
 	  	</div>
 	  </div>
 	  <div v-if="a.childs.length==0">
 	  	<div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-left: 20px;">
 	  		
 	  		<Checkbox  :id="a.id">{{a.name}}</Checkbox>
 	  		 	  		
 	  	</div>
 	  	
 	  	
 	  </div>
 	  	
 	  </div>
 	
 	</div>
 	
 	
 	
 	
</div>
</template>

<script>
  import axios from "axios"
	export default{
	name:'T3_a',
    data () {
      return {
       
        arr:[],
        checkAllGroup:[]
      }
    },
   methods:{
   
   	foo(arr){
   	   var _this=this
   	   var srr = []
   		arr.map(function(item){
   			 if(item.childs.length>0){
   			 _this.foo(item.childs)
   			 	
   			 }else{
   			if(item.is_selected){
   			 		console.log(item.name)
   			 		srr.push(item.name)
   			 	}
   				
   			 }
   		
   		})
   		
   	this.checkAllGroup.push(srr)
   		
   	}
   
   	
   },
    mounted(){
    	var _this=this
    	axios.get("http://127.0.0.1:8888/")
    	.then(function(res){
    		
    		
    		_this.arr=res.data
    		
    		_this.foo(_this.arr)
    		
    		
    		console.log(_this.arr)
    		console.log(_this.checkAllGroup)
    		
    		
    		
    	})
    }

	}
</script>

<style>
</style>
