import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin/api-access-log",
    name: "ApiAccessLog",
    component: () => import("../views/ApiAccessLog.vue"),
    meta: {
      requiresAuth: true,
      requiredRole: "ADMIN",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const role = store.getters["auth/getRole"];

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      return next({ name: "Login" });
    }

    if (to.meta.requiredRole && role !== to.meta.requiredRole) {
      return next({ name: "Login" });
    }
  }
  next();
});

export default router;
