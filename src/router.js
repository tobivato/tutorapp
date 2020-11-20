import {createRouter, createWebHistory} from 'vue-router';
import CouchDetail from './pages/couches/CouchDetail.vue';
import CouchesList from './pages/couches/CouchesList.vue';
import CouchRegistration from './pages/couches/CouchRegistration.vue';
import ContactCouch from './pages/requests/ContactCouch.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';




const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/couches'},
        {path: '/couches', component: CouchesList},
        {path: '/couches/:id', component: CouchDetail,
            children: [
                {path:'contact',component: ContactCouch}
            ]},
        {path: '/register', componebts: CouchRegistration},
        {path: '/requests', componebts: RequestReceived},
        {path: '/:notFound(.*)', componebts: NotFound},
    ],
});

export default router;