<!-- components/HeroSection.vue -->
<template>
  <section class="relative h-screen flex items-center overflow-hidden mb-35">
    <!-- Background avec effet parallax -->
    <div class="absolute inset-0">
      <!-- Skeleton loader pour l'image -->
      <div v-if="loading" class="w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse"></div>
      
      <!-- Image de fond -->
      <img 
        v-else
        :src="featuredContent.image" 
        :alt="featuredContent.title"
        class="w-full h-full object-cover"
      >
       <!-- VIDEO -->
       <!-- <video  v-if="featuredContent.video" autoplay class="absolute inset-0 w-full h-full object-cover">
         <source :src="featuredContent.video" type="video/mp4">
         Your browser does not support the video tag.
       </video> -->

      <!-- Overlay gradients -->
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
    
    <!-- Contenu principal -->
    <div class="relative z-10 px-4 md:px-8 lg:px-16 max-w-6xl">
      <div class="max-w-2xl">
        <!-- Badge catégorie -->
        <div v-if="loading" class="mb-4">
          <div class="w-20 h-6 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div v-else class="mb-4">
          <span class="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {{ featuredContent.category }}
          </span>
        </div>
        
        <!-- Titre -->
        <div v-if="loading" class="mb-6">
          <div class="w-3/4 h-12 md:h-16 bg-gray-700 rounded animate-pulse mb-2"></div>
          <div class="w-1/2 h-12 md:h-16 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <h1 v-else class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {{ featuredContent.title }}
        </h1>
        
        <!-- Métadonnées -->
        <div v-if="loading" class="mb-6">
          <div class="flex space-x-4">
            <div class="w-16 h-6 bg-gray-700 rounded animate-pulse"></div>
            <div class="w-20 h-6 bg-gray-700 rounded animate-pulse"></div>
            <div class="w-24 h-6 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
        <div v-else class="flex items-center space-x-4 mb-6 text-gray-300">
          <span class="flex items-center">
            <CalendarIcon class="w-4 h-4 mr-1" />
            {{ featuredContent.year }}
          </span>
          <span class="flex items-center">
            <ClockIcon class="w-4 h-4 mr-1" />
            {{ featuredContent.duration }}
          </span>
          <div class="flex items-center">
            <StarIcon class="w-4 h-4 mr-1 text-yellow-500" />
            <span>4.8</span>
          </div>
        </div>
        
        <!-- Description -->
        <div v-if="loading" class="mb-8">
          <div class="space-y-2">
            <div class="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
            <div class="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
            <div class="w-3/4 h-4 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
        <p v-else class="text-lg text-gray-300 mb-8 leading-relaxed">
          {{ featuredContent.description }}
        </p>
        
        <!-- Actions -->
        <div v-if="loading" class="flex flex-wrap gap-4">
          <div class="w-16 h-16 bg-gray-700 rounded-full animate-pulse"></div>
          <div class="w-32 h-12 bg-gray-700 rounded animate-pulse"></div>
          <div class="w-28 h-12 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div v-else class="flex flex-wrap gap-4">
          <!-- Bouton Play -->
          <!-- <button class="flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
            <Icon name="play" class="w-5 h-5 mr-2" />
            Regarder
          </button> -->

        <PlayButton class="
      scale-300 left-1/2 top-1/2 transform md:translate-x-[-50%] translate-y-[100%] md:scale-350 translate-x-[10%] ml-4
    "/>
          
          <!-- Bouton Ma Liste -->
          <div class="flex items-center w-25 text-center text-white ">
            Regarder Maintenant
          </div>
          
          <!-- Bouton Plus d'infos -->
          <div class="flex items-baseline justify-between w-20">
            <div class="flex w-fit items-center bg-transparent text-white px-3 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ">
            <InformationCircleIcon class="w-5 h-5 mr-2" />
            </div>
             <div class="flex w-fit items-center bg-transparent text-white px-3 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ">
            <ShareIcon class="w-5 h-5 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Indicateur de scroll -->
<div
  v-if="!hasScrolled"
  class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500"
>
  <ChevronDownIcon class="w-6 h-6 text-white/60" />
</div>
    
    <!-- Audio controls (optionnel) -->
    <div class="absolute bottom-8 right-8">
      <button 
        @click="toggleMute"
        class="p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors border border-gray-600"
      >
        <SpeakerXMarkIcon v-if="isMuted" class="w-5 h-5" />
        <SpeakerWaveIcon v-else class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<script setup>
import PlayButton from './PlayButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import {
  CalendarIcon,
  ClockIcon,
  StarIcon,
  PlayIcon,
  InformationCircleIcon,
  ShareIcon,
  ChevronDownIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
} from '@heroicons/vue/24/outline'


const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  featuredContent: {
    type: Object,
    default: () => ({})
  }
})

const isMuted = ref(true)
const hasScrolled = ref(false)

const toggleMute = () => {
  isMuted.value = !isMuted.value
}

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 10
  // Parallax (optionnel)
  const parallax = document.querySelector('.hero-bg')
  if (parallax) {
    parallax.style.transform = `translateY(${window.scrollY * 0.5}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero-bg {
  will-change: transform;
}
</style>