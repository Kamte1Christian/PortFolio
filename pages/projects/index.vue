<template>
  <div class="pt-16 overflow-hidden">
    <!-- Hero Section with Dynamic Background -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      </div>

      <!-- Floating Code Elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/4 left-1/6 text-blue-300/20 text-6xl font-mono transform -rotate-12 animate-float">&lt;/&gt;</div>
        <div class="absolute top-1/3 right-1/4 text-purple-300/20 text-4xl font-mono transform rotate-12 animate-float-delayed">{}</div>
        <div class="absolute bottom-1/4 left-1/3 text-indigo-300/20 text-5xl font-mono transform rotate-45 animate-float-slow">[]</div>
        <div class="absolute top-2/3 right-1/3 text-cyan-300/20 text-3xl font-mono transform -rotate-45 animate-pulse">()</div>
      </div>

      <div class="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto w-full text-center">
          <div class="space-y-8 animate-fade-in-up">
            <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Portfolio de projets
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
              Mes
              <span class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projets
              </span>
            </h1>
            
            <p class="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Découvrez mes créations qui démontrent ma passion pour l'innovation, 
              la résolution de problèmes et l'excellence technique
            </p>
            
            <!-- Scroll Indicator -->
            <div class="mt-16 animate-bounce">
              <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm">
                <span class="mr-2">Explorez mes réalisations</span>
                <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Filter Section -->
    <section class="sticky top-16 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
          <!-- Category Filters -->
          <div class="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              class="relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-sm group"
              :class="selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
            >
              <span class="relative z-10">{{ category }}</span>
              <div v-if="selectedCategory === category" 
                   class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>
          
          <!-- Project Count -->
          <div class="text-gray-600 font-medium">
            {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }}
            {{ selectedCategory !== 'Tous' ? `en ${selectedCategory}` : 'au total' }}
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 animate-fade-in-up"
            :style="{ animationDelay: `${projects.indexOf(project) * 100}ms` }"
          >
            <!-- Enhanced Project Image -->
            <div class="relative overflow-hidden h-64">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                  {{ project.category }}
                </span>
              </div>

              <!-- Duration Badge -->
              <div class="absolute top-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                <span class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  {{ project.duration }}
                </span>
              </div>

              <!-- Hover Overlay with Quick Actions -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div class="flex gap-4">
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" 
                     class="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                     class="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Technologies Stack -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1.5 bg-gray-100/80 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-default transform hover:scale-105"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Project Impact -->
              <div class="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl backdrop-blur-sm border border-blue-100/50">
                <h4 class="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Impact & Résultats
                </h4>
                <p class="text-gray-700 text-sm leading-relaxed">{{ project.impact }}</p>
              </div>

              <!-- Project Actions -->
              <div class="flex space-x-3">
                <a 
                  v-if="project.demoUrl" 
                  :href="project.demoUrl" 
                  target="_blank"
                  class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Voir la démo</span>
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="flex-1 bg-white border border-gray-300 text-gray-700 text-center py-3 px-4 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg shadow-gray-500/10 flex items-center justify-center gap-2 group"
                >
                  <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Code source</span>
                </a>
                <button 
                  @click="openModal(project)"
                  class="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 px-4 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 group"
                >
                  <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Détails</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Message si aucun projet -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FolderIcon class="w-12 h-12 text-secondary-400" />
          </div>
          <h3 class="text-lg font-semibold text-secondary-900 mb-2">Aucun projet trouvé</h3>
          <p class="text-secondary-600">Essayez de sélectionner une autre catégorie</p>
        </div>
      </div>
    </section>

    <!-- Enhanced Modal -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 overflow-y-auto"
      @click="closeModal"
    >
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"></div>

        <!-- Modal Content -->
        <div class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full animate-scale-up"
             @click.stop>
          <div class="bg-white px-8 pt-8 pb-6">
            <!-- Modal Header -->
            <div class="flex items-start justify-between mb-6">
              <div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">
                  {{ selectedProject.title }}
                </h3>
                <div class="flex items-center gap-3 text-gray-600">
                  <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {{ selectedProject.category }}
                  </span>
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ selectedProject.duration }}
                  </span>
                </div>
              </div>
              <button @click="closeModal" 
                      class="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>

            <!-- Project Image -->
            <div class="relative rounded-xl overflow-hidden mb-8 shadow-lg">
              <img 
                :src="selectedProject.image" 
                :alt="selectedProject.title"
                class="w-full h-64 object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <!-- Project Details -->
            <div class="space-y-6 mb-8">
              <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Description complète
                </h4>
                <p class="text-gray-700 leading-relaxed">{{ selectedProject.fullDescription }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100/50">
                  <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Défis rencontrés
                  </h4>
                  <p class="text-gray-700 leading-relaxed">{{ selectedProject.challenges }}</p>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100/50">
                  <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Solutions apportées
                  </h4>
                  <p class="text-gray-700 leading-relaxed">{{ selectedProject.solutions }}</p>
                </div>
              </div>
            </div>

            <!-- Technologies Stack -->
            <div class="mb-8">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Stack Technique
              </h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Modal Actions -->
            <div class="flex gap-4 pt-6 border-t border-gray-200">
              <a 
                v-if="selectedProject.demoUrl" 
                :href="selectedProject.demoUrl" 
                target="_blank"
                class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <svg class="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Voir la démo en direct
              </a>
              <a 
                v-if="selectedProject.githubUrl" 
                :href="selectedProject.githubUrl" 
                target="_blank"
                class="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 px-6 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg shadow-gray-500/10 flex items-center justify-center gap-2 group"
              >
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                Explorer le code source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FolderIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// Configuration SEO
useSeoMeta({
  title: 'Mes Projets - Votre Nom | Portfolio',
  description: 'Découvrez mes projets académiques et personnels qui démontrent mes compétences en développement et innovation.'
})

// État réactif
const selectedCategory = ref('Tous')
const selectedProject = ref(null)

// Catégories de projets
const categories = ['Tous', 'Web', 'Mobile', 'Data Science', 'AI/ML', 'Académique']

// Données des projets - À PERSONNALISER
const projects = [
  {
    id: 1,
    title: "Application de Gestion Étudiante",
    category: "Web",
    description: "Plateforme web complète pour la gestion des étudiants, notes et emplois du temps avec interface admin et étudiant.",
    fullDescription: "J'ai développé une application web full-stack pour simplifier la gestion académique. L'application permet aux étudiants de consulter leurs notes, emplois du temps et de communiquer avec les professeurs, tandis que l'interface administrative offre des outils complets de gestion.",
    challenges: "La principale difficulté était de créer une architecture scalable capable de gérer plusieurs milliers d'utilisateurs simultanés tout en maintenant la sécurité des données sensibles.",
    solutions: "J'ai implémenté une architecture microservices avec authentification JWT, base de données optimisée avec indexation appropriée et mise en place d'un système de cache Redis pour améliorer les performances.",
    image: "/images/projects/student-app.jpg",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "JWT", "Redis"],
    duration: "4 mois",
    impact: "Utilisée par 500+ étudiants, réduction de 60% du temps de traitement administratif",
    demoUrl: "https://demo.student-app.com",
    githubUrl: "https://github.com/votreusername/student-app"
  },
  {
    id: 2,
    title: "Système de Recommandation E-commerce",
    category: "AI/ML",
    description: "Algorithme d'apprentissage automatique pour recommander des produits basé sur le comportement utilisateur.",
    fullDescription: "Développement d'un système de recommandation hybride combinant filtrage collaboratif et filtrage basé sur le contenu pour améliorer l'expérience d'achat en ligne.",
    challenges: "Traiter efficacement de grands volumes de données tout en fournissant des recommandations pertinentes en temps réel.",
    solutions: "Utilisation d'Apache Spark pour le traitement distribué des données et implémentation d'algorithmes optimisés avec mise en cache des résultats fréquents.",
    image: "/images/projects/recommendation-system.jpg",
    technologies: ["Python", "Scikit-learn", "Apache Spark", "TensorFlow", "PostgreSQL"],
    duration: "3 mois",
    impact: "Amélioration de 25% du taux de conversion, augmentation de 40% du temps passé sur site",
    githubUrl: "https://github.com/votreusername/recommendation-system"
  },
  {
    id: 3,
    title: "Application Mobile de Santé",
    category: "Mobile",
    description: "App mobile pour le suivi de santé personnelle avec rappels médicaments et consultation télémédecine.",
    fullDescription: "Application mobile cross-platform permettant aux utilisateurs de suivre leur santé quotidienne, gérer leurs médicaments et accéder à des consultations médicales à distance.",
    challenges: "Assurer la sécurité des données médicales sensibles et créer une interface intuitive pour tous les âges.",
    solutions: "Implémentation du chiffrement end-to-end, respect des normes HIPAA et design UX adaptatif basé sur des tests utilisateurs approfondis.",
    image: "/images/projects/health-app.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "Socket.io", "Stripe API"],
    duration: "5 mois",
    impact: "2000+ téléchargements, amélioration de 80% de l'observance médicamenteuse des utilisateurs",
    demoUrl: "https://healthapp-demo.com",
    githubUrl: "https://github.com/votreusername/health-app"
  },
  {
    id: 4,
    title: "Analyse de Données Climatiques",
    category: "Data Science",
    description: "Analyse et visualisation des données climatiques du Cameroun avec prédictions météorologiques.",
    fullDescription: "Projet de recherche analysant 20 ans de données climatiques du Cameroun pour identifier les tendances et développer des modèles prédictifs pour l'agriculture locale.",
    challenges: "Nettoyer et normaliser des données incomplètes provenant de multiples sources gouvernementales.",
    solutions: "Développement de scripts d'automatisation pour la collecte et le nettoyage de données, avec validation croisée des sources multiples.",
    image: "/images/projects/climate-data.jpg",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "APIs REST"],
    duration: "6 mois",
    impact: "Rapport utilisé par 3 ONG locales, amélioration de 15% des rendements agricoles pilotes",
    githubUrl: "https://github.com/votreusername/climate-analysis"
  },
  {
    id: 5,
    title: "Plateforme d'Apprentissage en Ligne",
    category: "Académique",
    description: "Plateforme LMS avec cours vidéo, quiz interactifs et système de progression pour l'éducation à distance.",
    fullDescription: "Système de gestion d'apprentissage complet développé comme projet de fin d'études, offrant une alternative accessible à l'éducation traditionnelle avec fonctionnalités avancées de suivi pédagogique.",
    challenges: "Créer une expérience d'apprentissage engageante tout en gérant la bande passante limitée dans certaines régions.",
    solutions: "Implémentation de la compression vidéo adaptative, mode hors-ligne avec synchronisation intelligente et interface progressive optimisée pour connexions lentes.",
    image: "/images/projects/lms-platform.jpg",
    technologies: ["Django", "PostgreSQL", "Redis", "Celery", "Bootstrap", "WebRTC"],
    duration: "8 mois",
    impact: "300+ étudiants inscrits, taux de complétion des cours de 85%, mention très bien au projet",
    demoUrl: "https://lms-demo.com",
    githubUrl: "https://github.com/votreusername/lms-platform"
  },
  {
    id: 6,
    title: "Chatbot Intelligent Customer Service",
    category: "AI/ML",
    description: "Chatbot basé sur l'IA pour le service client avec traitement du langage naturel multilingue.",
    fullDescription: "Chatbot intelligent capable de gérer les requêtes client en français et anglais, avec intégration CRM et escalade automatique vers agents humains selon la complexité.",
    challenges: "Comprendre le contexte conversationnel et gérer les nuances linguistiques dans un environnement multilingue.",
    solutions: "Utilisation de modèles de langage pré-entrainés fine-tunés sur des données spécifiques au domaine, avec système de confiance pour décider des escalades.",
    image: "/images/projects/chatbot-ai.jpg",
    technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL", "Docker", "Rasa"],
    duration: "4 mois",
    impact: "Réduction de 45% des tickets support, satisfaction client maintenue à 92%",
    demoUrl: "https://chatbot-demo.com",
    githubUrl: "https://github.com/votreusername/ai-chatbot"
  }
]

// Projets filtrés
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

// Fonctions du modal
const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

// Nettoyage lors de la destruction du composant
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>