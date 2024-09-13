<template>
    <div>
      <h1 class="text-center">Add Book</h1>
      <form @submit.prevent="addBook">
        <div class="text-center">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div class="text-center">
          <label for="name" >Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <p class="text-center"><button type="submit">Add Book</button></p>
      </form>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import db from '../firebase/init.js'; // Firebase initialization
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods




const isbn = ref('');  
const name = ref('');  

const addBook = async () => {
    try{

    
    if (isNaN(Number(isbn.value))) {
        alert('ISBN must be a valid number')
        return;
        }
        await addDoc(collection(db, 'books'), {
          isbn: Number(isbn.value),
          name: name.value,
        });

        
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    }
</script>


  