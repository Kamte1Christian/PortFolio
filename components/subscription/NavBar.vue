<template>
  <nav class="fixed w-full top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm bg-[#0f0c29]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <!-- <img src="/images/logo.png" class="h-8 w-auto" alt="Logo"> -->
            <span class="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text text-transparent">
              CINAF
            </span>
          </NuxtLink>
        </div>

        <div class="hidden sm:flex items-center space-x-4">
          <NuxtLink 
            to="/login"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Connexion
          </NuxtLink>
          <NuxtLink 
            to="/register"
            class="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg
                   hover:shadow-lg transform hover:scale-105 transition-all duration-300
                   font-medium text-sm">
            S'inscrire
          </NuxtLink>
        </div>

        <!-- Menu mobile -->
        <div class="sm:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="text-gray-300 hover:text-white p-2"
            :aria-expanded="isMenuOpen">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile panel -->
    <div v-show="isMenuOpen" class="sm:hidden bg-[#0f0c29] bg-opacity-95 backdrop-blur-sm">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink 
          to="/login"
          class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Connexion
        </NuxtLink>
        <NuxtLink 
          to="/register"
          class="block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-2 rounded-md text-base font-medium">
          S'inscrire
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>