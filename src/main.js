import Vue from 'vue'
import App from './App'
//  引用路由插件
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//  使用路由插件
Vue.use(VueResource);
Vue.use(VueRouter)
 
//  引入组件 
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import Foo from './components/Foo'
import Bar from './components/Bar'
  
const routes = [
 { path: '/', component: goods },
 { path: '/goods', component: goods },
 { path: '/ratings', component: ratings },
 { path: '/seller',component:seller},
 { path: '/foo',component:Foo},
 { path: '/bar',component:Bar},
]
//  使用路由规则
const router = new VueRouter({
 routes
})
//  加载路由规则
new Vue({
 router,
 el: '#app',
 render:h => h(App)
})
//router.push('/goods')

