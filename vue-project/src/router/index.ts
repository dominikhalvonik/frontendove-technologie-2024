import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurView from "@/views/OurView.vue";
import AComponent from "@/components/AComponent.vue";
import BComponent from "@/components/BComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/our',
      name: 'our',
      component: OurView
    },
    {
      path: '/component',
      name: 'component',
      component: AComponent,
      children: [
        {
          path: '/:username',
          name: 'component-username',
          component: BComponent,
          props: true
        }
      ],
    }
  ]
})

export default router
