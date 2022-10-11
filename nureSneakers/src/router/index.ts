import type { title } from "process";
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
  path: '/',
  name: 'home',
  component: () => import('../views/HomeView.vue'),
  meta: { title: 'DS - Sneakers'}
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router