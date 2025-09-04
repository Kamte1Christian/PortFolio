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
</style>