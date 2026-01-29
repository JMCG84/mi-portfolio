<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 text-slate-50 flex flex-col md:flex-row font-sans">
    <aside
      class="hidden md:flex w-72 flex-col border-r border-slate-800 bg-slate-950 px-6 py-8 gap-8 sticky top-0 h-screen">
      <header class="space-y-4">
        <div
          class="inline-flex relative items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-500/20 overflow-hidden">
          <img
            src="/public/profile.jpg"
            alt="Foto de Jose Manuel Campos"
            class="w-full h-full object-cover"
            onerror="this.style.display = 'none'" />
        </div>
        <div>
          <h1 class="text-lg font-bold tracking-tight">Jose Manuel Campos</h1>
          <p class="text-xs text-sky-400 font-medium uppercase tracking-widest">
            Frontend Developer
          </p>
        </div>
      </header>

      <nav class="flex-1 space-y-2 text-sm font-medium">
        <RouterLink
          to="/"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover:bg-slate-900 hover:text-sky-400 transition-all duration-300 border border-transparent hover:border-slate-800"
          active-class="bg-slate-900 text-sky-400 border-slate-800 shadow-inner">
          <span>Inicio</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover:bg-slate-900 hover:text-sky-400 transition-all duration-300 border border-transparent hover:border-slate-800"
          active-class="bg-slate-900 text-sky-400 border-slate-800 shadow-inner">
          <span>Proyectos</span>
        </RouterLink>
        <RouterLink
          to="/skills"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover:bg-slate-900 hover:text-sky-400 transition-all duration-300 border border-transparent hover:border-slate-800"
          active-class="bg-slate-900 text-sky-400 border-slate-800 shadow-inner">
          <span>Skills</span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover:bg-slate-900 hover:text-sky-400 transition-all duration-300 border border-transparent hover:border-slate-800"
          active-class="bg-slate-900 text-sky-400 border-slate-800 shadow-inner">
          <span>Sobre mí</span>
        </RouterLink>
      </nav>

      <footer class="pt-6 border-t border-slate-900">
        <p
          class="text-[10px] leading-relaxed text-slate-500 uppercase tracking-tighter">
          Desarrollado con <span class="text-sky-500">Vue 3 & Tailwind</span>
        </p>
      </footer>
    </aside>

    <header
      class="md:hidden flex flex-col px-4 py-4 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-sm font-bold tracking-tight text-white">
          Jose Manuel <span class="text-sky-400">Campos</span>
        </h1>
        <span
          class="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase"
          >Frontend Dev</span
        >
      </div>

      <nav class="flex justify-between gap-1 overflow-x-auto pb-1 no-scrollbar">
        <RouterLink
          to="/"
          class="px-3 py-2 rounded-lg text-xs font-medium text-slate-400 border border-transparent whitespace-nowrap"
          active-class="bg-slate-900 text-sky-400 border-slate-800"
          >Inicio</RouterLink
        >
        <RouterLink
          to="/projects"
          class="px-3 py-2 rounded-lg text-xs font-medium text-slate-400 border border-transparent whitespace-nowrap"
          active-class="bg-slate-900 text-sky-400 border-slate-800"
          >Proyectos</RouterLink
        >
        <RouterLink
          to="/skills"
          class="px-3 py-2 rounded-lg text-xs font-medium text-slate-400 border border-transparent whitespace-nowrap"
          active-class="bg-slate-900 text-sky-400 border-slate-800"
          >Skills</RouterLink
        >
        <RouterLink
          to="/about"
          class="px-3 py-2 rounded-lg text-xs font-medium text-slate-400 border border-transparent whitespace-nowrap"
          active-class="bg-slate-900 text-sky-400 border-slate-800"
          >Sobre mí</RouterLink
        >
      </nav>
    </header>

    <main class="flex-1 min-w-0 bg-slate-950">
      <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-sky-500/5 blur-[120px] rounded-full"></div>
        <div
          class="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full"></div>
      </div>

      <section
        class="relative z-10 px-6 md:px-12 py-8 md:py-12 max-w-5xl mx-auto">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<style>
/* Quitar barra de scroll en navegación móvil */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
