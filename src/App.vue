<script setup>

import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
//import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue'
import HomeView from './views/HomeView.vue'


var arr = [{ "username": 'zzx', "password": 12345678, "role": 1 },{ "username": 'lisi', "password": 12345678, "role": 2 }]
localStorage.setItem("loginInfo", JSON.stringify(arr));
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>

    <main class="main-box">
      <!--<LibraryRegistrationForm />-->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
.about {
  text-align: center;
}
</style>
