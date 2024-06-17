// main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router' // Impor konfigurasi router

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // Import dan tambahkan plugin Quasar di sini jika diperlukan
})

// Gunakan konfigurasi router
myApp.use(router)

// Mount aplikasi ke elemen dengan id "app" di index.html
myApp.mount('#app')
