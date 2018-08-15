// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Greet from '@/components/Greet'
import Login from  '@/components/Login'
import SignUp from '@/components/SignUp'
import Acc from '@/components/Acc'
import Weather from '@/components/Weather'
import VInf from '@/components/VInf'
import NotFound from '@/components/NotFound'

Vue.use(Router);
Vue.config.productionTip = false;

var log = [false]

let routes = [
  {path:'/',component:Greet},
  {path:'/signup',component:SignUp},
  {path:'/login',component:Login},
  {path:'/acc',component:Acc},
  {path:'/weth',component:Weather},
  {path:'/val', component:VInf},
  {path: '/404', component: NotFound},
  {path: '*', redirect: '/404'}
]
let router = new Router({routes})

new Vue({
  render: h => h(App),
  router,
  log
}).$mount('#app');
