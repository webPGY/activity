import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('@/components/Home')
const Xiazhu=()=>import('@/components/Xiazhu')
const Cordfind=()=>import('@/components/Cordfind')
const Welcomebets=()=>import('@/components/Welcomebets')
const Searchwallets=()=>import('@/components/Searchwallets')
const Awardinfo=()=>import('@/components/Awardinfo')
const Detailsinfo=()=>import('@/components/Detailsinfo')

Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        title:"免费竞猜世界杯，瓜分万元UBTC大奖!"
      }
    },
    {
      path: '/xiazhu',
      name: 'Xiazhu',
      component: Xiazhu,
      meta:{
        title:"请在下方选出你心中大的冠军队伍"
      }
    },
    {
      path: '/cordfind',
      name: 'Cordfind',
      component: Cordfind,
      meta:{
        title:"中奖查询"
      }
    },
    {
      path: '/welcomebets/:id',
      name: 'Welcomebets',
      component: Welcomebets,
      meta:{
        title:"欢迎下注"
      }
    },
    {
      path: '/searchwallets',
      name: 'Searchwallets',
      component: Searchwallets,
      meta:{
        title:"中奖查询"
      }
    },
    {
      path: '/awardinfo/:id',
      name: 'Awardinfo',
      component: Awardinfo,
      meta:{
        title:"竞猜结果"
      }
    },
    {
      path: '/detailsinfo/:id',
      name: 'Detailsinfo',
      component: Detailsinfo,
      meta:{
        title:"返回详情"
      }
    },
    {
      path:'*',
      redirect:'/home'
    }

  ]
})
