<template>
  <div class="py-12 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="plan in plans" 
           :key="plan.name" 
           class="relative group perspective"
           @mouseenter="hoveredPlan = plan.id"
           @mouseleave="hoveredPlan = null">
        <!-- Card Backdrop Glow -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl"
             :style="{ opacity: hoveredPlan === plan.id ? 1 : 0 }"
             style="transition: all 0.5s ease"></div>
        
        <!-- Main Card -->
        <div class="relative bg-gradient-to-b from-gray-900 to-[#12172b] rounded-2xl p-8
                    backdrop-blur-xl border border-gray-800/50
                    transform transition-all duration-500 hover:scale-105
                    hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]">
          
          <!-- Popular Badge -->
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-1 rounded-full
                        shadow-lg text-white text-sm font-medium tracking-wider">
              POPULAIRE
            </div>
          </div>

          <!-- Plan Header -->
          <div class="text-center mb-8">
            <h2 :class="['text-3xl font-bold mb-2', plan.color]">{{ plan.name }}</h2>
            <div class="flex justify-center items-baseline space-x-2">
              <span class="text-5xl font-extrabold text-white">{{ plan.price }}</span>
              <span class="text-gray-400 font-medium">FCFA</span>
            </div>
            <span class="text-sm text-gray-400">par {{ plan.duration }}</span>
          </div>

          <!-- Subscribe Button -->
          <NuxtLink :to="`/subscription/${plan.id}`" class="block mb-8">
            <button :class="[
              'w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300',
              'transform hover:translate-y-[-2px] hover:shadow-lg',
              'bg-gradient-to-r',
              plan.gradientBtn || 'from-purple-600 to-pink-600',
              'text-white'
            ]">
              Commencer maintenant
            </button>
          </NuxtLink>

          <!-- Features -->
          <ul class="space-y-4">
            <li v-for="feature in plan.features" 
                :key="feature" 
                class="flex items-center space-x-3 text-gray-300 p-2
                       transition-colors duration-300 hover:bg-white/5 rounded-lg">
              <svg class="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoveredPlan = ref(null)

// Example plans data (replace with your actual data source)
const plans = [
  {
    id: 1,
    name: 'Forfait Bronze',
    price: '1500',
    duration: '1 Mois',
    btnColor: 'bg-emerald-500',
    color: 'text-emerald-300',
    features: [
      'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
  {
    id: 2,
    name: 'Forfait Argent',
    price: '4000',
    duration: '3 Mois',
    btnColor: 'bg-violet-600',
    color: 'text-violet-400',
    features: [
      'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
  {
    id: 3,
    name: 'Forfait Gold',
    price: '7000',
    duration: '6 Mois',
    btnColor: 'bg-yellow-600',
    color: 'text-yellow-400',
    features: [
      'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
  {
    id: 4,
    name: 'Forfait Diamant',
    price: '10000',
    duration: '12 Mois',
    btnColor: 'bg-orange-500',
    color: 'text-yellow-400',
    features: [
      'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
]
</script>

<style scoped>
.perspective {
  perspective: 2000px;
}
</style>