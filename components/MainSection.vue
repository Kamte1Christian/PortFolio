<!-- components/Content/MainSection.vue -->
<template>
  <section class="mb-8">
    <!-- Featured Content -->
    <div class="relative h-full overflow-hidden mb-8 group">
      <!-- Background Image/Video -->
      <div class="absolute inset-0">
        <img 
          v-if="!isVideoLoading && featuredContent?.backdrop"
          :src="featuredContent.backdrop"
          :alt="featuredContent.title"
          class="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          @load="backdropLoaded = true"
        />
        
        <!-- Loading State for Featured Content -->
        <div v-if="isVideoLoading || !backdropLoaded" class="w-full h-full bg-gray-800 flex items-center justify-center">
          <LoadingSpinner type="video" size="lg" text="Chargement du contenu..." :show-text="true" />
        </div>
      </div>

      <!-- Gradient Overlay -->
      <!-- <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div> -->

      <!-- Featured Content Info -->
      <div class="absolute inset-0 flex items-center">
        <div class="container mx-auto px-6">
          <div class="max-w-2xl">
            <!-- Loading State -->
            <div v-if="isVideoLoading" class="space-y-4">
              <div class="h-8 bg-gray-700 rounded-lg w-3/4 animate-pulse"></div>
              <div class="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
              <div class="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
              <div class="flex space-x-4 mt-6">
                <div class="h-16 bg-gray-700 rounded-full w-16 animate-pulse"></div>
                <div class="h-12 bg-gray-700 rounded-lg w-32 animate-pulse"></div>
              </div>
            </div>

            <!-- Actual Content -->
            <div v-else-if="featuredContent">
              <!-- Title -->
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {{ featuredContent.title }}
              </h1>

              <!-- Description -->
              <p class="font-bold text-white text-lg mb-6 leading-relaxed max-w-xl">
                {{ featuredContent.description }}
              </p>

              <!-- Metadata -->
              <div class="flex items-center space-x-6 mb-8 text-sm">
                <div class="flex items-center space-x-2">
                  <span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {{ featuredContent.rating }}
                  </span>
                  <span class="text-gray-300">{{ featuredContent.year }}</span>
                </div>
                
                <div class="flex items-center space-x-2 text-gray-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>{{ featuredContent.imdbRating }}/10</span>
                </div>

                <span class="text-gray-300">{{ formatDuration(featuredContent.duration) }}</span>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center space-x-2">
                <!-- Play Button -->
                <!-- <button 
                  @click="playFeatured"
                  class="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Regarder</span>
                </button> -->
                <PlayButton/>

                <!-- More Info Button -->
                <div 
                  @click="showMoreInfo"
                  class="items-center  text-white  py-3 font-semibold"
                >
                  <p>Regarder</p>
                  <p>maintenant</p>
                </div>

                <!-- Add to List Button -->
                <button 
                  @click="toggleWatchlist"
                  class="p-3  hover:backdrop-blur rounded-lg transition-all duration-300 transform hover:scale-105"
                  :class="{ 'bg-red-500 hover:bg-red-600': isInWatchlist }"
                  :title="isInWatchlist ? 'Retirer de ma liste' : 'Ajouter à ma liste'"
                >
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!isInWatchlist" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </button>

                <!-- Share Button -->
                <button 
                  @click="shareFeatured"
                  class="p-3 hover:backdrop-blur rounded-lg transition-all duration-300 transform hover:scale-105"
                  title="Partager"
                >
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                  </svg>
                </button>
              </div>

              <!-- Tags -->
              <div v-if="featuredContent.genres" class="flex flex-wrap gap-2 mt-6">
                <span 
                  v-for="genre in featuredContent.genres.slice(0, 3)" 
                  :key="genre"
                  class="bg-black bg-opacity-50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                >
                  {{ genre }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Dots (if multiple featured content) -->
      <div v-if="featuredItems.length > 1" class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div class="flex space-x-2">
          <button 
            v-for="(item, index) in featuredItems" 
            :key="index"
            @click="setActiveFeatured(index)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="activeFeaturedIndex === index ? 'bg-red-500 w-6' : 'bg-gray-500 hover:bg-gray-400'"
          ></button>
        </div>
      </div>
    </div>

    <!-- Continue Watching Section -->
    <div v-if="continueWatching.length > 0" class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-white">Continuer à regarder</h2>
        <NuxtLink 
          to="/continue-watching" 
          class="text-red-500 hover:text-red-400 text-sm font-medium transition-colors duration-200"
        >
          Voir tout
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <VideoCard 
          v-for="video in continueWatching.slice(0, 6)" 
          :key="video.id"
          :video="video"
          :loading="isLoadingContinueWatching"
          @click="handleVideoClick"
          @favorite="handleFavorite"
          @share="handleShare"
          @addToPlaylist="handleAddToPlaylist"
        />
      </div>
    </div>

    <!-- Trending Now Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-white">Tendances actuelles</h2>
        <NuxtLink 
          to="/trending" 
          class="text-red-500 hover:text-red-400 text-sm font-medium transition-colors duration-200"
        >
          Voir tout
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <VideoCard 
          v-for="video in trendingVideos.slice(0, 6)" 
          :key="video.id"
          :video="video"
          :loading="isLoadingTrending"
          @click="handleVideoClick"
          @favorite="handleFavorite"
          @share="handleShare"
          @addToPlaylist="handleAddToPlaylist"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import VideoCard from './VideoCard.vue'
import PlayButton from './PlayButton.vue'

// Router
const router = useRouter()

// Reactive data
const activeFeaturedIndex = ref(0)
const backdropLoaded = ref(false)
const isVideoLoading = ref(true)
const isLoadingContinueWatching = ref(true)
const isLoadingTrending = ref(true)
const isInWatchlist = ref(false)

// Mock data (replace with real data from API/store)
const featuredItems = ref([
  {
    id: 1,
    title: "The Mandalorian",
    description: "Après les histoires de Jango et Boba Fett, un nouveau guerrier émerge dans l'univers Star Wars. The Mandalorian se déroule après la chute de l'Empire et avant l'émergence du Premier Ordre.",
    backdrop: "/images/9680e6e8-7584-43a8-ae10-d1e702694a86.jpeg",
    // backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=600&fit=crop",
    rating: "TV-14",
    year: "2019",
    imdbRating: "8.7",
    duration: 2400, // in seconds
    genres: ["Action", "Adventure", "Sci-Fi"]
  }
])

const continueWatching = ref([])
const trendingVideos = ref([])

// Computed
const featuredContent = computed(() => {
  return featuredItems.value[activeFeaturedIndex.value]
})

// Methods
const setActiveFeatured = (index) => {
  activeFeaturedIndex.value = index
  backdropLoaded.value = false
}

const playFeatured = () => {
  router.push(`/player/${featuredContent.value.id}`)
}

const showMoreInfo = () => {
  // Open modal or navigate to details page
  console.log('Show more info for:', featuredContent.value.title)
}

const toggleWatchlist = () => {
  isInWatchlist.value = !isInWatchlist.value
  // TODO: Add/remove from watchlist
}

const shareFeatured = () => {
  // TODO: Implement share functionality
  console.log('Share:', featuredContent.value.title)
}

const handleVideoClick = (video) => {
  router.push(`/player/${video.id}`)
}

const handleFavorite = ({ video, isFavorite }) => {
  console.log('Toggle favorite:', video.title, isFavorite)
  // TODO: Implement favorite functionality
}

const handleShare = (video) => {
  console.log('Share video:', video.title)
  // TODO: Implement share functionality
}

const handleAddToPlaylist = (video) => {
  console.log('Add to playlist:', video.title)
  // TODO: Implement add to playlist functionality
}

const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  
  if (hours > 0) {
    return `${hours}h ${minutes}min`
  }
  return `${minutes}min`
}

