import Vue from 'vue'
import Router from 'vue-router'
import Map_spot from './views/map_spot'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta:{
                keepAlive:false
            }
        },
/*        {
            path: '/map_spot',
            name: 'map_spot',
            component:  Map_spot,
            meta:{
                keepAlive:true
            }
        },*/
        {
            path: '/map_spot',
            name: 'map_spot',
            meta:{
                keepAlive:true
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/map_spot.vue')
        },
        {
            path: '/information',
            name: 'information',
            meta:{
                keepAlive:true
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Information.vue')
        },
        {
            path: '/map_line',
            name: 'map_line',
            meta:{
                keepAlive:true
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/map_line.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta:{
                keepAlive:false
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta:{
                keepAlive:false
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Registered.vue')
        },


    ]
})
