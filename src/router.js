import vue from 'vue';
import VueRouter from 'vue-router';

import Login from './view/main/login.vue';
import FormRegister from './view/main/Form-Register.vue'
import Dashbord from './view/main/Dashbord.vue'
import DetailBook from './view/main/DetailBook.vue'



vue.use(VueRouter);

const routes = [
        {
            path: '/',
            name: 'Dashbord',
            component: Dashbord,
        },
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'FormRegister',
                component: FormRegister
            },
            {
                path: '/detail/:idBook',
                name: 'DetailBook',
                component: DetailBook,
                props: true
            }
];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router

