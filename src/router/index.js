import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anime from '../views/Anime.vue'
import PageAnime from '../views/PageAnime.vue'
import PageAnimeSaga from '../views/PageAnimeSaga'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/anime',
    name: 'anime',
    component: Anime
  },
  {
    path: '/PageAnime/:name',
    name: 'PageAnime',
    component: PageAnime
  },
  {
    path: '/PageAnimeSaga/:name/:saga',
    name: 'PageAnimeSaga',
    component: PageAnimeSaga
  },
  {
    path: '/Video/:name',
    name: 'Video',
    component: Video
  },

]

const router = new VueRouter({
  routes
})

export default router
