import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
//Es la que guarda todas las rutas
const routes: RouteRecordRaw[] = [{
    path: '/',
    component: () => import('@/pages/Home.vue'),
    name : 'home'
    },
    {
        path: '/movies/:id',
        component: () => import('@/pages/MovieDetails.vue'),
        name: 'movie-details'    
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router;