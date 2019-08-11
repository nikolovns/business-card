import Home from './components/pages/simple/Home.vue'
import About from './components/pages/simple/About.vue'
import Templates from './components/pages/simple/Templates.vue'
import User from './components/pages/cta/User.vue'
import Register from './components/pages/simple/Register.vue'


export const routes = [
    { path: '', component: Home },
    { path: '/about', component: About },
    { path: '/templates', component: Templates },
    { path: '/user', component: User }
]