import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Buy from '@/components/HomeHolder'
import NewSell from '@/components/NewSell'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/halo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Home
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/sell',
      name: 'Sell',
      component: NewSell
    }
  ]
})
