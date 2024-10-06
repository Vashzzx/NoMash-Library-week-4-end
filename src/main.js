// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDrMO-bA4gPCaqGjMNExh7J8_d9LKGZ8SE",
//   authDomain: "week7--zixun.firebaseapp.com",
//   projectId: "week7--zixun",
//   storageBucket: "week7--zixun.appspot.com",
//   messagingSenderId: "956670605119",
//   appId: "1:956670605119:web:500ec9b66d814426e1858a"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
