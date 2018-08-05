// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Greet from '@/components/Greet'
import Login from  '@/components/Login'
import SignUp from '@/components/SignUp'
import Acc from '@/components/Acc'


const options = {
  namespace: 'vuejs__'
};

Vue.use(Router);
Vue.config.productionTip = false;


let routes = [
  {path:'/',component:Greet},
  {path:'/signup',component:SignUp},
  {path:'/login',component:Login},
  {path:'/acc',component:Acc}
]

let router = new Router({routes})


/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
