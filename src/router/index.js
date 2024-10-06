import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
// import { useAuth } from './authenticate'
import RatingView from '@/views/RatingView.vue'
import ManageView from '@/views/ManageView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/components/BookListView.vue'
import EditBookView from '@/views/EditBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
// const { isAuthenticated } = useAuth()


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: false }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/rating',
    name: 'Rating',
    component: RatingView,
    meta: { requiresAuth: true }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: ManageView,
    meta: { requiresAuth: true, role: ['Admin'] }
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addBook',
    name: 'addBook',
    component: AddBookView
  },
  {
    path: '/booklist',
    name: 'booklist',
    component: BookListView
  },
  {
    path: '/editBook/:bookid',
    name: 'editBook',
    component: EditBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  // if (to.name == 'About' ) {
  //     if (isAuthenticated.value == true){
  //     console.log("indexjs-login success",isAuthenticated.value)
  //     next();
  //     }
  //     else{
  //         console.log("indexjs-Need login",isAuthenticated.value)
  //         alert("Need login")
  //         next({ name: 'Login'});
  //     }
  // } else {
  //   next();
  // }

  if (to.meta.requiresAuth) {
    var info = retrieveObject('userInfo')
    console.log(info);
    
    if (info) {
      const { role } = info
      if (to.meta.role && to.meta?.role.includes('Admin')) {
        if (role == 2) {
          alert('Manager Only')
          next({ name: 'Login' })
        } else {
          next()
        }
      } else {
        next()
      }
    } else {
      alert('Need Login')
    }
  } else {
    next()
  }
})
function retrieveObject(key) {
  var object = localStorage.getItem(key)
  if (object) {
    return JSON.parse(object)
  }
  return null
}
export default router
