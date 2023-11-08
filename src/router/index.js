import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../home/Home.vue';
import Orders from '../orders/Orders.vue';
import Forum from '../forum/Forum.vue';
import User from '../user/User.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/orders', component: Orders },
        { path: '/forum', component: Forum },
        { path: '/user', component: User }
    ]
});
export default router;