import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Citas from "@/views/Citas";
import NuevoHorario from "@/views/NuevoHorario";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/citas',
        name: 'citas',
        component: Citas
    },
    {
        path: '/agregar',
        name: 'agregar',
        component: NuevoHorario
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
