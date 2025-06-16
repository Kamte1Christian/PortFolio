<template>
  <div 
    class="group relative bg-gray-800/90 rounded-lg overflow-hidden shadow-lg
           hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300
           cursor-pointer backdrop-blur-sm"
    @click="handleClick"
  >
    <!-- Loading State -->
    <div v-if="loading" class="aspect-video animate-pulse">
      <LoadingSpinner type="skeleton" />
    </div>

    <!-- Video Content -->
    <div v-else>
      <!-- Thumbnail Container -->
      <div class="relative aspect-video overflow-hidden">
        <img 
          :src="video.thumbnail"
          :alt="video.title"
          class="w-full h-full object-cover transition-transform duration-300 
                 group-hover:scale-110"
          @load="handleImageLoad"
          @error="handleImageError"
        />

        <!-- Loading Placeholder -->
        <div 
          v-if="!imageLoaded" 
          class="absolute inset-0 bg-gray-700 animate-pulse"
        >
          <LoadingSpinner type="pulse" size="sm" />
        </div>

        <!-- Hover Overlay -->
        <div 
          class="absolute inset-0 bg-black/0 group-hover:bg-black/40
                 transition-all duration-300 flex items-center justify-center"
        >
          <PlayButton />
        </div>

        <!-- Badges Container -->
        <div class="absolute inset-0 p-2">
          <!-- Quality Badge -->
          <div 
            v-if="video.quality" 
            class="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600
                   text-white text-xs px-2 py-1 rounded-md font-medium
                   shadow-lg"
          >
            {{ video.quality }}
          </div>

          <!-- Duration Badge -->
          <div 
            v-if="video.duration" 
            class="absolute bottom-2 right-2 bg-black/75 text-white text-xs
                   px-2 py-1 rounded backdrop-blur-sm"
          >
            {{ formatDuration(video.duration) }}
          </div>

          <!-- Favorite Button -->
          <button 
            v-if="isAuthenticated"
            @click.stop="toggleFavorite"
            class="absolute top-2 right-2 p-2 rounded-full bg-black/50
                   hover:bg-black/75 transition-all duration-200
                   opacity-0 group-hover:opacity-100"
            :aria-label="isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'"
          >
            <svg 
              class="w-4 h-4" 
              :class="isFavorite ? 'text-red-500' : 'text-white'"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="isFavorite" 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              <path 
                v-else 
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            </svg>
          </button>
        </div>

        <!-- Progress Bar -->
        <div 
          v-if="video.watchProgress > 0" 
          class="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50"
        >
          <div 
            class="h-full bg-red-500 transition-all duration-300"
            :style="{ width: `${video.watchProgress}%` }"
          ></div>
        </div>
      </div>

      <!-- Video Info -->
      <div class="p-4 space-y-2">
        <h3 
          class="text-white font-medium text-sm line-clamp-2
                 group-hover:text-red-500 transition-colors duration-200"
        >
          {{ video.title }}
        </h3>

        <div class="space-y-2 text-xs">
          <p 
            v-if="video.channel" 
            class="text-gray-400 hover:text-white cursor-pointer
                   transition-colors duration-200"
          >
            {{ video.channel }}
          </p>

          <div class="flex items-center justify-between text-gray-500">
            <span v-if="video.views">{{ formatViews(video.views) }} vues</span>
            <span v-if="video.uploadDate">{{ formatDate(video.uploadDate) }}</span>
          </div>

          <div 
            v-if="video.tags?.length" 
            class="flex flex-wrap gap-1 pt-1"
          >
            <span 
              v-for="tag in video.tags.slice(0, 2)" 
              :key="tag"
              class="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full
                     text-[10px] hover:bg-gray-600 transition-colors duration-200
                     cursor-pointer"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div 
        class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100
               transition-all duration-300 transform translate-y-2
               group-hover:translate-y-0 flex space-x-2"
      >
        <ActionButton 
          v-if="isAuthenticated"
          icon="playlist-add" 
          @click.stop="addToPlaylist"
          title="Ajouter à la playlist"
        />
        <ActionButton 
          icon="share" 
          @click.stop="shareVideo"
          title="Partager"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatDuration, formatViews, formatDate } from '~/utils/formatters'

defineOptions({
  name: 'VideoCard'
})

const props = defineProps({
  video: {
    type: Object,
    required: true,
    validator: (video) => {
      return video.id && video.title
    }
  },
  loading: Boolean
})

const emit = defineEmits(['click', 'favorite', 'share', 'addToPlaylist'])

const router = useRouter()
const { isAuthenticated } = useAuth()

const imageLoaded = ref(false)
const isFavorite = ref(false)

// Methods
const handleClick = () => {
  if (!props.loading) {
    emit('click', props.video)
    router.push(`/player/${props.video.id}`)
  }
}

const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = (e) => {
  e.target.src = '/images/placeholder-video.jpg'
  console.error(`Failed to load image for video: ${props.video.title}`)
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  emit('favorite', { 
    videoId: props.video.id, 
    isFavorite: isFavorite.value 
  })
}

const addToPlaylist = () => {
  emit('addToPlaylist', props.video)
}

const shareVideo = () => {
  emit('share', props.video)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>