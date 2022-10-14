import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/root/main.vue';
import Home from '../views/home/index.vue';
import Demand from '../views/demand/index.vue';
import Account from '../views/account/index.vue';
import ManageCenter from '../views/account/manage-center.vue';
import MyCert from '../views/account/my-cert.vue';

import DemoList from '../views/demand/DemoList';
import NotFound from '../views/root/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Main', component: Main, redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { isShowTabBar: true },
  },
  {
    path: '/demand',
    name: 'Demand',
    component: Demand,
    meta: { isShowTabBar: true },
  },
  { path: '/demand/list', name: 'List', component: DemoList },

  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { isShowTabBar: true },
  },
  { path: '/account/manage', name: 'ManageCenter', component: ManageCenter },
  { path: '/account/cert', name: 'MyCert', component: MyCert },

  { path: '*', name: 'NotFound', component: NotFound },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
