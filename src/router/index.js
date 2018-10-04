import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Settings from '../pages/Settings'
import Todo from '../pages/Todo'

Vue.use(VueRouter)

const routes = [

    { path: "/",  component: Home },
    { path: "/index",  component: Home },
    { path: "/login", component: Login },
    { path: "/settings", component: Settings },
    { path: "todo", component: Todo }
]

const index = new VueRouter({
    routes
})

export default index