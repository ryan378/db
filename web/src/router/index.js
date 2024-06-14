import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Mutasi from '../components/Mutasi.vue';
import Transfer from '../components/Transfer.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/mutasi', component: Mutasi },
    { path: '/transfer', component: Transfer },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
