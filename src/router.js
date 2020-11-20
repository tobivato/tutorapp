import {createRouter, createWebhistory} from 'vue-router';

const router = createRouter({
    history: createWebhistory(),
    routes:[
        {path: '/couches', component: null},
        {path: '/couches/:id', component: null,
            children: [
                {path:'contact',component: null}
            ]},
        {path: '/register', componebts: null},
        {path: '/requests', componebts: null},
        {path: '/:notFound(.*)', componebts: null},
    ],
});

export default router;