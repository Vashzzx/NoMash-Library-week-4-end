<template>
  <!-- 🗄️ W3. Library Registration Form -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ Login page</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3 offset-md-4">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" @blur="() => validateName(true)"
                @input="() => validateName(false)" v-model="formData.username" />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>



          </div>
          <div class="row mb-3 offset-md-4">
            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)" v-model="formData.password" />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>


          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import router from '../router/index'
import { useAuth } from '../router/authenticate'

const hardCodeUserName = 'zzx'
const hardCodepassword = '12345678'
const { isAuthenticated } = useAuth()

const formData = ref({
  username: '',
  password: ''
})

function retrieveObject(key) {
  var object = localStorage.getItem(key);
  if (object) {
    return JSON.parse(object);
  }
  return null;
}
//const submittedCards = ref([])

const submitForm = () => {

  validateName(true)
  validatePassword(true)

  var info = retrieveObject("loginInfo");

  for (let i = 0; i < info.length; i++) {
    if (!errors.value.username
      && !errors.value.password
      && formData.value.username == info[i].username
      && formData.value.password == info[i].password) {
      localStorage.setItem("userInfo", JSON.stringify(info[i]))
      alert("login success")
      isAuthenticated.value = true
      router.push({ name: 'About' })
    }

  }

  // const { username, password } = {};


  // if (!errors.value.username
  //   && !errors.value.password
  //   && formData.value.username === hardCodeUserName
  //   && formData.value.password === hardCodepassword) {
  //   alert("login success")
  //   isAuthenticated.value = true
  //   router.push({ name: 'About' })
  // } else if (!errors.value.username
  //   && !errors.value.password
  //   && formData.value.username === username
  //   && formData.value.password === password) {
  //   //   alert("login success")
  //   // isAuthenticated.value = true
  //   // router.push({ name: 'About' }

  //   // )

  // }
}


const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  if (formData.value.password.length < 8) {
    if (blur) errors.value.password = `Password must be at least 8 characters long.`
  } else {
    errors.value.password = null
  }
}


</script>