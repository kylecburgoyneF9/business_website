import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConsultingView from "../views/ConsultingView.vue";
import CoachingView from "../views/CoachingView.vue";
import PartnersView from "../views/PartnersView.vue";
import BlogView from "../views/BlogView.vue";
import BlogPostView from "../views/BlogPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "D3 Finance | Fractional CFO & Accounting Services",
        description: "D3 Finance provides fractional CFO, controller, accounting, and financial consulting services to growing businesses."
      }
    },
    {
      path: "/consulting",
      name: "consulting",
      component: ConsultingView,
      meta: {
        title: "Fractional CFO & Accounting Services | D3 Finance",
        description: "Fractional CFO, controller, accounting, bookkeeping, and financial consulting services designed for growing businesses."
      }
    },
    {
      path: "/coaching",
      name: "coaching",
      component: CoachingView,
      meta: {
        title: "Business & Finance Coaching | D3 Finance",
        description: "Practical business and finance coaching from D3 Finance for entrepreneurs and business owners."
      }
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
      meta: {
        title: "D3 Finance Insights | Fractional CFO & Financial Resources",
        description:
          "Practical financial guidance for business owners covering fractional CFO services, controllership, accounting, cash flow, and financial strategy."
      }
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPostView,
      meta: { title: "D3 Finance Insights" }
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
          resolve({ el: to.hash, behavior: 'smooth', top: nav.offsetHeight - 10 })
        }, 100)
      })

    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to) => {
  // Handle blog articles
  if (to.name === "blog-post") {
    return;
  }

  // Page title
  document.title = to.meta.title || "D3 Finance";

  // Meta description
  let description = document.querySelector('meta[name="description"]');

  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }

  description.setAttribute(
    "content",
    to.meta.description || "D3 Finance provides financial consulting and fractional CFO services to growing businesses."
  );
});

export default router;
