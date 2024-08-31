import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuth } from './authenticate'
const { isAuthenticated } = useAuth()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    // Perform logic before every route change
    if (to.name == 'About' ) {
        if (isAuthenticated.value == true){
        console.log("indexjs-login success",isAuthenticated.value)
        next();
        }
        else{
            console.log("indexjs-Need login",isAuthenticated.value)
            alert("Need login")
            next({ name: 'Login'});

        }
      
     
    } else {

      next();
    }
  });

export default router