<template>
  <div class="h-full bg-[#12172b] w-full p-6 relative overflow-hidden">
    <!-- Background gradient effect -->
    <div class="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5 pointer-events-none"></div>
    
    <div class="relative z-10">
      <NuxtLink 
        to="/subscription" 
        class="inline-flex items-center text-gray-400 hover:text-white mb-8 group transition-colors"
      >
        <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Retour aux forfaits
      </NuxtLink>

      <div v-if="currentPlan" class="space-y-6 animate-fadeIn">
        <div class="space-y-4">
          <h2 :class="['text-2xl font-bold', currentPlan.color]">
            {{ currentPlan.name }}
          </h2>
          <div class="flex flex-col items-baseline justify-between mb-6">
            <div class="flex mb-4">
              <span class="text-4xl font-bold text-white">{{ currentPlan.price }}</span>
              <span class="text-gray-400 text-center ml-2">FCFA</span>
            </div>
            <span class="text-xl text-gray-400">/ {{ currentPlan.duration }}</span>
          </div>
        </div>

        <div class="h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50"></div>

        <div class="space-y-6">
          <h3 class="text-lg font-semibold text-white">Inclus dans votre forfait:</h3>
          <ul class="space-y-4">
            <li 
              v-for="feature in currentPlan.features" 
              :key="feature" 
              class="flex items-center text-gray-300 group"
            >
              <div class="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="ml-3">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Price guarantee -->
        <div class="mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
          <p class="text-sm text-gray-300">
            <span class="text-black font-semibold">Garantie de prix :</span>
            Profitez de ce tarif pendant toute la durée de votre abonnement
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePlans } from '~/composables/usePlans'

const props = defineProps({
  subscriptionId: {
    type: Number,
    required: true,
  },
})

const { getPlanById } = usePlans()
const currentPlan = computed(() => getPlanById(props.subscriptionId))
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
   