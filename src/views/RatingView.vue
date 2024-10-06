<script lang="ts" setup>
import { ref } from 'vue'


const ratings = ref([0, 0, 0, 0,0]); 

const setRating = (activityIndex: number, star: number) => {
    alert(`Selected ${star} rating for Activity ${activityIndex + 1}`);
    ratings.value[activityIndex] = star;
};
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Community Activities</h1>
                <p class="text-center">
                    On this page, User can rate community activities.
                </p>
            </div>
        </div>
    </div>

    <div class="wrapper" v-for="(rating, index) in ratings" :key="index">
        <div class="activity">
            <h1>Activity {{ index + 1 }}</h1>
            <p>Senior Health Home activity {{ index + 1 }}.</p>
        </div>
        <div class="rating">
            <p>Select rating:</p>
            <span v-for="star in 5" :key="star" @click="setRating(index, star)" class="star">★</span>
            <p>Show rating:</p>
            <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= rating }">★</span>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.activity {
    flex-grow: 1;
}

.rating {
    display: flex;
    align-items: center;
    gap: 10px; 
}

.star {
    cursor: pointer;
    color: #d8d8d8;
    font-size: 2rem;
    margin: 0 2px;
}

.star:hover,
.star:active,
.star.filled {
    color: orange;
}
</style>
