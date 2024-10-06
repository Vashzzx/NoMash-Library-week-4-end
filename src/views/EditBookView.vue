<template>
    <div>
      <h1 class="text-center">Edit Book</h1>
      <form @submit.prevent="editBook">
        <div class="text-center">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div class="text-center">
          <label for="name" >Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <p class="text-center"><button type="submit">Edit Book</button></p>
      </form>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import db from '../firebase/init.js'; // Firebase initialization
import { setDoc, getDoc, doc } from 'firebase/firestore'; // Firestore methods
import { useRoute } from 'vue-router'



const isbn = ref('');  
const name = ref('');  
const bookId = useRoute().params.bookid
console.log("edit book get route param: " + bookId)

const getBook = async () => {
    try{
    const docRef = doc(db,"books",bookId);
    const docSnap = await getDoc(docRef);

    //await getDoc(collection(db, 'books',''), {
      //isbn: Number(isbn.value),
      //name: name.value,
    //});
    if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  isbn.value = docSnap.data().isbn
  name.value = docSnap.data().name
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

  } catch (error) {
    console.error('Error get book: ', error);
  }

}
const editBook = async () => {
    try{

    
    if (isNaN(Number(isbn.value))) {
        alert('ISBN must be a valid number')
        return;
        }
        
        await setDoc(doc(db, 'books', bookId), {
          isbn: Number(isbn.value),
          name: name.value,
        });

        
        isbn.value = '';
        name.value = '';
        alert('Book edit successfully!');
      } catch (error) {
        console.error('Error edit book: ', error);
      }
    }

    getBook();
</script>


  