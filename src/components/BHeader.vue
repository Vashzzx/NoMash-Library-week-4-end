<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rating" class="nav-link" active-class="active">Rating</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/manage" class="nav-link" active-class="active">Manage</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Register</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active"  @click="logout">Logout</button>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" @click="firebaseLogout"> Firebase Logout</button>
        </li>
        <li class="nav-item">
          <router-link to="/addBook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link" active-class="active">BookList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherView" class="nav-link" active-class="active">WeatherView</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookApi" class="nav-link" active-class="active">GetBookApi</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookApi" class="nav-link" active-class="active">GetAllBookApi</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
<script setup>
import router from '../router/index'
import { useAuth } from '../router/authenticate'
import { getAuth, signOut } from 'firebase/auth';
const { isAuthenticated } = useAuth()



const logout = () => {
  isAuthenticated.value = false;
  localStorage.removeItem("userInfo")
  alert("Logout success")
  router.push({name:'Home'})
 
}
const auth = getAuth()
const firebaseLogout = () =>{
    signOut(auth).then(() =>{
      alert("Logout successful")
    }).catch((error) => {
      console.log("logout error", error)

    });
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
