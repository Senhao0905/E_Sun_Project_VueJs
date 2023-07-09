import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("../views/Login.vue")
    },
    {
      
        path: '/register',
        name: 'register',
        component: () => import("../views/Register.vue")
      
    },
    {
      path:'/home',
      name:'home',
      component: () => import("../views/HomePage.vue")
    },
    {
      path:'/comment:id',
      name:'comment',
      component: () => import("../views/CommentPage.vue"),
      props : true
    },
    {
      path:'/edit:postId',
      name:'edit',
      component: () => import("../views/Edit.vue"),
      props:true
    }
    
  ]
})

export default router
