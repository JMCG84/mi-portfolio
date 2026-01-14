<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 flex">
    <aside
      class="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-950/80 px-5 py-6 gap-6"
    >
      <header class="space-y-3">
        <p class="text-xs uppercase tracking-[0.3em] text-sky-400/80">Frontend Dev</p>
        <div>
          <h1 class="text-xl font-semibold">Portfolio Dashboard</h1>
          <p class="text-xs text-slate-400">
            Mini SPA con Vue 3 + TypeScript + Tailwind CSS.
          </p>
        </div>
      </header>

      <nav class="flex-1 space-y-1 text-sm">
        <RouterLink
          to="/"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition"
          active-class="bg-slate-800 text-white"
        >
          <span>Inicio</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition"
          active-class="bg-slate-800 text-white"
        >
          <span>Proyectos</span>
        </RouterLink>
        <RouterLink
          to="/skills"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition"
          active-class="bg-slate-800 text-white"
        >
          <span>Skills</span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition"
          active-class="bg-slate-800 text-white"
        >
          <span>Sobre mí</span>
        </RouterLink>
      </nav>

      <footer class="text-[11px] text-slate-500">
        Demo orientada a mostrar
        <span class="text-sky-400">maquetación y componentes frontend</span>.
      </footer>
    </aside>

    <main class="flex-1 min-w-0">
      <header
        class="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/90"
      >
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-sky-400/80">
            Frontend Dev
          </p>
          <h1 class="text-sm font-medium">Portfolio Dashboard</h1>
        </div>
        <nav class="flex gap-2 text-[11px]">
          <RouterLink to="/" class="px-2 py-1 rounded border border-slate-700"
            >Inicio</RouterLink
          >
          <RouterLink to="/projects" class="px-2 py-1 rounded border border-slate-700"
            >Proyectos</RouterLink
          >
          <RouterLink to="/skills" class="px-2 py-1 rounded border border-slate-700"
            >Skills</RouterLink
          >
          <RouterLink to="/about" class="px-2 py-1 rounded border border-slate-700"
            >Sobre mí</RouterLink
          >
        </nav>
      </header>

      <section class="px-4 md:px-8 py-6 md:py-8 max-w-5xl mx-auto">
        <RouterView />
      </section>
    </main>
  </div>
</template>

