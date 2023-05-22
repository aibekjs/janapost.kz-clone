import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import HomeView from "../views/home/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: { path: "/home/index" },
    name: "home",
    component: HomeLayout,
    children: [
      {
        path: "index",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
