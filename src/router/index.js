import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/test',
    	name:'test',
    	component:Test
    },
    //地址不配置时，重定向到/hello
    {
    	 path: '*', 
    	 redirect: '/hello'
    	
    }
  ]
  
})
