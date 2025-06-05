import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/airdrop",
        name: "airdrop",
        component: () => import("@/views/airdrop/index.vue"),
        meta: {
          title: "空投列表",
        },
      },
      {
        path: "/",
        name: "tokens",
        component: () => import("@/views/tokens/index.vue"),
        meta: {
          title: "代币列表",
        },
      },
      {
        path: "/analyze",
        name: "analyze",
        component: () => import("@/views/analyze/index.vue"),
        meta: {
          title: "交易分析",
        },
      },
      {
        path: "/calculator",
        name: "calculator",
        component: () => import("@/views/calculator/index.vue"),
        meta: {
          title: "积分计算器",
        },
      },
      {
        path: "/monitor",
        name: "monitor",
        component: () => import("@/views/monitor/index.vue"),
        meta: {
          title: "实时监控",
        },
      },
      {
        path: "/auth",
        component: () => import("@/views/auth/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
