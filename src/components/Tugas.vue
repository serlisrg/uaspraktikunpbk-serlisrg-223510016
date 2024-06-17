<template>
    <div class="tugas-container q-pa-md">
      <q-btn
        v-for="(tugas, index) in tugasLinks"
        :key="index"
        :label="tugas.label"
        :href="tugas.link"
        target="_blank"
        color="red"
        icon="mail"
        icon-right="send"
        inline
        class="q-mb-md"
        full-width
      />
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      const tugasLinks = [
        { label: 'Tugas 1', link: 'https://tugas1-pbk-223510016.vercel.app/' },
        { label: 'Tugas 2', link: 'https://serlina-tugas2.vercel.app/' },
        { label: 'Tugas 3', link: 'https://serlina-tugas3.vercel.app/' },
        { label: 'Tugas 4', link: 'https://tugas4serli.vercel.app/' },
        { label: 'Tugas 5', link: 'https://tugas5serlina.vercel.app/' },
        { label: 'Tugas 6', link: 'https://tugas6-serlina-siregar.vercel.app/' },
        { label: 'Tugas 7', link: 'https://tugas7-serlina.vercel.app/' },
      ];
  
      return {
        tugasLinks,
      };
    },
  };
  </script>
  
  <style scoped>
  .tugas-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }
  </style>
  