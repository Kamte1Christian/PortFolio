<template>
  <div class="py-12 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="plan in plans" 
           :key="plan.name" 
           class="relative group">
        <!-- Effet de néon -->
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                    blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
        
        <div class="relative bg-[#12172b]/90 backdrop-blur-xl rounded-lg border border-gray-800
                    overflow-hidden">
          <!-- Header avec effet glitch -->
          <div class="glitch-container p-6 border-b border-gray-800">
            <h2 :class="['text-2xl font-bold glitch', plan.color]" :data-text="plan.name">
              {{ plan.name }}
            </h2>
          </div>

          <!-- Prix avec effet cyber -->
          <div class="p-6 text-center">
            <div class="cyber-box relative">
              <span class="text-5xl font-bold text-white">{{ plan.price }}</span>
              <span class="text-sm text-cyan-400 ml-2">FCFA</span>
              <div class="cyber-lines"></div>
            </div>
            <span class="text-gray-400 block mt-2">{{ plan.duration }}</span>
          </div>

          <!-- Bouton futuriste -->
          <div class="px-6 pb-6">
            <button class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 
                         text-white font-bold py-3 px-6 rounded 
                         hover:from-cyan-600 hover:to-blue-600
                         transition-all duration-300 cyber-button">
              <span class="relative z-10">Activer</span>
            </button>
          </div>

          <!-- Liste des fonctionnalités avec icônes tech -->
          <ul class="border-t border-gray-800">
            <li v-for="feature in plan.features" 
                :key="feature" 
                class="p-4 hover:bg-white/5 transition-colors">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-gray-300">{{ feature }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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