<template>
  <div class="py-12 px-4 relative">
    <!-- Motif de fond africain -->
    <div class="absolute inset-0 opacity-5 pattern-kente"></div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="plan in plans" 
           :key="plan.name" 
           class="relative">
        <!-- Card avec motifs africains -->
        <div :class="[
  'bg-[#12172b] rounded-3xl overflow-hidden',
  {
    'bronze-shimmer': plan.id === 1,
    'silver-shimmer': plan.id === 2,
    'gold-shimmer': plan.id === 3,
    'diamond-shimmer': plan.id === 4
  }
]">
          <!-- En-tête avec motif -->
          <div :class="[
            'h-24 pattern-adinkra bg-gradient-to-r',
            plan.btnColor || 'from-amber-600 to-red-700'
          ]">
            <div class="h-full w-full bg-black/30 flex items-center justify-center">
              <h2 class="text-3xl font-bold text-white">{{ plan.name }}</h2>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-8">
            <div class="text-center mb-8">
              <div class="flex justify-center items-baseline">
                <span class="text-5xl font-bold text-white">{{ plan.price }}</span>
                <span class="text-amber-400 ml-2">FCFA</span>
              </div>
              <span class="text-gray-400">{{ plan.duration }}</span>
            </div>
            <NuxtLink :to="`/subscription/${plan.id}`">
              <button :class="[
                'w-full py-4 rounded-full font-bold mb-8',
                plan.btnColor || 'bg-gradient-to-r from-amber-500 to-red-600',
                'transform transition-all duration-300 hover:scale-105',
                plan.hover || 'hover:from-amber-500/20 hover:to-red-600/20',
                'text-white shadow-xl'
              ]">
                Souscrire maintenant
              </button>
            </NuxtLink>

            <ul class="space-y-4">
              <li v-for="feature in plan.features" 
                  :key="feature" 
                  class="flex items-center space-x-3">
                <span class="text-amber-400 text-2xl">•</span>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePlans } from '~/composables/usePlans'

const hoveredPlan = ref(null)

const { plans } = usePlans()
   
</script>

<style scoped>
.perspective {
  perspective: 2000px;
}

.bronze-shimmer {
  background: linear-gradient(
    45deg,
    rgba(180, 83, 9, 0.1),
    rgba(245, 158, 11, 0.1),
    rgba(180, 83, 9, 0.1)
  );
  background-size: 200% 200%;
  animation: shimmer 3s linear infinite;
}

.silver-shimmer {
  background: linear-gradient(
    45deg,
    rgba(209, 213, 219, 0.1),
    rgba(156, 163, 175, 0.1),
    rgba(209, 213, 219, 0.1)
  );
  background-size: 200% 200%;
  animation: shimmer 3s linear infinite;
}

.gold-shimmer {
  background: linear-gradient(
    45deg,
    rgba(251, 191, 36, 0.1),
    rgba(245, 158, 11, 0.1),
    rgba(251, 191, 36, 0.1)
  );
  background-size: 200% 200%;
  animation: shimmer 3s linear infinite;
}

.diamond-shimmer {
  background: linear-gradient(
    45deg,
    rgba(99, 255, 255, 0.1),
    rgba(99, 179, 237, 0.1),
    rgba(99, 255, 255, 0.1)
  );
  background-size: 200% 200%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>