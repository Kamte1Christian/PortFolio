<template>
  <div class="pt-16 overflow-hidden">
    <!-- Hero Section Redesigned -->
    <section class="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.4),transparent_70%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_70%),radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.3),transparent_70%)]"></div>
        <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/4 left-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-ping" style="animation-duration: 4s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-bounce" style="animation-duration: 3s;"></div>
      </div>

      <div class="relative z-10 flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="space-y-8 animate-fade-in-up">
            <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Mon parcours personnel
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight">
              À propos de 
              <span class="block bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                moi
              </span>
            </h1>
            
            <p class="text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Découvrez mon parcours, mes valeurs et mes ambitions académiques qui me guident vers l'excellence
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-16 items-start">
          <!-- Profile & Basic Info -->
          <div class="lg:col-span-5">
            <div class="sticky top-24 space-y-8">
              <!-- Enhanced Profile Card -->
              <div class="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                <!-- Decorative elements -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                
                <div class="relative text-center">
                  <!-- Photo with advanced styling -->
                  <div class="relative inline-block mb-8 group">
                    <div class="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500 blur-lg animate-pulse"></div>
                    <img 
                      src="/images/profile-large.jpeg" 
                      alt="Photo de profil"
                      class="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
                    >
                    <!-- Status indicator -->
                    <div class="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ personalDetails.fullName }}</h2>
                  <p class="text-violet-600 font-medium mb-6">{{ personalDetails.field }}</p>
                  
                  <!-- Info cards -->
                  <div class="space-y-4">
                    <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-2xl border border-violet-100 group hover:border-violet-200 transition-colors duration-300">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div class="text-left">
                            <p class="text-sm text-gray-500">Localisation</p>
                            <p class="font-semibold text-gray-900">{{ personalDetails.location }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100 group hover:border-blue-200 transition-colors duration-300">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div class="text-left">
                            <p class="text-sm text-gray-500">Domaine d'études</p>
                            <p class="font-semibold text-gray-900">{{ personalDetails.field }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Languages Card -->
              <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Langues parlées</h3>
                </div>
                <div class="space-y-4">
                  <div v-for="language in languages" :key="language.name" 
                       class="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                    <span class="font-medium text-gray-800">{{ language.name }}</span>
                    <span class="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                      {{ language.level }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Biography & Details -->
          <div class="lg:col-span-7 space-y-12">
            <!-- Biography Section -->
            <div class="animate-fade-in-up">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">Mon Histoire</h2>
              </div>
              
              <div class="space-y-6">
                <div v-for="(paragraph, index) in biography" :key="index" 
                     class="prose prose-lg max-w-none">
                  <p class="text-gray-700 leading-relaxed text-lg p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Values Section -->
            <div class="animate-fade-in-up animation-delay-200">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">Mes Valeurs</h2>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div v-for="value in values" :key="value.title" 
                     class="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-violet-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <component :is="value.icon" class="w-7 h-7 text-white" />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-xl text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
                        {{ value.title }}
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        {{ value.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Goals Section -->
            <div class="animate-fade-in-up animation-delay-400">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">Mes Objectifs</h2>
              </div>

              <div class="relative">
                <!-- Timeline line -->
                <div class="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-purple-600"></div>
                
                <div class="space-y-8">
                  <div v-for="(goal, index) in goals" :key="goal.title" 
                       class="relative group">
                    <div class="flex items-start space-x-6">
                      <!-- Timeline dot -->
                      <div class="relative z-10 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {{ index + 1 }}
                      </div>
                      
                      <!-- Content -->
                      <div class="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:border-violet-200 transition-all duration-500 transform group-hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                          <h3 class="font-bold text-xl text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                            {{ goal.title }}
                          </h3>
                          <span class="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                            {{ goal.timeframe }}
                          </span>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-lg">
                          {{ goal.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scholarship Section -->
    <section class="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.2),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6">
            <div class="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            Ma motivation
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pourquoi je candidate pour une
            <span class="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              bourse d'études
            </span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div v-for="reason in scholarshipReasons" :key="reason.title" 
               class="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <component :is="reason.icon" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                {{ reason.title }}
              </h3>
              <p class="text-purple-100 leading-relaxed text-lg">
                {{ reason.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Quote Section -->
        <div class="text-center animate-fade-in-up animation-delay-600">
          <div class="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
            <svg class="w-16 h-16 text-yellow-300 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote class="text-2xl lg:text-3xl font-medium text-white mb-8 leading-relaxed">
              "{{ motivationQuote }}"
            </blockquote>
            <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  HeartIcon, 
  LightBulbIcon, 
  UsersIcon, 
  GlobeAltIcon,
  AcademicCapIcon,
  RocketLaunchIcon 
} from '@heroicons/vue/24/outline'

// Configuration SEO
useSeoMeta({
  title: 'À propos - Kamte Christian | Portfolio',
  description: 'Découvrez mon parcours, mes valeurs et mes ambitions académiques. Candidat motivé pour des bourses d\'études internationales.'
})

// Données personnalisées
const personalDetails = {
  fullName: "Kamte Christian",
  location: "Yaoundé, Cameroun",
  field: "Informatique / Génie Logiciel"
}

const biography = [
  "Passionné par la technologie depuis mon plus jeune âge, j'ai découvert ma vocation dans le domaine de l'informatique lors de mes études secondaires. Cette passion m'a conduit à poursuivre des études supérieures en informatique, où j'ai développé une solide base théorique et pratique.",
  "Mon parcours académique est marqué par une approche holistique de l'apprentissage, combinant excellence théorique et application pratique. J'ai eu l'opportunité de participer à plusieurs projets collaboratifs qui ont renforcé ma capacité à travailler en équipe et à résoudre des problèmes complexes.",
  "Aujourd'hui, je souhaite élargir mes horizons en poursuivant mes études à l'international. Mon objectif est d'acquérir une perspective globale sur mon domaine d'études et de contribuer à l'innovation technologique au service du développement durable."
]

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Courant" },
  { name: "Allemand", level: "Débutant" }
]

const values = [
  {
    title: "Intégrité",
    description: "L'honnêteté et la transparence guident toutes mes actions et décisions, créant une base solide pour toutes mes relations professionnelles et académiques.",
    icon: HeartIcon
  },
  {
    title: "Innovation",
    description: "Je cherche constamment des moyens créatifs de résoudre les défis contemporains, en adoptant une approche avant-gardiste dans tous mes projets.",
    icon: LightBulbIcon
  },
  {
    title: "Collaboration",
    description: "Je crois fermement que les meilleures solutions naissent du travail d'équipe et de la diversité des perspectives et expériences.",
    icon: UsersIcon
  },
  {
    title: "Impact Global",
    description: "Mes projets visent à créer un impact positif au-delà des frontières, contribuant au développement durable et à l'amélioration des conditions de vie.",
    icon: GlobeAltIcon
  }
]

const goals = [
  {
    title: "Progression Académique",
    description: "Poursuivre mes études en informatique et obtenir une solide formation universitaire, avec pour objectif un master en génie logiciel ou intelligence artificielle.",
    timeframe: "2024-2027"
  },
  {
    title: "Expérience Professionnelle",
    description: "Acquérir de l’expérience à travers des stages, projets collaboratifs et opportunités freelance afin de renforcer mes compétences pratiques.",
    timeframe: "2024-2026"
  },
  {
    title: "Projets à Impact",
    description: "Développer des applications et outils technologiques utiles pour la communauté, en particulier dans les domaines de l’éducation et de l’accès au numérique en Afrique.",
    timeframe: "2026-2030"
  },
  {
    title: "Contribution et Partage",
    description: "Continuer à apprendre, partager mes connaissances et inspirer d’autres étudiants passionnés par le développement et l’innovation technologique.",
    timeframe: "2030+"
  }
]


const scholarshipReasons = [
  {
    title: "Excellence Académique",
    description: "Accéder aux meilleures ressources éducatives et aux programmes de recherche de pointe pour maximiser mon potentiel d'apprentissage et d'innovation.",
    icon: AcademicCapIcon
  },
  {
    title: "Perspective Internationale",
    description: "Développer une vision globale et multiculturelle de la technologie tout en créant un réseau international de collaborateurs et mentors.",
    icon: GlobeAltIcon
  },
  {
    title: "Innovation Durable",
    description: "Contribuer à la recherche et au développement de solutions technologiques durables qui bénéficieront aux communautés mondiales.",
    icon: RocketLaunchIcon
  }
]

const motivationQuote = "L'éducation est l'arme la plus puissante pour changer le monde. Je souhaite utiliser cette arme pour créer un impact positif durable dans ma communauté, en Afrique et au-delà, en développant des technologies qui servent l'humanité."
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.bg-grid-white\/\[0\.05\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}
</style>