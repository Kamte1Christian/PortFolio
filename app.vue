<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
// Configuration SEO globale
useSeoMeta({
  title: 'Portfolio - Kamte Christian',
  ogTitle: 'Portfolio - Kamte Christian',
  description: 'Portfolio professionnel de Kamte Christian - Candidat pour bourses d\'études',
  ogDescription: 'Portfolio professionnel de Kamte Christian - Candidat pour bourses d\'études',
  ogImage: '/images/profile-large.jpeg',
  twitterCard: 'summary_large_image'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #4B5563;
}
::-webkit-scrollbar-thumb:active {
  background-color: #4B5563;
}
</style>