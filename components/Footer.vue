<!-- components/Footer.vue -->
<template>
  <footer class="bg-gray-900 border-t border-gray-800 mt-16">
    <div class="px-4 md:px-8 lg:px-16 py-12">
      <!-- Section principale -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        <!-- Logo et description -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-4">
            <div class="bg-red-600 text-white font-bold text-xl px-3 py-1 rounded">
              CINAF
            </div>
          </div>
          <p class="text-gray-400 text-sm mb-4 leading-relaxed">
            La première plateforme de streaming dédiée au cinéma africain. 
            Découvrez les meilleurs films et séries du continent.
          </p>
          <div class="flex space-x-4 text-gray-400">
            <!-- <a href="#" class="hover:text-white transition-colors">
              <FacebookIcon class="w-5 h-5" />
            </a> -->
            <!-- <a href="#" class="hover:text-white transition-colors">
              <XIcon class="w-5 h-5" />
            </a> -->
            <a href="#" class="hover:text-white transition-colors">
              <CameraIcon class="w-5 h-5" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <PlayCircleIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h3 class="text-white font-semibold mb-4">Navigation</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Accueil</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Films</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Séries</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Documentaires</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Ma Liste</a></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div>
          <h3 class="text-white font-semibold mb-4">Support</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Centre d'aide</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Nous contacter</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Signaler un problème</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">FAQ</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm">Conditions d'utilisation</a></li>
          </ul>
        </div>
        
        <!-- Téléchargements -->
        <div>
          <h3 class="text-white font-semibold mb-4">Applications</h3>
          <div class="space-y-3">
            <a href="#" class="flex items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
              <div class="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center">
                <DevicePhoneMobileIcon class="w-4 h-4 text-black" />
              </div>
              <div>
                <div class="text-xs text-gray-400">Télécharger sur</div>
                <div class="text-sm font-semibold text-white">App Store</div>
              </div>
            </a>
            <a href="#" class="flex items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
              <div class="w-8 h-8 bg-green-500 rounded mr-3 flex items-center justify-center">
                <PlayIcon class="w-4 h-4 text-white" />
              </div>
              <div>
                <div class="text-xs text-gray-400">Disponible sur</div>
                <div class="text-sm font-semibold text-white">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Section langues et pays -->
      <div class="border-t border-gray-800 pt-8 mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center space-x-4">
            <!-- Sélecteur de langue -->
            <div class="relative">
              <button 
                @click="showLanguages = !showLanguages"
                class="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <GlobeAltIcon class="w-4 h-4" />
                <span class="text-sm">Français</span>
                <ChevronDownIcon class="w-4 h-4" />
              </button>
              <Transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div 
                  v-if="showLanguages"
                  class="absolute bottom-full mb-2 left-0 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 w-40"
                >
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors">Français</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors">English</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors">العربية</a>
                </div>
              </Transition>
            </div>
            <!-- Qualité audio -->
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <!-- <HeadphonesIcon class="w-4 h-4" /> -->
              <span>Audio Description</span>
            </div>
          </div>
          
          <!-- Certifications -->
          <div class="flex items-center space-x-4">
            <div class="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">13+</div>
            <div class="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">HD</div>
            <div class="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">5.1</div>
          </div>
        </div>
      </div>
      
      <!-- Bottom section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex flex-wrap items-center gap-6 text-xs text-gray-400">
            <a href="#" class="hover:text-white">Confidentialité</a>
            <a href="#" class="hover:text-white">Conditions d'utilisation</a>
            <a href="#" class="hover:text-white">Cookies</a>
            <a href="#" class="hover:text-white">Mentions légales</a>
            <a href="#" class="hover:text-white">Préférences publicitaires</a>
          </div>
          <div class="text-xs text-gray-500">
            © 2024 SAMBA. Tous droits réservés.
          </div>
        </div>
        <!-- Service client -->
        <div class="mt-6 pt-6 border-t border-gray-800">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-sm text-gray-400">
              Questions ? Appelez le 
              <a href="tel:+237123456789" class="text-white hover:underline">+237 123 456 789</a>
            </div>
            <div class="flex items-center space-x-4 text-xs text-gray-500">
              <span>Sécurisé par</span>
              <div class="flex items-center space-x-2">
                <ShieldCheckIcon class="w-4 h-4" />
                <span>SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Heroicons imports
import { 
  GlobeAltIcon, ChevronDownIcon, ShieldCheckIcon, PlayIcon, DevicePhoneMobileIcon,
  PlayCircleIcon, CameraIcon 
} from '@heroicons/vue/24/solid'

// import { XIcon } from '@heroicons/vue/24/outline'

const showLanguages = ref(false)

onMounted(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('.relative')) {
      showLanguages.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
