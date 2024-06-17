<template>
  <div class="weather-container">
    <q-card class="q-pa-md weather-widget q-mt-lg">
      <q-card-section>
        <div class="text-h6">Lokasi Cuaca</div>
        <q-input v-model="city" class="input" label="Search City" @keyup.enter="fetchWeather" outlined dense />
        <q-btn @click="fetchWeather" label="Search" color="primary" dense class="q-mt-sm" />
        <q-icon name="cloud" size="64px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div v-if="weather">
          <div class="text-h5">{{ weather.name }}</div>
          <div class="text-h5">{{ weather.main.temp }} °C</div>
          <div class="text-subtitle2">{{ weather.weather[0].description }}</div>
        </div>
        <div v-else>
          <q-spinner />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    location: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const apiKey = 'b942fd667c276d28896dc9c856dde1a5' // Add your API key here
    const weather = ref(null)
    const city = ref(props.location)

    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
          throw new Error('City not found')
        }
        const data = await response.json()
        weather.value = data
      } catch (error) {
        console.error('Error fetching weather data:', error)
        weather.value = null
      }
    }

    onMounted(() => {
      fetchWeather()
    })

    return {
      weather,
      city,
      fetchWeather
    }
  }
}
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;
}

.weather-widget {
  max-width: 400px;
  width: 100%;
  color: white;
  background-color: rgba(255, 255, 255, 0);
}
.input {
  background-color: rgba(255, 255, 255, 0.363);
  color: white;
}

.weather-widget .q-icon {
  display: block;
  margin: 0 auto;
}

.weather-widget .text-h6 {
  text-align: center;
}

.weather-widget .text-h5 {
  text-align: center;
}

.weather-widget .text-subtitle2 {
  text-align: center;
}
</style>
