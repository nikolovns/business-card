import Home from './components/pages/simple/Home.vue'
import About from './components/pages/simple/About.vue'
import Templates from './components/pages/simple/Templates.vue'
import User from './components/pages/cta/User.vue'
import ShoppingCart from './components/commerce/ShoppingCard.vue'


export const routes = [
    { path: '', component: Home },
    { path: '/about', component: About },
    { path: '/templates', component: Templates },

    { path: '/user', component: User , children: [
        { path: ':id', component: User }
    ] },

    // { path: '/user/:id/shopping-cart', component: ShoppingCart }
]