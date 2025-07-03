<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300" 
          :class="scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'">
    <!-- Navigation Desktop et Mobile -->
    <nav class="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
      <!-- Logo et Navigation Principale -->
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center mr-4 md:mr-8">
          <div class="bg-red-600 text-white font-bold text-lg md:text-xl px-2 md:px-3 py-1 rounded">
            CINAF
          </div>
        </NuxtLink>
        
        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
      
      <!-- Actions utilisateur -->
      <div class="flex items-center space-x-2 md:space-x-4">
        <!-- Recherche -->
        <button 
          @click="toggleSearch"
          class="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
        >
          <Icon name="search" class="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        <!-- Notifications - Caché sur mobile -->
        <div class="hidden md:block relative" ref="notificationDropdown">
          <button @click="toggleNotifications" 
                  class="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors duration-200 relative">
            <Icon name="bell" class="w-4 h-4 md:w-5 md:h-5" />
            <span class="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <!-- Dropdown Notifications -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="showNotifications"
                 class="absolute right-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
              <!-- ... contenu notifications ... -->
            </div>
          </Transition>
        </div>
        
        <!-- Profil Mobile -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-1.5 hover:bg-white/10 rounded-full transition-colors duration-200"
        >
          <Icon name="menu" class="w-4 h-4" />
        </button>

        <!-- Profil Desktop -->
        <div class="hidden md:block relative" ref="profileDropdown">
          <!-- ... contenu profil desktop ... -->
        </div>
      </div>
    </nav>






    <!-- Profil utilisateur -->
        <div class="relative items-center justify-center" ref="profileDropdown">
          <button 
            @click="toggleProfile"
            class="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <img 
              src="/images/9680e6e8-7584-43a8-ae10-d1e702694a86.jpeg" 
              alt="Profile" 
              class="w-8 h-8 rounded-full"
            >
            <Icon name="chevron-down" class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': showProfile }" />
          </button>

          
          
          <!-- Dropdown Menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-if="showProfile"
              class="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2"
            >
              <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                <Icon name="user" class="w-4 h-4 mr-3" />
                Mon Profil
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                <Icon name="settings" class="w-4 h-4 mr-3" />
                Paramètres
              </a>
              <hr class="my-2 border-gray-700">
              <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-800 transition-colors text-red-400">
                <Icon name="log-out" class="w-4 h-4 mr-3" />
                Se déconnecter
              </a>
            </div>
          </Transition>

          <!-- Dropdown Notifications -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="showNotifications"
                 class="absolute right-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
            <div>
              <h1 class="font-bold px-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-600">Notifications</h1>
            </div>

            <!-- Loading Skeleton -->
            <div 
            v-if="loading"
              class="relative right-0 mt-2  w-full px-1 max-h-170 overflow-auto"
            >
              <div href="#" class="flex flex-col mb-1 rounded-sm min-h-15 px-4 py-2 text-sm hover:bg-gray-800 bg-gray-700 animate-pulse transition-colors">
                <div class="bg-gray-500 animate-pulse w-20 min-h-4 rounded-md mb-2">
                </div>
                <p class="bg-gray-500 animate-pulse w-54 min-h-4 rounded-md mr-3"></p>
              </div>
              <div href="#" class="flex flex-col mb-1 rounded-sm min-h-15 px-4 py-2 text-sm hover:bg-gray-800 bg-gray-700 animate-pulse transition-colors">
                <div class="bg-gray-500 animate-pulse w-20 min-h-4 rounded-md mb-2">
                </div>
                <p class="bg-gray-500 animate-pulse w-54 min-h-4 rounded-md mr-3"></p>
              </div>
              <div href="#" class="flex flex-col mb-1 rounded-sm min-h-15 px-4 py-2 text-sm hover:bg-gray-800 bg-gray-700 animate-pulse transition-colors text-red-400">
                <div class="bg-gray-500 animate-pulse w-20 min-h-4 rounded-md mb-2">
                </div>
                <p class="bg-gray-500 animate-pulse w-54 min-h-4 rounded-md mr-3"></p>
              </div>
            </div>

            <!-- Real Notifications -->

            <div v-else v-for="notification in notifications" :key="notification.id" class="flex flex-col mb-1 rounded-sm min-h-15 px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
              <div class="text-gray-300 font-semibold mb-1">{{ notification.title }}</div>
              <p class="text-gray-400">{{ notification.message }}</p>
            </div>
          </div>
          </Transition>
        </div>











        
    
    <!-- Menu Mobile -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showMobileMenu" 
           class="fixed inset-0 bg-black/95 z-50"
           @click.self="showMobileMenu = false">
        <div class="min-h-screen px-4 py-8">
          <!-- En-tête Mobile -->
          <div class="flex justify-between items-center mb-8">
            <div class="bg-red-600 text-white font-bold text-xl px-3 py-1 rounded">
              CINAF
            </div>
            <button @click="showMobileMenu = false" 
                    class="p-2 hover:bg-white/10 rounded-full">
              <Icon name="x" class="w-6 h-6" />
            </button>
          </div>

          <!-- Navigation Mobile -->
          <nav class="space-y-4">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              class="block py-3 text-lg font-medium text-gray-300 hover:text-white 
                     border-b border-gray-800"
              @click="showMobileMenu = false"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <!-- Menu utilisateur Mobile -->
          <div class="mt-8 space-y-4">
            <div class="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
              <img 
                src="/images/9680e6e8-7584-43a8-ae10-d1e702694a86.jpeg" 
                alt="Profile" 
                class="w-12 h-12 rounded-full"
              >
              <div>
                <div class="font-medium text-white">John Doe</div>
                <div class="text-sm text-gray-400">john@example.com</div>
              </div>
            </div>

            <div class="space-y-2">
              <a href="#" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900/50 rounded-lg">
                <Icon name="user" class="w-5 h-5 mr-3" />
                Mon Profil
              </a>
              <a href="#" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900/50 rounded-lg">
                <Icon name="bell" class="w-5 h-5 mr-3" />
                Notifications
              </a>
              <a href="#" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-900/50 rounded-lg">
                <Icon name="settings" class="w-5 h-5 mr-3" />
                Paramètres
              </a>
              <a href="#" class="flex items-center px-4 py-3 text-red-400 hover:bg-gray-900/50 rounded-lg">
                <Icon name="log-out" class="w-5 h-5 mr-3" />
                Se déconnecter
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Barre de recherche -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div v-if="showSearch" 
           class="fixed inset-0 bg-black/95 md:relative md:bg-black/50 md:backdrop-blur-md 
                  border-t border-gray-800">
        <div class="max-w-2xl mx-auto px-4 py-4 md:py-4">
          <div class="relative">
            <Icon name="search" 
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 
                         w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher des films, séries, acteurs..."
              class="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg border border-gray-700 
                     focus:border-red-600 focus:outline-none transition-colors"
              v-model="searchQuery"
              @keydown.escape="showSearch = false"
            >
            <button 
              @click="showSearch = false"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 
                     p-1 hover:bg-gray-700 rounded"
            >
              <Icon name="x" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
// ...existing imports...

const showMobileMenu = ref(false)

// ...existing code...

// Mise à jour de la fonction toggleMobileMenu
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  showSearch.value = false
  showNotifications.value = false
  showProfile.value = false
}

// Empêcher le scroll quand le menu mobile est ouvert
watch(showMobileMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Fermer le menu mobile sur les changements de route
watch(() => route.fullPath, () => {
  showMobileMenu.value = false
})

// Clean up
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>