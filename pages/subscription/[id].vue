<template>
  <div class="h-screen max-w-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
    <div class="flex">
      <div class="w-1/4 hidden sm:block animate-slideRight">
        <SideBar :subscriptionId="subscriptionId" />
      </div>
      <div class="min-h-screen flex-1 bg-gray-900 items-center justify-center p-6">
        <div class="w-full text-white p-3 mb-10 mt-10 animate-fadeIn">
          <NuxtLink to="/subscription" class="inline-flex items-center text-gray-400 hover:text-white mb-6 group">
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour aux forfaits
          </NuxtLink>
          <h1 class="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-yellow-600 bg-clip-text text-transparent">
            Choisir une méthode de paiement
          </h1>
          <p class="text-xl text-center text-gray-400 mt-2 mb-6 animate-fadeIn">
            En choisissant une méthode de payement vous acceptez nos conditions et politiques de confidentialités
          </p>
        </div>
        <PayForm :planId="subscriptionId" class="animate-slideUp" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from '#app'
import { onMounted, watch } from 'vue'
import PayForm from '~/components/subscription/PayForm.vue'
import SideBar from '~/components/subscription/SideBar.vue'

const route = useRoute()
const router = useRouter()
const subscriptionId = parseInt(route.params.id)

// Validation du subscriptionId
watch(() => route.params.id, (newId) => {
  const id = parseInt(newId)
  if (isNaN(id) || id < 1 || id > 4) {
    router.push('/subscription')
  }
})

onMounted(() => {
  if (isNaN(subscriptionId) || subscriptionId < 1 || subscriptionId > 4) {
    router.push('/subscription')
  }
})
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in;
}

.animate-slideRight {
  animation: slideRight 0.5s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideRight {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>