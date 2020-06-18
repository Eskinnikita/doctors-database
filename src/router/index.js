import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DoctorsList from "../views/Doctors/DoctorsList"
import DoctorView from "../views/Doctors/DoctorView"
import DoctorForm from "../views/Doctors/DoctorForm"
import DoctorsRequests from "../views/Admin/DoctorsRequests"
import ReviewsRequests from "../views/Admin/ReviewsRequests"
import NotFound from "../views/NotFound"
import store from '../store/index'

Vue.use(VueRouter)

const isAdmin = (to, from, next) => {
    if (store.getters.isAdmin) {
        next()
        return
    }
    next('/')
}

// const isDoctor = (to, from, next) => {
//     if (store.getters.isDoctor) {
//         next()
//         return
//     }
//     next('/')
// }

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/doctors/:city?/:specId?',
        name: 'DoctorsList',
        component: DoctorsList
    },
    {
        path: '/doctor/:id',
        name: 'DoctorView',
        component: DoctorView
    },
    {
        path: '/doctor-form',
        name: 'DoctorReg',
        component: DoctorForm
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
        meta: {
            title: 'Страница не найдена'
        }
    },
    {
        path: '/doctors-requests',
        component: DoctorsRequests,
        beforeEnter: isAdmin
    },
    {
        path: '/reviews-requests',
        component: ReviewsRequests,
        beforeEnter: isAdmin
    },
    {
        path: '*',
        redirect: '/404',
        meta: {
            title: 'Страница не найдена'
        }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
