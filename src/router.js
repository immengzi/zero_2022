import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage'
import NaturePage from "@/components/NaturePage"
import ArchitecturePage from "@/components/ArchitecturePage"
import StudentPage from "@/components/StudentPage"
import About from './components/AboutPage'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/nature', component: NaturePage},
    { path: '/architecture', component: ArchitecturePage},
    { path: '/student', component: StudentPage},
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
