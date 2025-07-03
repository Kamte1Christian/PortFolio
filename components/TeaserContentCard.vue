<!-- components/ContentCard.vue -->
<template>
  <div 
    class="group flex-none w-64 cursor-pointer transform transition-all duration-300 hover:scale-105"
    @click="$emit('click', item)"
    @mouseenter="startHoverTimer"
    @mouseleave="clearHoverTimer"
  >
    <!-- Container principal -->
    <div class="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
      
      <!-- Image -->
      <div class="relative aspect-[3/4] overflow-hidden">
        <img 
          :src="item.image" 
          :alt="item.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @load="imageLoaded = true"
          @error="imageError = true"
        >
        
        <!-- Overlay avec gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Badge qualité -->
        <div class="absolute top-3 left-3">
          <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            HD
          </span>
        </div>
        
        <!-- Indicateur de progression (si applicable) -->
        <div v-if="item.progress" class="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div 
            class="h-full bg-red-600 transition-all duration-300"
            :style="{ width: `${item.progress}%` }"
          ></div>
        </div>
        
        <!-- Actions rapides (visible au hover) -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="flex space-x-2">
            <button 
              @click.stop="playItem"
              class="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
            >
              <Icon name="play" class="w-6 h-6" />
            </button>
            <button 
              @click.stop="addToList"
              class="p-3 bg-gray-800/80 text-white rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
            >
              <Icon :name="isInList ? 'check' : 'plus'" class="w-6 h-6" />
            </button>
            <button 
              @click.stop="showInfo"
              class="p-3 bg-gray-800/80 text-white rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
            >
              <Icon name="info" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- Informations -->
      <div class="p-4">
        <!-- Titre -->
        <h3 class="font-bold text-white text-lg mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">
          {{ item.title }}
        </h3>
        
        <!-- Métadonnées -->
        <div class="flex items-center justify-between text-sm text-gray-400 mb-3">
          <span>{{ item.year }}</span>
          <div class="flex items-center space-x-1">
            <Icon name="star" class="w-4 h-4 text-yellow-500" />
            <span>{{ item.rating || '4.5' }}</span>
          </div>
        </div>
        
        <!-- Genres (si disponibles) -->
        <div v-if="item.genres" class="flex flex-wrap gap-1 mb-3">
          <span 
            v-for="genre in item.genres.slice(0, 2)" 
            :key="genre"
            class="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
          >
            {{ genre }}
          </span>
        </div>
        
        <!-- Barre d'actions -->
        <div class="flex items-center justify-between pt-2 border-t border-gray-800">
          <div class="flex space-x-2">
            <button 
              @click.stop="toggleLike"
              class="p-1 hover:text-red-500 transition-colors"
              :class="isLiked ? 'text-red-500' : 'text-gray-400'"
            >
              <Icon :name="isLiked ? 'heart' : 'heart'" class="w-4 h-4" :fill="isLiked" />
            </button>
            <button 
              @click.stop="shareItem"
              class="p-1 hover:text-blue-400 transition-colors text-gray-400"
            >
              <Icon name="share" class="w-4 h-4" />
            </button>
          </div>
          
          <!-- Durée ou type -->
          <span class="text-xs text-gray-500">
            {{ item.duration || item.type || 'Film' }}
          </span>
        </div>
      </div>
      
      <!-- Badge "Nouveau" -->
      <div v-if="item.isNew" class="absolute top-3 right-3">
        <span class="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
          NOUVEAU
        </span>
      </div>
    </div>
    
    <!-- Preview tooltip (optionnel) -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="showPreview && item.preview"
        class="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full z-50 w-80 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 p-4"
      >
        <div class="flex items-start space-x-3">
          <img :src="item.image" :alt="item.title" class="w-16 h-24 object-cover rounded">
          <div class="flex-1">
            <h4 class="font-bold text-white mb-1">{{ item.title }}</h4>
            <p class="text-sm text-gray-300 mb-2 line-clamp-2">{{ item.description }}</p>
            <div class="flex items-center space-x-2 text-xs text-gray-400">
              <span>{{ item.year }}</span>
              <span>•</span>
              <span>{{ item.duration }}</span>
              <span>•</span>
              <div class="flex items-center">
                <Icon name="star" class="w-3 h-3 text-yellow-500 mr-1" />
                {{ item.rating }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Flèche du tooltip -->
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

// États réactifs
const imageLoaded = ref(false)
const imageError = ref(false)
const showPreview = ref(false)
const isLiked = ref(false)
const isInList = ref(false)
const hoverTimer = ref(null)

// Actions
const playItem = () => {
  // Logique pour lancer la lecture
  console.log('Play item:', props.item.title)
}

const addToList = () => {
  isInList.value = !isInList.value
  // Logique pour ajouter/retirer de la liste
  console.log('Toggle list:', props.item.title)
}

const showInfo = () => {
  // Logique pour afficher les informations détaillées
  console.log('Show info:', props.item.title)
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
  // Logique pour liker/unliker
  console.log('Toggle like:', props.item.title)
}

const shareItem = () => {
  // Logique pour partager
  console.log('Share item:', props.item.title)
}

const startHoverTimer = () => {
  hoverTimer.value = setTimeout(() => {
    showPreview.value = true
  }, 1000) // Afficher le preview après 1 seconde
}

const clearHoverTimer = () => {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
    hoverTimer.value = null
  }
  showPreview.value = false
}

onUnmounted(() => {
  clearHoverTimer()
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>