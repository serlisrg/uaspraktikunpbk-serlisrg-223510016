<!-- App.vue -->

<template>
  <div class="q-pa-md bg">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-list padding >
          <q-item clickable v-ripple @click="$router.push({ name: 'WeatherWidget' })">
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>

            <q-item-section>
              Weather Widget
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push({ name: 'Tugas' })">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              List Tugas
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const drawer = ref(false);
    const miniState = ref(true);

    return {
      drawer,
      miniState,
    };
  },
};
</script>

<style>
.nav {
  background-color: red;
}
  .bg {
    background-image: url(./assets/bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
