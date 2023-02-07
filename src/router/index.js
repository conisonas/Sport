import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ViewWorkout from "../views/ViewWorkout.vue";
import { supabase } from "../supabase/init";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: "/view-workout/:workoutId",
      name: "View-Workout",
      component: ViewWorkout,
      meta: {
        auth: false,
      },
    }
  ]
})


// 路由守卫
router.beforeEach((to, from, next) => {
  const user = supabase.auth.getUser();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: "Login" });
    return;
  }
  next();
});
export default router
