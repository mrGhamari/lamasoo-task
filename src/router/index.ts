import Vue from "vue";
import type { RouteConfig } from "vue-router";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import NotFound from "@/views/NotFound.vue";
import Person from "@/views/person/index.vue";

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/person/:id",
    name: "Person",
    component: Person,
  },
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});

export default router;
