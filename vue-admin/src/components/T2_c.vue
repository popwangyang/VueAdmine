<template>
	<div id="T2_c">
	<input type="text" v-model='search' />
    <ul v-for="item in searchData ">
        <li>{{item.name}},价格:￥{{item.price}}</li>
    </ul>
    <table class="table">
    <thead>
    	<tr>
    		<th><abbr title="Position">序号</abbr></th>
    		<th><abbr title="name">名称</abbr></th>
    		<th><abbr title="class">类别</abbr></th>
    	</tr>
    </thead>
   
    <tbody>
    	<tr v-for="item  in searchData">
    		<th>1</th>
    		<td>{{item.name}}</td>
    		<td>{{item.category}}</td>
    		<td>{{item.price}}</td>
    		
    	</tr>
    	
    </tbody>
    </table>
    <h1>{{count}}</h1>
    <h1>{{name}}</h1>
	</div>
</template>

<script>
	export default{
		name:'T2_c',
		 data(){
		 	return{
		 	name:this.$store.state.name,
		 	count:this.$store.state.count,
            search: '',
            products: [{
                name: '苹果',
                price: 25,
                category: "水果"
            }, {
                name: '香蕉',
                price: 15,
                category: "水果"
            }, {
                name: '雪梨',
                price: 65,
                category: "水果"
            }, {
                name: '宝马',
                price: 2500,
                category: "汽车"
            }, {
                name: '奔驰',
                price: 10025,
                category: "汽车"
            }, {
                name: '柑橘',
                price: 15,
                category: "水果"
            }, {
                name: '奥迪',
                price: 25,
                category: "汽车"
            }, {
                name: '火龙果',
                price: 25,
                category: "水果"
            }]
            }
        },
        computed: {
            searchData: function() {
                var search = this.search;
                if (search) {
                    return this.products.filter(function(product) {
                    	
                        return Object.keys(product).some(function(key) {
                        	console.log(key,"pp")
                            return String(product[key]).indexOf(search) > -1
                        })
                    })
                }

                return this.products;
            }
        }
	}
</script>

<style>
</style>