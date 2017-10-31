import VueRouter from 'vue-router';
import Vue from 'vue';
import Index from './component/Index.vue';
import Resume from './component/Resume.vue';
import Window from './component/Window.vue';
import YoutubeVideo from './component/YoutubeVideo.vue';
import FacebookVideo from './component/FacebookVideo.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/resume', component: Resume },
    { path: '/window', component: Window },
    { path: '/youtube', component: YoutubeVideo },
    { path: '/facebook', component: FacebookVideo },
  ],
});
/* router.beforeEach((to, from, next) => {
  next();
}); */
export default router;
