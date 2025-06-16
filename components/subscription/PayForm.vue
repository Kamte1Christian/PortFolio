<template>
  <div class="w-[80%] mx-auto rounded-xl p-6 space-y-6 bg-[#12172b] shadow-2xl border border-gray-800">
    <!-- Méthodes de paiement -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold text-white mb-4">Méthode de paiement</h2>
      <button 
        v-for="method in paymentMethods" 
        :key="method.name"
        @click="handleMethodSelect(method)"
        :class="[
          'w-full flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300',
          isMethodSelected(method.name)
            ? 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500'
            : 'border-gray-700 hover:bg-white/5',
          'border'
        ]"
      >
        <div class="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
          <img 
            :src="method.icon" 
            :alt="method.name" 
            class="w-full min-h-full object-contain rounded-lg"
            @error="handleImageError" 
          />
        </div>
        <span class="font-semibold text-white">{{ method.name }}</span>
        <div v-if="isMethodSelected(method.name)" class="ml-auto">
          <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
      </button>
    </div>

    <!-- Formulaire -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-white">Informations de paiement</h2>
          <button 
            type="button"
            @click="togglePayInfo"
            class="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <svg 
              class="w-5 h-5 text-gray-400 transform transition-transform"
              :class="{ 'rotate-180': payInfo }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>

        <div 
          v-show="payInfo" 
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div 
            v-for="field in formFields" 
            :key="field.name"
            class="space-y-1"
          >
            <label :for="field.name" class="text-sm text-gray-400">
              {{ field.label }}
              <span v-if="field.required" class="text-red-500">*</span>
            </label>
            <input
              :id="field.name"
              v-model="formData[field.name]"
              :type="field.type"
              :placeholder="field.placeholder"
              :required="field.required"
              :pattern="field.pattern"
              class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="!isFormValid || loading"
          class="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white 
                 font-semibold py-3 px-6 rounded-lg transition-all duration-300 
                 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 
                 disabled:cursor-not-allowed transform hover:scale-[1.02]"
        >
          <span v-if="!loading">Valider le paiement</span>
          <svg v-else class="animate-spin h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from '#app'

const props = defineProps({
  planId: {
    type: Number,
    required: true
  }
})

const router = useRouter()
const selectedMethod = ref('')
const loading = ref(false)
const payInfo = ref(false)

const paymentMethods = [
  { 
    name: 'Orange Money',
    icon: '/images/orange-money.png'
  },
  {
    name: 'Mobile Money',
    icon: '/images/mobile-money.png'
  },
  {
    name: 'CASH',
    icon: '/images/cash-icon.png'
  }
]

const formFields = [
  { 
    name: 'promo',
    label: 'Code promo',
    type: 'text',
    placeholder: 'Entrez votre code promo',
    required: false
  },
  {
    name: 'firstName',
    label: 'Prénom',
    type: 'text',
    placeholder: 'Votre prénom',
    required: true,
    pattern: '^[a-zA-ZÀ-ÿ\\s]{2,}$'
  },
  {
    name: 'lastName',
    label: 'Nom',
    type: 'text',
    placeholder: 'Votre nom',
    required: true,
    pattern: '^[a-zA-ZÀ-ÿ\\s]{2,}$'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'exemple@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Téléphone',
    type: 'tel',
    placeholder: '+237 6XX XXX XXX',
    required: true,
    pattern: '^\\+?[0-9]{9,15}$'
  }
]

const formData = reactive({
  promo: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

const isMethodSelected = (methodName) => selectedMethod.value === methodName

const handleMethodSelect = (method) => {
  if (loading.value) return
  selectedMethod.value = selectedMethod.value === method.name ? '' : method.name
}

const togglePayInfo = () => {
  payInfo.value = !payInfo.value
}

const handleImageError = (e) => {
  e.target.src = '/images/payment-methods/default-payment.png'
}

const isFormValid = computed(() => {
  return selectedMethod.value && 
         formData.firstName && 
         formData.lastName && 
         formData.email && 
         formData.phone
})

const handleSubmit = async () => {
  if (!payInfo.value) {
    payInfo.value = true
    return
  }

  if (!isFormValid.value) return

  loading.value = true
  try {
    // Simuler une requête API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Log payment data
    console.log('Payment submitted:', {
      method: selectedMethod.value,
      planId: props.planId,
      ...formData
    })

    // Redirection vers la page de succès
    await router.push({
      path: '/payment/success',
      query: { 
        ref: `${props.planId}-${Date.now()}` 
      }
    })
  } catch (error) {
    console.error('Payment error:', error)
    // Gérer l'erreur (afficher un message, etc.)
  } finally {
    loading.value = false
  }
}
</script>