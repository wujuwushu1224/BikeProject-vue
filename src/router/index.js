import Vue from 'vue'
import Router from 'vue-router'
import MessageComponent from '@/components/Message'
import IndexComponent from '@/components/Index'
import MyMoneyComponent from '@/components/MyMoney'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:IndexComponent
    },
    {
      path: '/message',
      name: 'Message',
      component: MessageComponent
    },
    {
      path:'/mymoney',
      name:'MyMoney',
      component:MyMoneyComponent
    }
  ]
})
