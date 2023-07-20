import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/pages/HelloWorld.vue";
import Two from "@/pages/Two.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: HelloWorld,
    },
    {
        path: "/two",
        name: "two",
        component: Two,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
