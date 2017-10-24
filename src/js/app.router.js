import VueRouter from 'vue-router';
import Vue from 'vue';
import Index from './component/Index.vue';
import Resume from './component/Resume.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/resume', component: Resume },
  ],
});
/* router.beforeEach((to, from, next) => {
  next();
}); */
export default router;
