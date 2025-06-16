<template>
  <div class="min-h-screen max-w-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <NavBar class="mb-10 animate-fadeIn" />
      
      <div class="w-full text-center space-y-6 mb-16 mt-10 animate-slideDown">
        <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-600">
          Acheter un abonnement
        </h1>
        <p class="text-2xl text-gray-400">
          Choisissez le forfait qui vous convient
        </p>
      </div>

      <SubscriptionPackcopy2 v-motion-slide-visible-once-bottom />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from '~/components/subscription/NavBar.vue'
import SubscriptionPackcopy2 from '~/components/subscription/SubscriptionPackcopy2.vue'

onMounted(() => {
  document.title = 'CINAF - Choisir un abonnement'
})
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in;
}

.animate-slideDown {
  animation: slideDown 0.7s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from { 
    transform: translateY(-20px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}
</style>