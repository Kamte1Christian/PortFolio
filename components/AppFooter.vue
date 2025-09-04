<template>
  <footer class="bg-black/90 text-white relative">
    <div class="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-transparent opacity-50"></div>
    <!-- Main Footer -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About Section -->
        <div class="lg:col-span-2">
          <h3 class="text-xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{{ footerData.name }}</h3>
          <p class="text-gray-400 mb-6 max-w-md">
            {{ footerData.description }}
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in footerData.socialLinks" 
              :key="social.name"
              :href="social.href" 
              target="_blank"
              class="w-10 h-10 bg-violet-950/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="link in footerData.navigationLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="text-secondary-300 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-3">
            <li class="flex items-center text-secondary-300">
              <EnvelopeIcon class="w-4 h-4 mr-2" />
              <a 
                :href="`mailto:${footerData.contact.email}`"
                class="hover:text-white transition-colors duration-200"
              >
                {{ footerData.contact.email }}
              </a>
            </li>
            <li class="flex items-center text-secondary-300">
              <PhoneIcon class="w-4 h-4 mr-2" />
              <a 
                :href="`tel:${footerData.contact.phone}`"
                class="hover:text-white transition-colors duration-200"
              >
                {{ footerData.contact.phone }}
              </a>
            </li>
            <li class="flex items-start text-secondary-300">
              <MapPinIcon class="w-4 h-4 mr-2 mt-0.5" />
              <span>{{ footerData.contact.location }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-secondary-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Copyright -->
          <p class="text-secondary-400 text-sm mb-4 md:mb-0">
            © {{ currentYear }} {{ footerData.name }}. Tous droits réservés.
          </p>

          <!-- Additional Links -->
          <div class="flex space-x-6 text-sm">
            <NuxtLink 
              to="/privacy" 
              class="text-secondary-400 hover:text-white transition-colors duration-200"
            >
              Confidentialité
            </NuxtLink>
            <NuxtLink 
              to="/terms" 
              class="text-secondary-400 hover:text-white transition-colors duration-200"
            >
              Conditions
            </NuxtLink>
            <a 
              href="/documents/cv.pdf" 
              target="_blank"
              class="text-secondary-400 hover:text-white transition-colors duration-200"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to top button -->
    <button 
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Retour en haut"
    >
      <ChevronUpIcon class="w-6 h-6" />
    </button>
  </footer>
</template>

<script setup>
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChevronUpIcon
} from '@heroicons/vue/24/outline'

// État réactif pour le bouton retour en haut
const showBackToTop = ref(false)

// Année courante
const currentYear = new Date().getFullYear()

// Données du footer - À PERSONNALISER
const footerData = {
  name: "Votre Nom",
  description: "Étudiant passionné en informatique, à la recherche d'opportunités de bourses pour poursuivre mes études à l'international et contribuer à l'innovation technologique.",
  
  socialLinks: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/votreprofil',
      icon: defineAsyncComponent(() => import('@heroicons/vue/24/outline').then(m => m.BuildingOffice2Icon)) // Remplacez par l'icône LinkedIn
    },
    {
      name: 'GitHub',
      href: 'https://github.com/votreusername',
      icon: defineAsyncComponent(() => import('@heroicons/vue/24/outline').then(m => m.CodeBracketIcon))
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/votreusername',
      icon: defineAsyncComponent(() => import('@heroicons/vue/24/outline').then(m => m.AtSymbolIcon))
    },
    {
      name: 'Email',
      href: 'mailto:votre.email@example.com',
      icon: EnvelopeIcon
    }
  ],

  navigationLinks: [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Formation', href: '/education' },
    { name: 'Expérience', href: '/experience' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ],

  contact: {
    email: 'votre.email@example.com',
    phone: '+237 6XX XXX XXX',
    location: 'Yaoundé, Cameroun'
  }
}

// Gestion du scroll pour le bouton retour en haut
const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300
}

// Fonction retour en haut
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>