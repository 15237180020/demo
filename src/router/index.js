import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    redirect:"/homepage",
    component: () => import('../views/About.vue'),
    children:[{//下面的
      path:"/homepage",
      name:"homepage",
      component:()=> import('../views/homepage.vue'),
      children:[{
        path:"/lists",
        name:"lists",
        component:()=> import("../views/lists.vue"),
        meta:{name:"后台管理"}

      },{
        path:"/album",
        name:"album",
        component:()=> import("../views/album.vue"),
        meta:{name:"相册管理"}
      },{
        path:"/commodity",
        name:"commodity",
        component:()=> import("../views/commodity.vue"),
        meta:{name:"商品管理"}
      }
    ]
    },
    {    
        path:"/commoditys",
        name:"commoditys",
        component:()=> import("../views/commoditys.vue"),
        children:[{
          path:"/commoditylist",
          name:"commoditylist",
          component:()=> import("../views/commoditylist.vue"),
          meta:{name:"商品列表"}
        },{
          path:"/classificationlist",
          name:"classificationlist",
          component:()=> import("../views/classification.vue"),
          meta:{name:"分类列表"}
        },{
          path:"/commodityge",
          name:"commodityge",
          component:()=> import("../views/commodityge.vue"),
          meta:{name:"商品规格"}
        }]
    },{
        path:"/order",
        name:"order",
        component:()=> import("../views/order.vue"),
        children:[{
          path:"/orderlist",
          name:"orderlist",
          component:()=> import("../views/orderlist.vue"),
          meta:{name:"订单管理"}
        },{
          path:"/invoicelist",
          name:"invoicelist",
          component:()=> import("../views/invoicelist.vue"),
          meta:{name:"发票管理"}
        },{
          path:"/Aftersale",
          name:"Aftersale",
          component:()=> import("../views/Aftersale.vue"),
          meta:{name:"售后管理"}
        }]
    },{
      path:"/member",
      name:"member",
      component:()=> import("../views/member.vue"),
      children:[{
        path:"/memberlist",
        name:"memberlist",
        component:()=> import("../views/memberlist.vue"),
        meta:{name:"会员列表"}
      },{
        path:"/memberGrade",
        name:"memberGrade",
        component:()=> import("../views/memberGrade.vue"),
        meta:{name:"会员等级"}
      }]
    }
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('token')){
      next()
    }else{
       if(to.path=='/'){
         next()
       }else {
         next('/')
       }
    }

})
export default router
