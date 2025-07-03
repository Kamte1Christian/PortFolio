<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <HeroSection :loading="loading" :featured-content="featuredContent" />
    
    <!-- Content Sections -->
    <div class="relative z-10 -mt-32 px-8 space-y-12 ">
      <!-- Nos Recommandations -->
      <ContentSection 
        title="Tendances"
        :items="recommendations"
        :loading="loading"
        @item-click="handleContentClick"
        class="overflow-visible"
      />
      
      <!-- Théâtres -->
      <ContentSection 
        title="Théâtres" 
        :items="theatres"
        :loading="loading"
        @item-click="handleContentClick"
        class="overflow-visible"
      />
      
      <!-- Ma liste -->
      <!-- <ContentSection 
        title="Ma liste" 
        :items="myList"
        :loading="loading"
      /> -->
      
      <!-- Meilleur Films Camerounais -->
      <ContentSection
        title="Films Camerounais"
        :items="cameroonianFilms"
        :loading="loading"
        @item-click="handleContentClick"
        class="overflow-visible"
      />
      
      <!-- Top Films -->
     <ContentSection
        title="Top Films"
        :items="topFilms"
        :loading="loading"
        @item-click="handleContentClick"
        navigation-color="#00ff00"
        navigation-hover-color="#ffffff"
        navigation-background-color="rgba(0, 0, 0, 0.8)"
        navigation-hover-background-color="#00ff00"
        class="overflow-hidden z-0"
      />
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Simulation de données (à remplacer par votre API)
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(true)

const featuredContent = ref({
  title: "SAMBA: LE GRAND MATCH",
  description: "Malgré son jeune âge, Samba Ndiaye lutte avec acharnement contre les forces adverses qui s'alignent pour lui ravir sa terre qui de génération en génération lui revient de droit et où il entend rester jusqu'à la fin de sa vie de de celle de sa descendance.",
  image: "/images/9680e6e8-7584-43a8-ae10-d1e702694a86.jpeg",
  video: "https://cinaftvmovies.b-cdn.net/AMOUR_VICIEUX/AMOUR_VICIEUX_E52/original.mp4",
  category: "Sport",
  year: "2023",
  duration: "2h 15min"
})

// const recommendations = ref([])
// const theatres = ref([])
// const myList = ref([])
// const cameroonianFilms = ref([])
// const topFilms = ref([])

// Simulation du chargement des données
const movieImages = [
  '/images/fantasy-4621183_1280.jpg',
  '/images/Customize this design with your video, photos and….jpeg',
  '/images/FREE!!! Novel Book Cover Design Template FREE….jpeg',
  '/images/Pre-made Book Cover M1666.jpeg',
  '/images/Thriller & Suspense Book Cover _ Premade Book….jpeg',
  '/images/To order covers like this….jpeg',
  '/images/9680e6e8-7584-43a8-ae10-d1e702694a86.jpeg',
  '/images/48783e1d-d219-48aa-9d95-b1f320851c3b.jpeg',
]

// Données factices
const createContentItems = (count: number, offset = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${offset + i + 1}`,
    title: `Film ${offset + i + 1}`,
    image: movieImages[i % movieImages.length],
    quality: i % 3 === 0 ? '4K' : 'HD',
    isNew: i % 4 === 0,
    progress: i % 5 === 0 ? Math.floor(Math.random() * 100) : undefined,
    year: String(2020 + (i % 4)),
    rating: (4 + Math.random()).toFixed(1)
  }))
}

// États réactifs pour les différentes sections
type ContentItem = {
  id: string
  title: string
  image: string
  quality: string
  isNew: boolean
  progress?: number
  year: string
  rating: string
}

const recommendations = ref<ContentItem[]>([])
const theatres = ref<ContentItem[]>([])
const cameroonianFilms = ref<ContentItem[]>([])
const topFilms = ref<ContentItem[]>([])

// Gestionnaire de clic sur le contenu
const handleContentClick = (item: any) => {
  router.push(`/watch/${item.id}`)
}

// Simulation du chargement et initialisation des données
onMounted(async () => {
  // Simuler un délai de chargement initial
  await new Promise(resolve => setTimeout(resolve, 2000))

  recommendations.value = createContentItems(8)
  theatres.value = createContentItems(8, 8)
  cameroonianFilms.value = createContentItems(8, 16)
  topFilms.value = createContentItems(8, 24)

  // Simuler un délai supplémentaire pour l'effet de chargement
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
})

// Meta tags
useHead({
  title: 'CINAF TV - Streaming de films africains',
  meta: [
    { name: 'description', content: 'Découvrez le meilleur du cinéma africain en streaming sur CINAF TV' }
  ]
})
</script>

<style scoped>
/* Ajout d'un z-index élevé pour les sections au hover */
.content-section {
  position: relative;
  z-index: 1;
}

.content-section:hover {
  z-index: 10;
}
</style>