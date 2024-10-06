<template>
  <div>
    <h1>Weather API</h1>
    <input type="text" v-model="city" id="city" placeholder="Enter City Name" class="search-input" required>
    <button type="submit" @click="searchByCity">Search</button>

    <main>
      <div v-if="weatherData">
        <h2>{{ weatherData.name }},{{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon">
          <p>{{ temperature }}°c</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const city = ref('')
const weatherData = ref('')
const apiKey = '0660d0c6968ecc8dde6ae284149c257d'
const iconUrl = ref('')
const temperature = ref('')

const searchByCity = async() => {
  try {
    const reponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=${apiKey}`)
    weatherData.value = reponse.data[0];
    const lat=reponse.data[0].lat;
    const lon=reponse.data[0].lon;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    await fetchWeatherData(url)
    // iconUrl.value = reponse.data ? `http://api.openweathermap.org/img/w/${reponse.data.weather[0].icon}.png` : null;
    // temperature.value = reponse.data ? Math.floor(reponse.data.main.temp - 273) : null
  } catch (error) {
    console.log(error);

  }

}

const fetchCurrentLocationWeather = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      await fetchWeatherData(url)
    })
  }
}

const fetchWeatherData = async (url) => {
  try {
    const reponse = await axios.get(url)
    weatherData.value = reponse.data;
    iconUrl.value = reponse.data ? `http://api.openweathermap.org/img/w/${reponse.data.weather[0].icon}.png` : null;
    temperature.value = reponse.data ? Math.floor(reponse.data.main.temp - 273) : null
  } catch (error) {
    console.log(error);

  }
}

fetchCurrentLocationWeather()
</script>

<style lang="scss" scoped></style>