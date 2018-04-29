import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import T1 from "../components/T1"
import T2 from "../components/T2"
import T3 from "../components/T3"
import T4 from "../components/T4"
import T2_a from "../components/T2_a"
import T2_b from "../components/T2_b"
import T2_c from "../components/T2_c"
import T2_d from "../components/T2_d"
import T3_a from "../components/T3_a"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld,
           'children':[
           {path:"home",component:T2,
            'children':[
            {path:"home_a",component:T2_a},
            {path:"home_b",component:T2_b},
            {path:'home_c',component:T2_c},
            {path:'home_d',component:T2_d}
            ]
           },
           {path:"home1",component:T3,
           "children":[
           {path:'home1_a',component:T3_a}
           ]
           
           },
           {path:"home2",component:T1},
           {path:"home3",component:T4}
           ]
    }
      
      
      
    
  ]
})
