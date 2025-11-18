import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BodyPart from '../components/layout/BodyPart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: BodyPart
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: ,
    // },
    // {
    //   path: '/notes',
    //   name: 'Notes',
    //   component: NotesView,
    // },
    // {
    //   path: '/notes/:id',
    //   name: 'note',
    //   component: NoteView,
    // },
    // {
    //   path: '/Form',
    //   name: 'forms',
    //   component: FormsView,
    // },
    // {
    //   path: '/modif/:id',
    //   name: 'modif',
    //   component: ModifView,
    // },
    function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router