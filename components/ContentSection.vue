<template>
  <section class="mb-12 relative">
    <!-- En-tête de section -->
    <div class="flex items-center justify-between mb-6 px-2 md:px-2">
      <div v-if="loading" class="w-48 h-8 bg-gray-700 rounded animate-pulse"></div>
      <h2 v-else class="text-xl md:text-2xl font-bold text-white">{{ title }}</h2>
    </div>

    <!-- Container avec overflow pour le hover effect -->
    <div class="relative overflow-visible">
      <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>
      <Swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :slides-per-group="slidesPerGroup"
        :navigation="navigation"
        :breakpoints="breakpoints"
        :watch-slides-progress="true"
        :watch-slides-visibility="true"
        class="content-swiper"
        @swiper="onSwiper"
      >
        <template v-if="loading">
          <SwiperSlide v-for="i in 8" :key="`skeleton-${i}`">
            <div class="aspect-video bg-gray-700 rounded-lg animate-pulse"></div>
          </SwiperSlide>
        </template>
        <template v-else>
          <SwiperSlide
            v-for="(item, index) in items"
            :key="item.id"
            class="content-slide"
          >
            <ContentCard 
              :item="item" 
              :index="index"
              :total-items="items.length"
              @play="handlePlay"
              @toggle-list="handleToggleList"
              @like="handleLike"
              @show-info="handleShowInfo"
              @click="handleItemClick"
            />
          </SwiperSlide>
        </template>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ContentCard from './ContentCard.vue'

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
  title: string
  items?: ContentItem[]
  loading?: boolean
}

// Props
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  loading: false
})

// Événements émis
const emit = defineEmits<{
  'item-click': [item: ContentItem]
  'item-play': [item: ContentItem]
  'item-toggle-list': [item: ContentItem]
  'item-like': [item: ContentItem]
  'item-show-info': [item: ContentItem]
}>()

// État
const swiperInstance = ref<SwiperInstance | null>(null)

// Configuration Swiper
const modules = [Navigation]

// Navigation avec icônes personnalisées
const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

// Breakpoints responsifs optimisés
const breakpoints = computed(() => ({
  320: { 
    slidesPerView: 2.2, 
    spaceBetween: 12, 
    slidesPerGroup: 2 
  },
  480: { 
    slidesPerView: 2.8, 
    spaceBetween: 16, 
    slidesPerGroup: 2 
  },
  640: { 
    slidesPerView: 3.5, 
    spaceBetween: 16, 
    slidesPerGroup: 3 
  },
  768: { 
    slidesPerView: 4.2, 
    spaceBetween: 20, 
    slidesPerGroup: 4 
  },
  1024: { 
    slidesPerView: 5.2, 
    spaceBetween: 24, 
    slidesPerGroup: 5 
  },
  1280: { 
    slidesPerView: 6.2, 
    spaceBetween: 28, 
    slidesPerGroup: 6 
  },
  1536: { 
    slidesPerView: 7.2, 
    spaceBetween: 32, 
    slidesPerGroup: 7 
  }
}))

// Valeurs par défaut pour desktop
const slidesPerView = 5.2
const spaceBetween = 24
const slidesPerGroup = 5

// Gestionnaires d'événements
const onSwiper = (swiper: SwiperInstance) => {
  swiperInstance.value = swiper
}

const handleItemClick = (item: ContentItem) => {
  emit('item-click', item)
}

const handlePlay = (item: ContentItem) => {
  emit('item-play', item)
}

const handleToggleList = (item: ContentItem) => {
  emit('item-toggle-list', item)
}

const handleLike = (item: ContentItem) => {
  emit('item-like', item)
}

const handleShowInfo = (item: ContentItem) => {
  emit('item-show-info', item)
}
</script>

<style scoped>
.content-swiper {
  padding-left: 3px;
  padding-right: 3px;
  position: relative;
  overflow: visible;
}

/* Assurer que les slides peuvent déborder */
:deep(.swiper-wrapper) {
  overflow: visible !important;
}

:deep(.swiper-slide) {
  overflow: visible !important;
  position: relative;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Effet Netflix au hover sur desktop */
@media (min-width: 768px) {
  :deep(.swiper-slide:hover) {
    transform: scale(1.05);
    z-index: 20;
  }
  
  /* Empêcher le débordement des cartes hoverées en bordure */
  :deep(.swiper-slide:first-child:hover) {
    transform: scale(1.05) translateX(5%);
  }
  
  :deep(.swiper-slide:last-child:hover) {
    transform: scale(1.05) translateX(-5%);
  }

  :deep(.swiper-slide:hover > *) {
    transform: scale(1.1);
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}

/* Sur mobile, réduire l'effet */
@media (max-width: 767px) {
  .content-swiper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  :deep(.swiper-slide:active) {
    transform: scale(1.02);
    z-index: 5;
  }
}

/* Styles des boutons de navigation */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 50px;
  height: 50px;
  background: rgba(20, 20, 20, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff !important;
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
  z-index: 20 !important;
  opacity: 0;
  pointer-events: none;
}

:deep(.swiper-button-next) {
  right: 10px;
}

:deep(.swiper-button-prev) {
  left: 10px;
}

/* Affichage des boutons au hover de la section */
.content-swiper:hover :deep(.swiper-button-next),
.content-swiper:hover :deep(.swiper-button-prev) {
  opacity: 1;
  pointer-events: auto;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(229, 9, 20, 0.9);
  border-color: #e50914;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);
}

/* Personnalisation des icônes de flèches */
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 16px;
  font-weight: 900;
}

/* Masquer les boutons sur mobile */
@media (max-width: 767px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}

/* Animation d'entrée pour les cartes */
.content-slide {
  animation: slideInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Délai d'animation échelonné */
.content-slide:nth-child(1) { animation-delay: 0.1s; }
.content-slide:nth-child(2) { animation-delay: 0.2s; }
.content-slide:nth-child(3) { animation-delay: 0.3s; }
.content-slide:nth-child(4) { animation-delay: 0.4s; }
.content-slide:nth-child(5) { animation-delay: 0.5s; }
.content-slide:nth-child(6) { animation-delay: 0.6s; }
.content-slide:nth-child(7) { animation-delay: 0.7s; }
</style>