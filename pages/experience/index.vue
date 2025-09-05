<template>
  <div class="pt-16">
    <!-- Hero Section with Animated Background -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
        <div class="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%239C92AC'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-20"></div>
        <div class="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 animate-fade-in">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 mb-6">
            <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            Disponible pour de nouvelles opportunités
          </div>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 animate-slide-up">
          Mon
          <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Expérience
          </span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
          Un parcours façonné par la passion de l'innovation, 
          <span class="text-cyan-400 font-semibold">des projets concrets</span> 
          et un engagement constant vers l'excellence
        </p>
        
        <div class="flex justify-center space-x-4 mt-12 animate-slide-up animation-delay-600">
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400">2+</div>
            <div class="text-gray-400 text-sm">Années d'expérience</div>
          </div>
          <div class="w-px h-12 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400">5+</div>
            <div class="text-gray-400 text-sm">Projets réalisés</div>
          </div>
          <div class="w-px h-12 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-indigo-400">3</div>
            <div class="text-gray-400 text-sm">Stages effectués</div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon class="w-6 h-6 text-white/60" />
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-200 text-purple-700 mb-6">
            <BriefcaseIcon class="w-5 h-5 mr-2" />
            Parcours Professionnel
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expériences 
            <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Professionnelles
            </span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque expérience a contribué à enrichir mes compétences et ma vision du développement logiciel
          </p>
        </div>

        <!-- Experience Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30"></div>
          
          <div class="space-y-16">
            <div v-for="(exp, index) in experiences" :key="index" 
                 class="relative group"
                 :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
              
              <!-- Timeline Dot -->
              <div class="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full border-4 border-white shadow-lg z-20 group-hover:scale-125 transition-transform duration-300"></div>
              
              <!-- Content Card -->
              <div class="ml-16 lg:ml-0 lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'">
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                  
                  <!-- Card Header -->
                  <div class="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white">
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex-grow">
                        <h3 class="text-2xl font-bold mb-2">{{ exp.position }}</h3>
                        <div class="flex items-center mb-2">
                          <BuildingOfficeIcon class="w-5 h-5 mr-2 opacity-80" />
                          <span class="font-medium">{{ exp.company }}</span>
                        </div>
                        <div class="flex items-center opacity-80">
                          <MapPinIcon class="w-4 h-4 mr-2" />
                          <span class="text-sm">{{ exp.location }}</span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {{ exp.period }}
                        </div>
                        <div class="text-sm opacity-80">{{ exp.type }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Card Content -->
                  <div class="p-6">
                    <p class="text-gray-700 mb-6 leading-relaxed">{{ exp.description }}</p>

                    <!-- Responsibilities -->
                    <div class="mb-6">
                      <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                        <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Responsabilités principales
                      </h4>
                      <ul class="space-y-3">
                        <li v-for="responsibility in exp.responsibilities" 
                            :key="responsibility" 
                            class="flex items-start group/item">
                          <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span class="text-gray-700">{{ responsibility }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Technologies -->
                    <div v-if="exp.technologies" class="mb-6">
                      <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                        <div class="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        Stack Technique
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tech in exp.technologies" 
                              :key="tech"
                              class="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-300 cursor-default">
                          {{ tech }}
                        </span>
                      </div>
                    </div>

                    <!-- Achievements -->
                    <div v-if="exp.achievements" class="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
                      <h4 class="font-bold text-green-900 mb-3 flex items-center">
                        <TrophyIcon class="w-5 h-5 text-green-600 mr-2" />
                        Réalisations clés
                      </h4>
                      <ul class="space-y-2">
                        <li v-for="achievement in exp.achievements" 
                            :key="achievement" 
                            class="flex items-start">
                          <div class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span class="text-green-800 text-sm">{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Section -->
    <section class="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full translate-x-48 translate-y-48 opacity-20"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-200 text-purple-700 mb-6">
            <HeartIcon class="w-5 h-5 mr-2" />
            Impact Social
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engagements &
            <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Bénévolat
            </span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Contribuer à la communauté et partager mes connaissances fait partie intégrante de mon parcours
          </p>
        </div>

        <!-- Engagement Cards Grid -->
        <div class="grid lg:grid-cols-2 gap-8">
          <div v-for="(engagement, index) in engagements" 
               :key="engagement.title" 
               class="group relative">
            
            <!-- Card Background with Gradient Border -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div class="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
              
              <!-- Card Header -->
              <div class="p-6 border-b border-gray-100">
                <div class="flex items-start space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HeartIcon class="w-7 h-7 text-purple-600" />
                  </div>
                  <div class="flex-grow">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">{{ engagement.title }}</h3>
                    <p class="text-purple-600 font-medium text-sm">{{ engagement.organization }}</p>
                    <p class="text-gray-500 text-sm mt-1">{{ engagement.period }}</p>
                  </div>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6">
                <p class="text-gray-700 mb-6 leading-relaxed">{{ engagement.description }}</p>
                
                <!-- Impact Badge -->
                <div v-if="engagement.impact" 
                     class="bg-gradient-to-r from-purple-50 to-cyan-50 border border-purple-100 p-4 rounded-xl">
                  <div class="flex items-start">
                    <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div class="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h5 class="font-semibold text-purple-900 text-sm mb-1">Impact réalisé</h5>
                      <p class="text-purple-800 text-sm font-medium">{{ engagement.impact }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-20 text-center">
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div class="max-w-3xl mx-auto">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                Intéressé par une
                <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  collaboration
                </span> ?
              </h3>
              <p class="text-xl text-gray-600 mb-8">
                Je suis toujours ouvert à de nouveaux défis et opportunités. 
                Discutons de la façon dont nous pouvons travailler ensemble !
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" 
                   class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <EnvelopeIcon class="w-5 h-5 mr-2" />
                  Me Contacter
                </a>
                <a href="/projets" 
                   class="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                  <EyeIcon class="w-5 h-5 mr-2" />
                  Voir mes Projets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  BuildingOfficeIcon, 
  MapPinIcon, 
  CheckIcon, 
  TrophyIcon,
  HeartIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  EyeIcon
} from '@heroicons/vue/24/outline'

// Configuration SEO
useSeoMeta({
  title: 'Expérience - Christian Kamte | Portfolio',
  description: 'Découvrez mon parcours professionnel, mes expériences de stage et mes engagements bénévoles qui ont façonné mes compétences.'
})

// DONNÉES À PERSONNALISER - EXPÉRIENCE
const experiences = [
  {
    position: "Stagiaire Développeur Full-Stack",
    company: "CINAF",
    location: "Douala, Cameroun",
    period: "Juillet 2024 - Présent",
    type: "Stage (en cours)",
    description: "Participation au développement d’applications web et à l’intégration de nouvelles fonctionnalités dans des projets internes.",
    responsibilities: [
      "Développement et maintenance de fonctionnalités backend avec Symfony et API Platform",
      "Implémentation de l’authentification JWT et gestion des utilisateurs",
      "Mise en place de fonctionnalités de messagerie et de gestion de données",
      "Contribution au développement frontend avec React.js et Tailwind CSS",
      "Collaboration avec l’équipe sur les bonnes pratiques de versioning (Git)"
    ],
    technologies: ["Symfony", "API Platform", "JWT", "MySQL", "React.js", "Tailwind CSS", "Git"],
    achievements: [
      "Participation au développement d’un système de messagerie interne",
      "Amélioration de la gestion des utilisateurs avec rôles et abonnements",
      "Première expérience concrète en entreprise dans le développement full-stack"
    ]
  }
]

// DONNÉES À PERSONNALISER - ENGAGEMENTS
const engagements = [
  {
    title: "Membre du Club Informatique",
    organization: "Université",
    period: "2023 - Présent",
    description: "Participation à des activités étudiantes autour de l’informatique et de la programmation, apprentissage collaboratif et échanges avec d’autres étudiants passionnés.",
    impact: "Contribution à des ateliers internes et partage de connaissances en programmation."
  },
  {
    title: "Apprentissage en Autodidacte",
    organization: "Projets Personnels",
    period: "2024 - Présent",
    description: "Réalisation de projets personnels pour renforcer mes compétences en développement web et logiciel.",
    impact: "Création d’un portfolio en ligne, mise en pratique de Symfony, API Platform, React.js et Tailwind CSS."
  }
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>