<template>
  <div class="py-12 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="plan in plans" 
           :key="plan.name" 
           class="relative">
        <div class="bg-transparent backdrop-blur-sm border border-white/10 rounded-lg p-8
                    transition-all duration-500 hover:border-white/20
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <!-- En-tête simple -->
          <div class="text-center mb-8">
            <h2 class="text-2xl font-light text-white mb-6">{{ plan.name }}</h2>
            <div class="font-light">
              <span class="text-4xl">{{ plan.price }}</span>
              <span class="text-sm text-gray-400 ml-2">FCFA</span>
              <span class="block text-sm text-gray-400 mt-1">{{ plan.duration }}</span>
            </div>
          </div>

          <!-- Bouton épuré -->
          <button class="w-full bg-white/10 text-white py-3 rounded-lg mb-8
                         hover:bg-white/20 transition-all duration-300
                         font-light tracking-wide">
            Choisir
          </button>

          <!-- Liste minimaliste -->
          <ul class="space-y-4">
            <li v-for="feature in plan.features" 
                :key="feature" 
                class="text-gray-400 text-sm flex items-center space-x-3">
              <span class="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>{{ feature }}</span>
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