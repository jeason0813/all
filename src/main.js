// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

import home from './components/home/home';
const index1 = { template: '<div>index1</div>' };
const index2 = { template: '<div>index2</div>' };
const index3 = { template: '<div>index3</div>' };
import moods from './components/home/listBody/list/moods';
import plan from './components/home/listBody/plan/plan';

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: home,
      children:[
        { path: '/', redirect: 'moods' },
        {
          name:'moods',
          path:'moods',
          component:moods
        },
        {
          name:'plan',
          path:'plan',
          component:plan
        },
      ]
    },
    { path: '/index1', component: index1 },
    { path: '/index2', component: index2 },
    { path: '/index3', component: index3 }
  ],
  linkActiveClass: 'footer_active',
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
