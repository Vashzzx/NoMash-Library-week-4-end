<template>
    <h1 class="text-center">Create an Account</h1>
    <p class="text-center"><input type="text" placeholder="Email" v-model="email" /></p>
    <p class="text-center"><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="text-center"><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentail) => {
      console.log("Register Successful!")
      console.log("userCredential", userCredentail)
      console.log("userCredentail.user", userCredentail.user)
      alert("Registration succeed!")
      router.push('/FireLogin')
    })
    .catch((error) => {
      console.log("Registration failed!")
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("register error code", errorCode)
      console.log("register error message", errorMessage)
      alert("Registration failed! error message: " + errorMessage)
    });
};
</script>
  