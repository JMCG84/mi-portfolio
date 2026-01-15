<script setup lang="ts">
const highlightText =
  "Especializado en la creación de interfaces modernas con Vue 3, TypeScript y Tailwind CSS.";
</script>

<template>
  <div class="space-y-10">
    <section class="space-y-4">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
        Disponible para nuevas oportunidades
      </div>
      <h2
        class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        Interfaces que conectan <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          diseño y funcionalidad.
        </span>
      </h2>
      <p class="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
        {{ highlightText }}
        Mi objetivo es transformar ideas complejas en Single Page Applications
        (SPA) intuitivas, rápidas y totalmente adaptables.
      </p>

      <div class="flex gap-4 pt-2">
        <RouterLink
          to="/projects"
          class="px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-sky-400 transition-colors shadow-lg shadow-white/5">
          Explorar Proyectos
        </RouterLink>
        <RouterLink
          to="/about"
          class="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold border border-slate-800 hover:border-slate-700 transition-colors">
          Sobre mí
        </RouterLink>
      </div>
    </section>

    <section
      class="grid gap-6 md:grid-cols-3"
      aria-label="Pilares de mi trabajo">
      <article
        class="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80">
        <div
          class="w-10 h-10 mb-4 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="font-bold text-white mb-2">Arquitectura SPA</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Navegación fluida y eficiente mediante <strong>Vue Router</strong>,
          optimizando la carga de recursos y la experiencia de usuario.
        </p>
      </article>

      <article
        class="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80">
        <div
          class="w-10 h-10 mb-4 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
        <h3 class="font-bold text-white mb-2">Diseño UI/UX</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Interfaces construidas con <strong>Tailwind CSS</strong> bajo la
          filosofía <em>Mobile First</em>, garantizando adaptabilidad total.
        </p>
      </article>

      <article
        class="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80">
        <div
          class="w-10 h-10 mb-4 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 class="font-bold text-white mb-2">Código Robusto</h3>
        <p class="text-sm text-slate-400 leading-relaxed">
          Uso de <strong>TypeScript</strong> para un desarrollo seguro, con
          componentes modulares fáciles de mantener y escalar.
        </p>
      </article>
    </section>
  </div>
</template>
