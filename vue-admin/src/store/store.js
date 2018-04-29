import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


var store=new Vuex.Store({
	state:{
		count:0,
		name:""
	},
	mutations:{
		add(a){
			a.count++
		},
		jian(a){
			a.count--
		},
		goo(state,pay){
			state.name=pay.name
		}
	}
	
})

export default store;
