<script setup lang="ts">
type Project = {
  id: number
  title: string
  tech: string[]
  description: string
  role: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'UI de panel de control para app SaaS',
    tech: ['Vue 3', 'TypeScript', 'Tailwind', 'Componentes reutilizables'],
    description:
      'Diseño de layout principal, navegación lateral, tarjetas de métricas y tablas responsivas.',
    role: 'Implementación completa de la capa de presentación.',
  },
  {
    id: 2,
    title: 'Landing page responsive para producto digital',
    tech: ['Vue', 'Tailwind', 'Animaciones suaves', 'Buenas prácticas de accesibilidad'],
    description:
      'Hero section, grid de features, secciones de pricing y FAQ con diseño mobile-first.',
    role: 'Maquetación desde Figma hasta código.',
  },
  {
    id: 3,
    title: 'Módulo de autenticación (UI)',
    tech: ['Vue', 'Form handling', 'Validaciones básicas', 'Estados de carga'],
    description:
      'Pantallas de login/registro, feedback de errores y estados de loading conectados a APIs.',
    role: 'Construcción de la parte visual y manejo de estados en el frontend.',
  },
]
</script>

<template>
  <div class="space-y-5">
    <header class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold tracking-tight">Proyectos frontend</h2>
      <p class="text-sm text-slate-300 max-w-2xl">
        Lista de proyectos pensados para mostrar maquetación, estructuración de componentes y
        trabajo con Vue + Tailwind. Puedes adaptar estos ejemplos a tus proyectos reales.
      </p>
    </header>

    <section class="grid gap-4 md:grid-cols-2" aria-label="Listado de proyectos">
      <article
        v-for="project in projects"
        :key="project.id"
        class="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3"
      >
        <header class="flex items-start justify-between gap-2">
          <div>
            <h3 class="font-medium text-slate-50">
              {{ project.title }}
            </h3>
            <p class="text-xs text-slate-400">
              {{ project.role }}
            </p>
          </div>
        </header>

        <p class="text-sm text-slate-300">
          {{ project.description }}
        </p>

        <ul class="flex flex-wrap gap-1.5 text-[11px]">
          <li
            v-for="tech in project.tech"
            :key="tech"
            class="rounded-full bg-slate-800/80 px-2 py-1 text-slate-200 border border-slate-700/80"
          >
            {{ tech }}
          </li>
        </ul>

        <p v-if="project.link" class="text-xs text-sky-400">
          <a :href="project.link" target="_blank" rel="noreferrer">Ver repositorio</a>
        </p>
      </article>
    </section>
  </div>
</template>

