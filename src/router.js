import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '@/components/HomePage'
import NaturePage from "@/components/NaturePage"
import ArchitecturePage from "@/components/ArchitecturePage"
import StudentPage from "@/components/StudentPage"
import AboutPage from '@/components/AboutPage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/nature', component: NaturePage},
    { path: '/architecture', component: ArchitecturePage},
    { path: '/student', component: StudentPage},
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    base: process.env.BASE_URL,
    history: createWebHashHistory (),
    routes,
})

export default router
