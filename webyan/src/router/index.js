import { createRouter, createWebHistory } from 'vue-router'

import Article from '@/views/Article/index.vue'
import Chat from '@/views/Chat/index.vue'
import Search from '@/views/Search/index.vue'
import DefaultSearch from '@/views/DefaultSearch/index.vue'
import ContactUs from '@/views/ContactUs/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/article',
      component:Article
    },
    {
      path:'/chat',
      component:Chat,
      children:[
        {
          path:'defaultsearch',
        component:DefaultSearch
        }
      ]
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/contactus',
      component:ContactUs
    }
  ]
})

export default router
