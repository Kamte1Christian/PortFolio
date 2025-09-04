<template>
  <header class="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-sm border-b border-violet-900/30">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Nom -->
        <NuxtLink to="/" class="text-xl font-bold text-white hover:text-violet-400 transition-colors">
          Kamte Christian
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-400 hover:text-violet-400 font-medium transition-colors duration-200"
            :class="{ 'text-violet-400': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Bouton CV -->
        <div class="hidden md:block">
          <a 
            href="/documents/cv.pdf" 
            target="_blank"
            class="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500 transition-all duration-300 font-medium shadow-md hover:shadow-violet-500/25 hover:shadow-lg"
          >
            Télécharger CV
          </a>
        </div>

        <!-- Menu Mobile -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile Dropdown -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-secondary-200">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-md font-medium"
          >
            {{ item.name }}
          </NuxtLink>
          <a 
            href="/documents/cv.pdf" 
            target="_blank"
            class="block w-full text-center bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 font-medium mt-4"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Formation', href: '/education' },
  { name: 'Expérience', href: '/experience' },
  { name: 'Projets', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

// Fermer le menu mobile lors du changement de route
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>