// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS




import router from './router'
import store from './store/store.js'
import Foo from './chajian/foo'
import Goo from "./chajian/goo"
Vue.use(Foo)
Vue.use(Goo)
Vue.use(iView);
Vue.config.productionTip = false

Vue.filter("dx",function(value){
	 return value.toUpperCase()
	
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.nextTick(function(){
	
})
Vue.directive("mjj",function(el,binding){
			el.style.color = binding.value
		})	
		

		
