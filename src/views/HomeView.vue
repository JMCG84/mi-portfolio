<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center space-y-8 animate-float">
      <div class="space-y-4">
        <div
          class="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium">
          Disponible para nuevas oportunidades
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight">
          Interfaces que conectan <br />
          <span
            class="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent animate-pulse">
            Diseño y funcionalidad
          </span>
        </h1>
        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Especializado en la creación de interfaces modernas con Vue 3,
          TypeScript y Tailwind CSS. Mi enfoque va más allá del código estático:
          diseño interfaces dinámicas optimizadas mediante IA-Augmented
          Development.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/projects"
          class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105 shadow-lg">
          Explorar Proyectos
        </RouterLink>
        <RouterLink
          to="/about"
          class="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 rounded-full font-bold hover:bg-blue-500 hover:text-black transition-all transform hover:scale-105">
          Sobre mí
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div
          class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all transform hover:scale-105">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-200 mb-2">Arquitectura SPA</h3>
          <p class="text-gray-400">
            Sistemas escalables con Vue 3. Implementación de arquitecturas
            modulares y eficientes.
          </p>
        </div>

        <div
          class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all transform hover:scale-105">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-200 mb-2">Diseño UI/UX</h3>
          <p class="text-gray-400">
            Interfaces modernas y adaptativas. Creación de componentes visuales
            con Tailwind CSS.
          </p>
        </div>

        <div
          class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all transform hover:scale-105">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-200 mb-2">
            IA-Augmented Development
          </h3>
          <p class="text-gray-400">
            Desarrollo potenciado por IA. Integración de flujos de trabajo con
            agentes y herramientas de IA.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