const loadFeaturedContent = async () => {
  try {
    isVideoLoading.value = true
    // TODO: Load featured content from API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Mock delay
    isVideoLoading.value = false
  } catch (error) {
    console.error('Error loading featured content:', error)
    isVideoLoading.value = false
  }
}

const loadContinueWatching = async () => {
  try {
    isLoadingContinueWatching.value = true
    // TODO: Load continue watching from API
    await new Promise(resolve => setTimeout(resolve, 800)) // Mock delay
    
    // Mock data
    continueWatching.value = [
      {
        id: 1,
        title: "Breaking Bad - S01E01",
        thumbnail: "https://images.unsplash.com/photo-1489599577372-f4c5d4949e5e?w=400&h=300&fit=crop",
        duration: 2700,
        views: 1200000,
        uploadDate: "2023-01-15",
        channel: "Netflix",
        watchProgress: 45
      }
    ]
    
    isLoadingContinueWatching.value = false
  } catch (error) {
    console.error('Error loading continue watching:', error)
    isLoadingContinueWatching.value = false
  }
}

const loadTrendingVideos = async () => {
  try {
    isLoadingTrending.value = true
    // TODO: Load trending videos from API
    await new Promise(resolve => setTimeout(resolve, 1200)) // Mock delay
    
    // Mock data
    trendingVideos.value = [
      {
        id: 2,
        title: "Stranger Things 4",
        thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop",
        duration: 3600,
        views: 5000000,
        uploadDate: "2023-01-10",
        channel: "Netflix",
        quality: "4K"
      }
    ]
    
    isLoadingTrending.value = false
  } catch (error) {
    console.error('Error loading trending videos:', error)
    isLoadingTrending.value = false
  }
}

// Lifecycle
onMounted(async () => {
  await Promise.all([
    loadFeaturedContent(),
    loadContinueWatching(),
    loadTrendingVideos()
  ])
})

// Auto-rotate featured content
let featuredRotateInterval
onMounted(() => {
  if (featuredItems.value.length > 1) {
    featuredRotateInterval = setInterval(() => {
      activeFeaturedIndex.value = (activeFeaturedIndex.value + 1) % featuredItems.value.length
    }, 8000) // Change every 8 seconds
  }
})

onUnmounted(() => {
  if (featuredRotateInterval) {
    clearInterval(featuredRotateInterval)
  }
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Smooth transitions for featured content */
.group:hover img {
  transform: scale(1.05);
}

/* Custom scrollbar for mobile horizontal scroll */
@media (max-width: 768px) {
  .grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .grid::-webkit-scrollbar {
    display: none;
  }
  
  .grid > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin-right: 1rem;
  }
}
</style>