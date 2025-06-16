<template>
  <div class="py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="plan in plans" 
           :key="plan.name" 
           class="relative group"
           @mouseenter="hoveredPlan = plan.id"
           @mouseleave="hoveredPlan = null">
        <div class="absolute inset-0 bg-gradient-to-r" 
             :class="[plan.gradientColor]"
             :style="{ opacity: hoveredPlan === plan.id ? 0.1 : 0 }"
             style="transition: opacity 0.3s ease"></div>
        
        <div class="bg-[#12172b] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
          <div class="absolute top-0 right-0 mt-4 mr-4" v-if="plan.popular">
            <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
              Populaire
            </span>
          </div>

          <h2 :class="['text-3xl  mb-4', plan.color]">{{ plan.name }}</h2>
          
          <div class="flex flex-col items-baseline justify-between mb-6">
            <div class="flex mb-4">
              <span class="text-4xl font-bold">{{ plan.price }}</span>
              <span class="text-gray-400 text-center ml-2">FCFA</span>
            </div>
            <span class="text-xl text-gray-400">/ {{ plan.duration }}</span>
          </div>

          <NuxtLink :to="`/subscription/${plan.id}`">
            <button :class="[
              plan.btnColor,
              'w-full py-3 text-white font-semibold rounded-lg transition-all duration-300',
              'transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2',
              'focus:ring-offset-2 focus:ring-opacity-50',
              `focus:ring-${plan.btnColor}`
            ]">
              S'abonner maintenant
            </button>
          </NuxtLink>

          <ul class="mt-8 space-y-4">
            <li v-for="feature in plan.features" 
                :key="feature" 
                class="flex items-center p-2 border-t border-gray-700">
              <img src="/images/check.png" class="w-5 h-5 mr-3" alt="check">
              <span class="text-gray-300">{{ feature }}</span>
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

const handleSubscription = (planId) => {
  // Animation de click
  const button = event.target
  button.classList.add('scale-95')
  setTimeout(() => button.classList.remove('scale-95'), 100)
  
  // Navigation
  navigateTo(`/subscription/${planId}`)
}
</script>