import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/root/main.vue';
import Home from '../views/home/index.vue';
import Demand from '../views/demand/index.vue';
import MyOrder from '../views/demand/my-order.vue';
import Account from '../views/account/index.vue';
import ManageCenter from '../views/account/manage-center.vue';
import CperatorManage from '../views/account/cperator-manage.vue';
import MyCert from '../views/account/my-cert.vue';

import NewsDetail from '../views/other/news-detail';
import NotFound from '../views/root/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Main', component: Main, redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { isShowTabBar: true, viewMeta: 1 },
  },
  {
    path: '/demand',
    name: 'Demand',
    component: Demand,
    meta: { isShowTabBar: true, viewMeta: 1 },
  },
  {
    path: '/demand/order',
    name: 'MyOrder',
    component: MyOrder,
    meta: { viewMeta: 1 },
  },

  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { isShowTabBar: true, viewMeta: 1 },
  },
  {
    path: '/account/manage',
    name: 'ManageCenter',
    component: ManageCenter,
    meta: { viewMeta: 2 },
  },
  {
    path: '/account/manage/cperator',
    name: 'CperatorManage',
    component: CperatorManage,
    meta: { viewMeta: 3 },
  },
  {
    path: '/account/cert',
    name: 'MyCert',
    component: MyCert,
    meta: { viewMeta: 2 },
  },
  {
    path: '/news-detail',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: { viewMeta: 2 },
  },

  { path: '*', name: 'NotFound', component: NotFound, meta: { viewMeta: 2 } },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
