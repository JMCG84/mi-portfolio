<template>
  <div
    class="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center py-12">
    <!-- Hero Section Optimizado -->
    <div
      class="text-center space-y-8 md:space-y-12 max-w-5xl px-4 animate-fade-in w-full">
      <div class="space-y-6">
        <div
          class="inline-block px-5 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
          Disponible para nuevas oportunidades
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase text-white">
          Interfaces que conectan <br />
          <span
            class="bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
            Diseño y funcionalidad
          </span>
        </h1>

        <p
          class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mt-6">
          Desarrollador Frontend especializado en
          <span class="text-white font-bold">Vue 3 y TypeScript</span>, con
          experiencia real en consultoría tecnológica e integración de IA en el
          flujo de desarrollo.
        </p>
      </div>

      <!-- Botones de Acción -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center pt-4">
        <RouterLink
          to="/projects"
          class="px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
          Explorar Proyectos
        </RouterLink>
        <RouterLink
          to="/about"
          class="inline-block px-10 py-4 md:py-5 bg-transparent border-2 border-blue-500 text-blue-300 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-blue-500/10 hover:scale-125 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all">
          Sobre mí
        </RouterLink>
      </div>

      <!-- Feature Cards con espacio suficiente -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pb-10">
        <div
          class="bg-gray-800/20 backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-blue-500/30 transition-all group">
          <div
            class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-black transition-all">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3
            class="text-sm font-black text-white uppercase tracking-[0.2em] mb-2">
            Arquitectura
          </h3>
          <p class="text-xs text-gray-500 leading-relaxed italic">
            Sistemas escalables y modulares con Vue 3.
          </p>
        </div>

        <div
          class="bg-gray-800/20 backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-blue-500/30 transition-all group">
          <div
            class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-black transition-all">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.3a1 1 0 00-.7.3l-2 2a3 3 0 01-4.2 0l-2-2a1 1 0 00-.7-.3H7" />
            </svg>
          </div>
          <h3
            class="text-sm font-black text-white uppercase tracking-[0.2em] mb-2">
            Diseño UI/UX
          </h3>
          <p class="text-xs text-gray-500 leading-relaxed italic">
            Interfaces adaptativas con Tailwind CSS.
          </p>
        </div>

        <div
          class="bg-gray-800/20 backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-blue-500/30 transition-all group">
          <div
            class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-black transition-all">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3
            class="text-sm font-black text-white uppercase tracking-[0.2em] mb-2">
            IA Workflow
          </h3>
          <p class="text-xs text-gray-500 leading-relaxed italic">
            Desarrollo potenciado por agentes de IA.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
