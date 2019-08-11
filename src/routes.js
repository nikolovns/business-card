import Home from './components/pages/simple/Home.vue'
import About from './components/pages/simple/About.vue'
import Templates from './components/pages/simple/Templates.vue'


export const routes = [
    { path: '', component: Home },
    { path: '/about', component: About },
    { path: '/templates', component: Templates }
]