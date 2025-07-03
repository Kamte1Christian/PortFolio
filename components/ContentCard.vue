<template>
  <div 
    class=" slide-card group relative flex-none w-full cursor-pointer z-0 text-sm
           transform-gpu will-change-transform transition-all duration-300 ease-out"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Container principal -->
    <div 
      class="relative bg-[#141414] rounded-md overflow-hidden
             shadow-lg transition-all duration-300 ease-out
             group-hover:shadow-2xl group-hover:rounded-lg"
      :class="{ 
        'scale-150 z-50 group-hover:translate-y-[-2rem]': isHovered && !isMobile,
        'scale-105': isHovered && isMobile
      }"
    >
      <!-- Image principale (état normal) -->
      <div class="relative aspect-video overflow-hidden" v-show="!isHovered">
        <!-- Skeleton loader -->
        <div 
          v-if="!imageLoaded" 
          class="absolute inset-0 bg-gray-800 animate-pulse"
        />
        
        <!-- Image -->
        <img 
          :src="item.image" 
          :alt="item.title"
          class="w-full h-full object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': !imageLoaded }"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        
        <!-- Overlay gradient au hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <!-- Titre simple au hover (mode normal) -->
        <div class="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <h3 class="text-white font-semibold text-sm line-clamp-1">
            {{ item.title }}
          </h3>
        </div>
      </div>
      
      <!-- Contenu étendu au hover -->
      <div 
        v-show="isHovered"
        class="w-full transition-all duration-300 ease-out"
      >
        <!-- Preview area avec image -->
        <div class="aspect-video bg-black relative overflow-hidden">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover"
          />
          
          <!-- Play overlay -->
          <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm
                        hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                 @click.stop="handlePlay">
              <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Informations du contenu -->
        <div class="p-2 bg-[#141414] space-y-3">
          <!-- Titre -->
          <!-- <p class="text-white font-semibold text-sm line-clamp-2 leading-tight">
            {{ item.title }}
          </p> -->
          
          <!-- Contrôles -->
          <div class="flex items-center gap-2">
            <!-- <button 
              class="flex items-center justify-center w-8 h-8 bg-white rounded-full 
                     hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
              @click.stop="handlePlay"
              :aria-label="`Lire ${item.title}`"
            >
              <svg class="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button> -->
            <PlayButton @click.stop="handlePlay" :class="['scale-130']" />

            <button 
              class="flex items-center justify-center w-5 h-5 bg-[#2a2a2a] rounded-full 
                     hover:bg-[#404040] transition-colors duration-200 flex-shrink-0"
              @click.stop="handleToggleList"
              :aria-label="`${isInList ? 'Retirer de' : 'Ajouter à'} ma liste`"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isInList" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </button>
            
            <!-- <button 
              class="flex items-center justify-center w-8 h-8 bg-[#2a2a2a] rounded-full 
                     hover:bg-[#404040] transition-colors duration-200 flex-shrink-0"
              @click.stop="handleToggleLike"
              :aria-label="`${isLiked ? 'Retirer le' : 'Ajouter un'} like`"
            >
              <svg class="w-4 h-4" :class="isLiked ? 'text-red-500 fill-current' : 'text-white'" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button> -->
            
            <button 
              class="ml-auto flex items-center justify-center w-5 h-5 bg-[#2a2a2a] rounded-full 
                     hover:bg-[#404040] transition-colors duration-200 flex-shrink-0"
              @click.stop="handleShowInfo"
              aria-label="Plus d'informations"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
          
          <!-- Métadonnées -->
          <div class="space-y-2 text-xs">
            <!-- Durée et qualité -->
            <!-- <div class="flex items-center gap-2">
              <span class="text-green-400 font-medium">{{ getMatchPercentage }}% compatible</span>
              <span class="px-1.5 py-0.5 text-xs border border-gray-500 text-gray-300 rounded">
                {{ item.quality || 'HD' }}
              </span>
            </div> -->
            
            <!-- Genres -->
            <!-- <div class="flex items-center gap-1 text-gray-400 overflow-hidden">
              <template v-for="(genre, index) in getGenres.slice(0, 3)" :key="genre">
                <span class="whitespace-nowrap">{{ genre }}</span>
                <span v-if="index < Math.min(getGenres.length - 1, 2)" class="text-gray-600">•</span>
              </template>
            </div> -->
            
            <!-- Année et durée -->
            <div class="flex items-center gap-2 text-gray-400">
              <span>{{ item.year || '2024' }}</span>
              <span class="text-gray-600">•</span>
              <span>{{ item.duration || '2h 15min' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PlayButton from './PlayButton.vue'

// Types
interface ContentItem {
  id: string
  title: string
  image: string
  duration?: string
  year?: string
  quality?: string
  genres?: string[]
  matchPercentage?: number
}

interface Props {
  item: ContentItem
  index?: number
  totalItems?: number
}

// Props avec valeurs par défaut
const props = withDefaults(defineProps<Props>(), {
  item: () => ({
    id: '',
    title: 'Titre non disponible',
    image: '/images/fallback-poster.jpg',
    duration: '2h 15min',
    year: '2024',
    quality: 'HD',
    genres: ['Action', 'Aventure'],
    matchPercentage: 95
  }),
  index: 0,
  totalItems: 1
})

// Événements émis
const emit = defineEmits<{
  play: [item: ContentItem]
  toggleList: [item: ContentItem]
  like: [item: ContentItem]
  showInfo: [item: ContentItem]
}>()

// État réactif
const imageLoaded = ref(false)
const isHovered = ref(false)
const isLiked = ref(false)
const isInList = ref(false)
const hoverTimer = ref<number | null>(null)
const isMobile = ref(false)

// Détection mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// Computed properties
const getGenres = computed(() => {
  return props.item.genres || ['Action', 'Aventure', 'Thriller']
})

const getMatchPercentage = computed(() => {
  return props.item.matchPercentage || Math.floor(Math.random() * 20) + 80
})

// Gestionnaires d'événements
const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/images/fallback-poster.jpg'
  imageLoaded.value = true
  console.warn(`Image failed to load for: ${props.item.title}`)
}

const handleMouseEnter = () => {
  if (isMobile.value) {
    isHovered.value = false
    return
  }
  
  // Délai avant d'afficher le hover complet sur desktop
  hoverTimer.value = window.setTimeout(() => {
    isHovered.value = true
  }, 300)
}

const handleMouseLeave = () => {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
    hoverTimer.value = null
  }
  isHovered.value = false
}

const handlePlay = () => {
  emit('play', props.item)
}

const handleToggleList = () => {
  isInList.value = !isInList.value
  emit('toggleList', props.item)
}

const handleToggleLike = () => {
  isLiked.value = !isLiked.value
  emit('like', props.item)
}

const handleShowInfo = () => {
  emit('showInfo', props.item)
}

// Lifecycle
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
  }
  window.removeEventListener('resize', checkMobile)
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>