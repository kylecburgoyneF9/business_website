import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConsultingView from "../views/ConsultingView.vue";
import CoachingView from "../views/CoachingView.vue";
import PartnersView from "../views/PartnersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/consulting",
      name: "consulting",
      component: ConsultingView,
    },
    {
      path: "/coaching",
      name: "coaching",
      component: CoachingView,
    },
    /*{
      path: "/partners",
      name: "partners",
      component: PartnersView,
    },*/
    { path: '/:catchAll(.*)', 
      redirect: '/' 
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const nav = document.getElementById('nav')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth', top: nav.offsetHeight })
        }, 100)
      })

    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
