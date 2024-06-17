// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from '../components/WeatherWidget.vue';
import Tugas from '../components/Tugas.vue';

const routes = [
  {
    path: '/cuaca',
    name: 'WeatherWidget',
    component: WeatherWidget
  },
  {
    path: '/tugas',
    name: 'Tugas',
    component: Tugas
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
