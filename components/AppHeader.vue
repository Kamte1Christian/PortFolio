<!-- components/Layout/AppHeader.vue -->
<template >
    <header 
    :class="[
      'sticky top-0 z-40 transition-all duration-300',
      isScrolled 
        ? 'bg-black/80 backdrop-blur-sm' 
        : 'bg-gradient-to-b from-black to-transparent'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-2xl font-bold text-red-500">
            StreamApp
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            to="/" 
            class="text-gray-300 hover:text-white transition-colors duration-200"
            :class="{ 'text-white border-b-2 border-red-500': $route.path === '/' }"
          >
            Accueil
          </NuxtLink>
          <NuxtLink 
            to="/browse" 
            class="text-gray-300 hover:text-white transition-colors duration-200"
            :class="{ 'text-white border-b-2 border-red-500': $route.path === '/browse' }"
          >
            Parcourir
          </NuxtLink>
          <NuxtLink 
            to="/favorites" 
            class="text-gray-300 hover:text-white transition-colors duration-200"
            :class="{ 'text-white border-b-2 border-red-500': $route.path === '/favorites' }"
          >
            Favoris
          </NuxtLink>
        </nav>

        <!-- Search & User -->
        <div class="flex items-center space-x-4">
          <!-- Search Bar -->
          <div class="relative hidden sm:block">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher..."
              class="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600 transition-all duration-200"
              @keyup.enter="handleSearch"
            >
            <button 
              @click="handleSearch"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Search Button -->
          <button 
            @click="toggleMobileSearch"
            class="sm:hidden text-gray-300 hover:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <!-- User Menu -->
          <div class="relative" ref="userMenuRef">
            <button 
              @click="toggleUserMenu"
              class="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none"
            >
              <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium">U</span>
              </div>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- User Dropdown -->
            <div 
              v-if="showUserMenu" 
              class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2"
            >
              <NuxtLink 
                to="/profile" 
                class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                @click="closeUserMenu"
              >
                Mon Profil
              </NuxtLink>
              <NuxtLink 
                to="/settings" 
                class="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                @click="closeUserMenu"
              >
                Paramètres
              </NuxtLink>
              <hr class="border-gray-700 my-2">
              <button 
                @click="handleLogout"
                class="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                Déconnexion
              </button>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-gray-300 hover:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Search -->
      <div v-if="showMobileSearch" class="sm:hidden pb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher..."
          class="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600"
          @keyup.enter="handleSearch"
        >
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="md:hidden pb-4">
        <nav class="flex flex-col space-y-2">
          <NuxtLink 
            to="/" 
            class="text-gray-300 hover:text-white py-2 transition-colors duration-200"
            :class="{ 'text-white': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            Accueil
          </NuxtLink>
          <NuxtLink 
            to="/browse" 
            class="text-gray-300 hover:text-white py-2 transition-colors duration-200"
            :class="{ 'text-white': $route.path === '/browse' }"
            @click="closeMobileMenu"
          >
            Parcourir
          </NuxtLink>
          <NuxtLink 
            to="/favorites" 
            class="text-gray-300 hover:text-white py-2 transition-colors duration-200"
            :class="{ 'text-white': $route.path === '/favorites' }"
            @click="closeMobileMenu"
          >
            Favoris
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data
const searchQuery = ref('')
const showUserMenu = ref(false)
const showMobileMenu = ref(false)
const showMobileSearch = ref(false)
const userMenuRef = ref(null)

// Methods
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`)
    showMobileSearch.value = false
  }
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const closeUserMenu = () => {
  showUserMenu.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value
}

const handleLogout = () => {
  // TODO: Implement logout logic
  console.log('Logout clicked')
  closeUserMenu()
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
    showUserMenu.value = false
  }
}

const isScrolled = ref(false)

// Fonction pour gérer le scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

// ...existing methods...
</script>

<style scoped>
.router-link-active {
  color: #fff;
}

/* Ajouter une transition fluide pour le background */
header {
  transition: background-color 0.3s ease-in-out;
}
</style>