<template>
  <div class="min-h-screen bg-black text-white font-sans overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      <!-- Subtle frontend elements -->
      <div class="absolute top-1/4 left-1/4 text-gray-700 text-6xl opacity-10">&lt;/&gt;</div>
      <div class="absolute bottom-1/4 right-1/4 text-gray-700 text-4xl opacity-10">{ }</div>
      <div class="absolute top-1/2 left-1/2 text-gray-700 text-5xl opacity-5">&lt;div&gt;</div>
      <div class="absolute top-3/4 left-1/4 text-gray-700 text-3xl opacity-10">&lt;script&gt;</div>
      <div class="absolute top-1/3 right-1/3 text-blue-600 text-2xl opacity-15">function()</div>
      <div class="absolute bottom-1/3 left-1/3 text-blue-600 text-4xl opacity-10">.class</div>
      <div class="absolute top-2/3 right-1/4 text-gray-600 text-3xl opacity-8">#id</div>
    </div>

    <!-- Header -->
    <header class="relative z-10 flex justify-between items-center px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden">
          <img src="/foto_cv.jpg" alt="Foto de Jose Manuel Campos" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Jose Manuel Campos</h1>
      </div>
      <nav class="hidden md:flex space-x-8">
        <RouterLink to="/" class="text-gray-300 hover:text-blue-300 transition-colors">Inicio</RouterLink>
        <RouterLink to="/projects" class="text-gray-300 hover:text-blue-300 transition-colors">Proyectos</RouterLink>
        <RouterLink to="/skills" class="text-gray-300 hover:text-blue-300 transition-colors">Skills</RouterLink>
        <RouterLink to="/about" class="text-gray-300 hover:text-blue-300 transition-colors">Sobre mí</RouterLink>
      </nav>
      <button class="md:hidden text-gray-300" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="relative z-10 md:hidden bg-gray-900/90 backdrop-blur-lg">
      <nav class="flex flex-col space-y-4 p-6">
        <RouterLink to="/" class="text-gray-300 hover:text-blue-300 transition-colors" @click="toggleMenu">Inicio</RouterLink>
        <RouterLink to="/projects" class="text-gray-300 hover:text-blue-300 transition-colors" @click="toggleMenu">Proyectos</RouterLink>
        <RouterLink to="/skills" class="text-gray-300 hover:text-blue-300 transition-colors" @click="toggleMenu">Skills</RouterLink>
        <RouterLink to="/about" class="text-gray-300 hover:text-blue-300 transition-colors" @click="toggleMenu">Sobre mí</RouterLink>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="relative z-10 px-6 py-12 max-w-7xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
