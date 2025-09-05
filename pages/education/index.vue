<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900">
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%234ADE80&quot; fill-opacity=&quot;0.05&quot; fill-rule=&quot;evenodd&quot;%3E%3Cpath d=&quot;m0 40 40-40H20L0 20M40 40V20l-20 20&quot;%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <!-- Floating Elements -->
        <div class="absolute top-20 left-20 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div class="absolute top-40 right-20 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>
      
      <!-- Academic Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 text-white/10 text-6xl font-bold rotate-12 animate-pulse">∀</div>
        <div class="absolute top-40 right-20 text-white/10 text-8xl font-bold -rotate-12 animate-pulse animation-delay-1000">∫</div>
        <div class="absolute bottom-40 left-20 text-white/10 text-7xl font-bold rotate-45 animate-pulse animation-delay-2000">Σ</div>
        <div class="absolute bottom-20 right-40 text-white/10 text-5xl font-bold -rotate-45 animate-pulse animation-delay-3000">∆</div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 animate-fade-in">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6">
            <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            Parcours Académique
          </div>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 animate-slide-up">
          Ma
          <span class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Formation
          </span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-300 mb-12">
          Un parcours académique rigoureux alliant 
          <span class="text-emerald-400 font-semibold">excellence théorique</span> 
          et 
          <span class="text-teal-400 font-semibold">applications pratiques</span>
          pour construire une expertise solide
        </p>
        
        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up animation-delay-600">
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-emerald-400 mb-1">2.7</div>
            <div class="text-gray-400 text-sm">GPA Moyen</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-teal-400 mb-1">0</div>
            <div class="text-gray-400 text-sm">Certification</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-cyan-400 mb-1">2</div>
            <div class="text-gray-400 text-sm">Projets Académiques</div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon class="w-6 h-6 text-white/60" />
      </div>
    </section>

    <!-- Interactive Timeline Section -->
    <section class="py-24 relative bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-200 text-emerald-700 mb-6">
            <AcademicCapIcon class="w-5 h-5 mr-2" />
            Chronologie Académique
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parcours de
            <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque étape de ma formation a contribué à forger ma vision et mes compétences
          </p>
        </div>

        <!-- Enhanced Timeline -->
        <div class="relative">
          <!-- Timeline Line with Gradient -->
          <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 h-full w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 opacity-20 rounded-full"></div>
          
          <div class="space-y-20">
            <div v-for="(education, index) in educationData" :key="index" 
                 class="relative group hover:scale-[1.02] transition-transform duration-300"
                 :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
              
              <!-- Enhanced Timeline Dot -->
              <div class="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full border-4 border-white shadow-xl z-20 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500">
                <div class="absolute inset-1 bg-white rounded-full animate-pulse"></div>
              </div>
              
              <!-- Enhanced Content Card -->
              <div class="ml-20 lg:ml-0 lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'">
                <div class="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
                  
                  <!-- Gradient Border Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-sm -z-10"></div>
                  
                  <!-- Card Header with Institution Badge -->
                  <div class="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white">
                    <!-- Background Pattern -->
                    <div class="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot; fill-rule=&quot;evenodd&quot;%3E%3Ccircle cx=&quot;3&quot; cy=&quot;3&quot; r=&quot;3&quot;/%3E%3Ccircle cx=&quot;13&quot; cy=&quot;13&quot; r=&quot;3&quot;/%3E%3C/g%3E%3C/svg%3E')]"></div>
                    
                    <div class="relative flex items-start justify-between mb-6">
                      <div class="flex-grow">
                        <h3 class="text-2xl lg:text-3xl font-bold mb-3">{{ education.degree }}</h3>
                        <div class="flex items-center mb-2">
                          <BuildingLibraryIcon class="w-6 h-6 mr-3 opacity-90" />
                          <span class="font-semibold text-lg">{{ education.institution }}</span>
                        </div>
                        <div class="flex items-center opacity-90">
                          <MapPinIcon class="w-5 h-5 mr-2" />
                          <span>{{ education.location }}</span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold mb-2 border border-white/30">
                          {{ education.period }}
                        </div>
                        <div v-if="education.grade" class="text-right">
                          <div class="bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/30">
                            {{ education.grade }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Card Content -->
                  <div class="p-8">
                    <p class="text-gray-700 text-lg mb-8 leading-relaxed">{{ education.description }}</p>

                    <!-- Key Subjects with Visual Enhancement -->
                    <div v-if="education.subjects" class="mb-8">
                      <h4 class="font-bold text-gray-900 text-lg mb-5 flex items-center">
                        <div class="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
                        Matières Principales
                      </h4>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div v-for="subject in education.subjects" 
                             :key="subject"
                             class="flex items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group/subject">
                          <div class="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 group-hover/subject:scale-125 transition-transform"></div>
                          <span class="text-gray-700 font-medium">{{ subject }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Achievements with Icons -->
                    <div v-if="education.achievements" class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
                      <h4 class="font-bold text-emerald-900 text-lg mb-4 flex items-center">
                        <TrophyIcon class="w-6 h-6 text-emerald-600 mr-3" />
                        Réalisations Marquantes
                      </h4>
                      <div class="space-y-3">
                        <div v-for="achievement in education.achievements" 
                             :key="achievement" 
                             class="flex items-start p-3 bg-white/70 rounded-lg hover:bg-white transition-colors duration-300">
                          <div class="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span class="text-emerald-800 font-medium">{{ achievement }}</span>
                        </div>
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

    <!-- Certifications Section -->
    <section class="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-48 -translate-y-48 opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full -translate-x-32 translate-y-32 opacity-20"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-200 text-emerald-700 mb-6">
            <StarIcon class="w-5 h-5 mr-2" />
            Formations Complémentaires
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications &
            <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Formations
            </span>
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Apprentissage continu et spécialisations pour rester à la pointe de la technologie
          </p>
        </div>

        <!-- Certifications Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(cert, index) in certifications" 
               :key="cert.name" 
               class="group relative hover:scale-105 transition-all duration-300">
            
            <!-- Card with Hover Effect -->
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
              
              <!-- Certificate Header -->
              <div class="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white relative">
                <!-- Background Pattern -->
                <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;30&#34; height=&#34;30&#34; viewBox=&#34;0 0 30 30&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cpath d=&#34;M15 0l3.09 9.51L27 12l-8.91 2.49L15 24l-3.09-9.51L3 12l8.91-2.49z&#34; fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.1&#34;/%3E%3C/svg%3E')] opacity-20"></div>
                
                <div class="relative flex items-start justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/30">
                    <AcademicCapIcon class="w-8 h-8 text-white" />
                  </div>
                  <div class="text-right">
                    <div class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold border border-white/30">
                      {{ cert.date }}
                    </div>
                  </div>
                </div>
                
                <h3 class="text-xl font-bold mb-2">{{ cert.name }}</h3>
                <p class="text-emerald-100 font-medium">{{ cert.issuer }}</p>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex-grow">
                <p class="text-gray-700 mb-6 leading-relaxed">{{ cert.description }}</p>
                
                <!-- Credential Link -->
                <div class="mt-auto">
                  <a v-if="cert.credentialUrl" 
                     :href="cert.credentialUrl" 
                     target="_blank"
                     class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group/link">
                    <span>Voir le certificat</span>
                    <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                  <div v-else class="text-gray-500 font-medium">
                    Certificat disponible sur demande
                  </div>
                </div>
              </div>

              <!-- Progress Indicator -->
              <div class="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <!-- Skills Summary -->
        <div class="mt-20">
          <div class="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div class="text-center mb-12">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                Compétences
                <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Développées
                </span>
              </h3>
              <p class="text-xl text-gray-600">
                Un éventail de compétences acquises tout au long de ma formation
              </p>
            </div>

            <!-- Skills Categories -->
            <div class="grid lg:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon class="w-8 h-8 text-emerald-600" />
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Programmation</h4>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Python</span>
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Java</span>
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">JavaScript</span>
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">C++</span>
                </div>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CubeIcon class="w-8 h-8 text-teal-600" />
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Technologies</h4>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">React</span>
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Node.js</span>
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">MongoDB</span>
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Docker</span>
                </div>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon class="w-8 h-8 text-cyan-600" />
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Data & IA</h4>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">TensorFlow</span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Pandas</span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Scikit-learn</span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-20 text-center">
          <div class="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM50 10c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            
            <div class="relative z-10 max-w-3xl mx-auto">
              <h3 class="text-3xl lg:text-4xl font-bold mb-4">
                Prêt pour de Nouveaux Défis
              </h3>
              <p class="text-xl text-emerald-100 mb-8">
                Ma formation solide et ma soif d'apprendre me préparent à relever 
                les défis technologiques de demain. Découvrons ensemble ce que nous pouvons accomplir !
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/projets" 
                   class="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <EyeIcon class="w-5 h-5 mr-2" />
                  Voir mes Projets
                </a>
                <a href="/contact" 
                   class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  <EnvelopeIcon class="w-5 h-5 mr-2" />
                  Me Contacter
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
  AcademicCapIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  TrophyIcon,
  StarIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CubeIcon,
  ChartBarIcon,
  EyeIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

// Configuration SEO
useSeoMeta({
  title: 'Formation - Christian Kamte | Portfolio',
  description: 'Découvrez mon parcours académique, diplômes et certifications qui constituent la base de mon expertise en informatique.'
})

// DONNÉES À PERSONNALISER - FORMATION
const educationData = [
  {
    degree: "Licence en Informatique (En cours)", 
    institution: "Institut Universitaire de Technologie de Douala (IUT)",
    location: "Douala, Cameroun",
    period: "2023 - En cours",
    grade: "En cours",
    description: "Formation en informatique avec apprentissage des bases du développement web, programmation et gestion de bases de données. Découverte de frameworks modernes et bonnes pratiques de développement.",
    subjects: [
      "Programmation (Python, JavaScript)",
      "Bases de Données (MySQL)",
      "Développement Web (HTML, CSS, VueJS, Symfony)",
      "Algorithmique et Structures de Données",
      "Systèmes et Réseaux"
    ],
    achievements: [
      "Création d’un portfolio personnel pour présenter mes projets",
      "Participation à des ateliers et mini-projets en développement web",
      "Stage de développement Full-Stack en cours"
    ]
  },
  {
    degree: "Baccalauréat Scientifique", 
    institution: "Lycée Bilingue de Bepanda",
    location: "Douala, Cameroun",
    period: "2020 - 2023", 
    grade: "En cours de précision",
    description: "Baccalauréat série C avec spécialisation en mathématiques et sciences physiques. Formation préparant aux études supérieures scientifiques et techniques.",
    subjects: [
      "Mathématiques", 
      "Mathématiques Avancées",
      "Physique", 
      "Informatique",
    ],
    achievements: [
      "Obtention du baccalauréat série C",
      "Participation à des concours académiques locaux",
      "Délégué de classe et représentant des élèves"
    ]
  }
]


const certifications = [
  // {
  //   name: "Introduction au Développement Web",
  //   issuer: "The Odin Project",
  //   description: "Formation complète en développement web front-end et back-end avec HTML, CSS, JavaScript et Node.js.",
  //   date: "2024",
  //   credentialUrl: "https://www.theodinproject.com/"
  // },
  // {
  //   name: "Développement Front-End avec VueJS",
  //   issuer: "Udemy",
  //   description: "Apprentissage du framework VueJS pour créer des applications web interactives et responsives.",
  //   date: "2024",
  //   credentialUrl: "https://www.udemy.com/"
  // },
  // {
  //   name: "Introduction à Symfony et API Platform",
  //   issuer: "OpenClassrooms",
  //   description: "Formation sur le framework Symfony et l’API Platform pour construire des applications web sécurisées.",
  //   date: "2024",
  //   credentialUrl: "https://openclassrooms.com/"
  // },
  // {
  //   name: "Git et GitHub pour Développeurs",
  //   issuer: "Coursera",
  //   description: "Cours sur la gestion de versions, la collaboration en équipe et les bonnes pratiques avec Git et GitHub.",
  //   date: "2024",
  //   credentialUrl: "https://www.coursera.org/"
  // },
  // {
  //   name: "Initiation au JavaScript et TypeScript",
  //   issuer: "freeCodeCamp",
  //   description: "Cours pour maîtriser les bases de JavaScript et TypeScript appliquées au développement web moderne.",
  //   date: "2024",
  //   credentialUrl: "https://www.freecodecamp.org/"
  // }
]

</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
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

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>