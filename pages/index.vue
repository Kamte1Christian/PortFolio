<template>
  <div class="overflow-hidden">
    <!-- Section Hero avec animations avancées -->
    <section class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <!-- Background animé -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.2),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- Particules flottantes -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div class="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-40"></div>
        <div class="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div class="relative z-10 flex items-center min-h-screen pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            <!-- Contenu principal -->
            <div class="lg:col-span-7 space-y-8">
              <div class="space-y-6 animate-fade-in-up">
                <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <span class="text-white/80 text-sm font-medium">Disponible pour des opportunités</span>
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span class="text-white block">Bonjour, je suis</span>
                  <span class="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    {{ personalInfo.name }}
                  </span>
                </h1>
                
                <p class="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  {{ personalInfo.tagline }}
                </p>
              </div>

              <!-- Statistiques en ligne -->
              <div class="flex flex-wrap gap-8 py-6 animate-fade-in-up animation-delay-200">
                <div v-for="stat in stats" :key="stat.label" class="text-center">
                  <div class="text-3xl font-bold text-white">{{ stat.value }}</div>
                  <div class="text-gray-400 text-sm">{{ stat.label }}</div>
                </div>
              </div>

              <!-- Boutons d'action -->
              <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <NuxtLink 
                  to="/projects"
                  class="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    Découvrir mes projets
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NuxtLink>
                
                <NuxtLink 
                  to="/contact"
                  class="group px-8 py-4 rounded-2xl font-semibold text-center relative overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <span class="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                    Me contacter
                  </span>
                  <div class="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NuxtLink>
              </div>
            </div>

            <!-- Photo de profil avec effets -->
            <div class="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-right">
              <div class="relative group">
                <!-- Cercles décoratifs animés -->
                <div class="absolute -inset-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                <div class="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700 animate-ping"></div>
                
                <!-- Photo principale -->
                <div class="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500">
                  <img 
                    :src="personalInfo.profileImage" 
                    :alt="personalInfo.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                </div>
                
                <!-- Badge flottant -->
                <div class="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-gray-800 font-medium text-sm">Ouvert aux opportunités</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scroll indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section À propos moderne -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <!-- Pattern décoratif -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
            À propos de moi
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Passion, Innovation & Excellence
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-8 space-y-8">
            <p class="text-xl text-gray-600 leading-relaxed">
              {{ personalInfo.aboutShort }}
            </p>

            <!-- Points forts avec icônes animées -->
            <div class="grid sm:grid-cols-2 gap-6">
              <div v-for="highlight in highlights" :key="highlight.title" 
                   class="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component :is="highlight.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                    {{ highlight.title }}
                  </h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    {{ highlight.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistiques en cards -->
          <div class="lg:col-span-4">
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 class="text-lg font-bold text-gray-900 mb-6 text-center">Mes performances</h3>
              <div class="space-y-6">
                <div v-for="stat in detailedStats" :key="stat.label" 
                     class="relative">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-700 font-medium">{{ stat.label }}</span>
                    <span class="text-violet-600 font-bold">{{ stat.value }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                         :style="{ width: stat.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences révolutionnaire -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <!-- Animations de background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.1),transparent_50%)]"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            Mes compétences
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technologies & Expertise
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="category in skillCategories" :key="category.name" 
               class="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4">
                <component :is="category.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                {{ category.name }}
              </h3>
            </div>
            
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" 
                   class="flex items-center justify-between">
                <span class="text-gray-300">{{ skill.name }}</span>
                <div class="flex space-x-1">
                  <div v-for="i in 5" :key="i"
                       class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                       :class="i <= skill.level ? 'bg-gradient-to-r from-violet-400 to-purple-400' : 'bg-gray-600'">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA moderne -->
    <section class="py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      <!-- Éléments décoratifs -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1] bg-[size:60px_60px]"></div>
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt à transformer vos idées en
            <span class="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              solutions innovantes ?
            </span>
          </h2>
          
          <p class="text-xl text-purple-100 mb-12 leading-relaxed">
            Je recherche activement des opportunités de bourses d'études pour poursuivre ma formation 
            et contribuer à l'innovation technologique mondiale.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contact"
              class="group inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/20"
            >
              <span>Discutons ensemble</span>
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            
            <a 
              href="/documents/cv.pdf" 
              target="_blank"
              class="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger mon CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { AcademicCapIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'app',
})

// Données personnalisées
const personalInfo = {
  name: "Kamte Christian",
  tagline: "Étudiant passionné en informatique à la recherche d'opportunités internationales pour approfondir mes connaissances et contribuer à l'innovation technologique.",
  profileImage: "/images/profile-large.jpeg",
  aboutShort: "Passionné par l'informatique, je combine excellence académique et expérience pratique pour résoudre des problèmes complexes. Mon objectif est de poursuivre mes études à l'international pour développer une expertise de niveau mondial."
}

const stats = [
  { value: "3.8", label: "GPA Moyen" },
  { value: "15+", label: "Projets Réalisés" },
  { value: "3", label: "Stages Effectués" },
  { value: "2", label: "Années d'expérience" }
]

const detailedStats = [
  { label: "Programmation", value: "90%", percentage: 90 },
  { label: "Gestion de projet", value: "85%", percentage: 85 },
  { label: "Travail d'équipe", value: "95%", percentage: 95 },
  { label: "Innovation", value: "88%", percentage: 88 }
]

const highlights = [
  {
    title: "Excellence Académique",
    description: "Maintien d'une moyenne élevée avec distinction et reconnaissance par les professeurs",
    icon: AcademicCapIcon
  },
  {
    title: "Projets Innovants", 
    description: "Développement de solutions créatives et impact mesurable dans mes réalisations",
    icon: CodeBracketIcon
  },
  {
    title: "Vision Internationale",
    description: "Ambition claire d'études et de carrière à l'étranger avec perspective globale",
    icon: GlobeAltIcon
  }
]

const skillCategories = [
  {
    name: "Développement Web",
    icon: CodeBracketIcon,
    skills: [
      { name: "PHP/Symfony/Laravel", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "React/Vue.js", level: 4 },
      { name: "Node.js", level: 3 }
    ]
  },
  {
    name: "Base de Données",
    icon: GlobeAltIcon,
    skills: [
      { name: "MySQL", level: 4 },
      { name: "PostgreSQL", level: 3 },
    ]
  },
  {
    name: "Soft Skills",
    icon: AcademicCapIcon,
    skills: [
      { name: "Leadership", level: 4 },
      { name: "Communication", level: 5 },
      { name: "Résolution de problèmes", level: 4 },
      { name: "Créativité", level: 4 }
    ]
  }
]
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

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease-in-out infinite;
}

.bg-grid-white\/\[0\.02\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
}

.bg-grid-white\/\[0\.1\] {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}
</style>