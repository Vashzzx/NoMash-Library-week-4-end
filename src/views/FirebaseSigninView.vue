<template>
    <h1 class="text-center">Sign in</h1>
    <p class="text-center"><input type="text" placeholder="Email" v-model="email" /></p>
    <p class="text-center"><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="text-center"><button @click="signin">Sign in via Firebase</button></p>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const adminEmail = "admin@gmail.com"

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        if (userCredential.user.email == adminEmail) {
            alert("Welcome Admin")
            router.push('/Login')
        } else {
            alert("Login succeed!")
            router.push('/')
        }
      console.log("Login Successful!");
      console.log("userCredentail", userCredential); 
      console.log("userCredentail.user", userCredential.user);
      console.log("auth", auth)
    })
    .catch((error) => {
      console.log("Login failed!");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Login error code", errorCode)
      console.log("Login error message", errorMessage)
      alert("Login failed, error message: " + errorMessage)
    });
};
</script>
  