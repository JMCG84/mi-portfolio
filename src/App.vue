<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Sistema de Fondo Premium -->
    <div class="fixed inset-0 z-0 bg-[#020617] bg-grid">
      <!-- Orbes de Gradiente -->
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-violet/25 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-cyan/20 rounded-full blur-[120px] animate-pulse-glow" style="animation-delay: -4s"></div>
      
      <!-- Partículas de Código (Decorativas) -->
      <div v-for="(p, i) in particles" :key="i" 
           class="code-particle hidden lg:block"
           :style="{ 
             '--duration': p.duration + 's', 
             '--delay': p.delay + 's', 
             '--left': p.left + '%',
             'font-size': p.size + 'px'
           }">
        {{ p.text }}
      </div>
    </div>

    <!-- Navegación -->
    <header class="fixed top-0 left-0 right-0 z-50 px-6 py-5 glass border-b border-white/10">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <div class="relative group cursor-pointer" @click="$router.push('/')">
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative w-10 h-10 rounded-full border border-white/20 overflow-hidden">
              <img src="/foto_cv.jpg" alt="Jose Manuel Campos" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          <div class="hidden sm:block cursor-pointer" @click="$router.push('/')">
            <h1 class="text-xl font-black tracking-tight text-white uppercase">Jose <span class="text-brand-cyan">Manuel</span></h1>
            <p class="text-[9px] text-brand-cyan font-bold uppercase tracking-[0.3em]">Frontend Developer</p>
          </div>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-2">
          <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path" 
            class="nav-link px-5 py-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- Mobile Toggle -->
        <button class="md:hidden p-2 text-white hover:text-brand-cyan transition-colors" @click="menuOpen = !menuOpen">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Menú Móvil -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div v-if="menuOpen" class="fixed inset-0 z-40 md:hidden pt-28 px-8 bg-[#020617]/98 backdrop-blur-2xl">
        <nav class="flex flex-col space-y-6">
          <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path" 
            class="text-4xl font-black text-gray-400 hover:text-brand-cyan transition-colors uppercase tracking-tight"
            @click="menuOpen = false">
            {{ link.name }}
          </RouterLink>
          <hr class="border-white/10 my-8" />
          <div class="space-y-4">
            <p class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Contacto Directo</p>
            <a href="mailto:jmanuelcamposgarcia90@gmail.com" class="text-xl text-brand-cyan font-bold block">jmanuelcamposgarcia90@gmail.com</a>
          </div>
        </nav>
      </div>
    </Transition>

    <!-- Área de Contenido -->
    <main class="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-8 scale-[0.98]"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-8 scale-[0.98]"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Barra de Estado (Premium Detail) -->
    <footer class="fixed bottom-0 left-0 right-0 z-50 px-6 py-2.5 glass border-t border-white/10 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
      <div class="flex items-center space-x-6">
        <span class="flex items-center text-brand-cyan"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span> Disponible para nuevos retos</span>
        <span class="hidden sm:inline text-gray-600">Vue 3 + Vite + TypeScript</span>
      </div>
      <div class="hover:text-white transition-colors cursor-default">
        &copy; 2024 Jose Manuel Campos
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const menuOpen = ref(false)
const router = useRouter()

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Sobre mí', path: '/about' }
]

const particles = [
  { text: '<div>', duration: 25, delay: 0, left: 5, size: 24 },
  { text: 'createApp()', duration: 35, delay: 2, left: 15, size: 18 },
  { text: 'npm run dev', duration: 20, delay: 5, left: 85, size: 20 },
  { text: 'import { ref }', duration: 30, delay: 8, left: 75, size: 16 },
  { text: 'Tailwind CSS', duration: 45, delay: 4, left: 40, size: 22 },
  { text: '<RouterView />', duration: 28, delay: 1, left: 60, size: 19 },
  { text: 'interface User', duration: 40, delay: 6, left: 25, size: 17 },
  { text: 'git commit', duration: 32, delay: 3, left: 92, size: 15 }
]
</script>

<style>
/* Transitions are handled by Tailwind classes in the <Transition> components */
</style>
