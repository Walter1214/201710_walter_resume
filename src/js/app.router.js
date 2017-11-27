import VueRouter from 'vue-router';
import Vue from 'vue';
import Index from './component/Index.vue';
import Resume from './component/Resume.vue';
import Window from './component/Window.vue';
import Youtube from './component/Youtube.vue';
import Facebook from './component/Facebook.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/resume', component: Resume },
    { path: '/window', component: Window },
    { path: '/youtube', component: Youtube },
    { path: '/facebook', component: Facebook },
  ],
});
/* router.beforeEach((to, from, next) => {
  next();
}); */
export default router;
