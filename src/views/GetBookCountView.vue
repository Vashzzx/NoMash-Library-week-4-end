<template>
  <div>
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const count = ref('');
const error = ref('');

const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-pl46ak2wqa-uc.a.run.app');
    console.log("response", response.data);
    count.value = response.data.count;
  } catch (err) {
    console.error("Error: ", err);
    error.value = err;
    count.value = null;
  }
}
</script>
