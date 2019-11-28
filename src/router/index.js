// import Vue from 'vue'
import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
Vue.use(Router)

import layout from '../layout/layout'
export default new Router({
    routes: [{
        path: '/',
        // name: 'layout',
        component: layout,
        children: [{
                path: "/",
                name: "index",
                component: () => import("@/views/index/index.vue")
            },
            {
                path: "/hello-world",
                component: () => import("@/components/HelloWorld.vue")
            },
            {
                path: "/list",
                component: () => import("@/views/list/index.vue")
            },
            {
                path: "/department",
                component: () => import("@/views/department/index.vue")
                // component: () => import("@/views/department/columns.vue")
            }
        ]
    }, ]
})