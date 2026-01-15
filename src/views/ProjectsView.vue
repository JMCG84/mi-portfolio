<script setup lang="ts">
type Project = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  role: string;
  link?: string;
  icon?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Desarrollo Frontend en ALTEN",
    tech: ["Vue 3", "TypeScript", "Tailwind CSS", "Git"],
    description:
      "Participación en el desarrollo de interfaces modernas y mantenimiento de componentes reutilizables bajo estándares profesionales de Clean Code.",
    role: "Prácticas Profesionales",
    icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0020 10.332V9.668a10.003 10.003 0 00-14.142-9.336L5.808.388m3.44 2.04a10.003 10.003 0 0110.152 10.152M12 11a1 1 0 110-2 1 1 0 010 2z",
  },
  {
    id: 2,
    title: "Sistema de Gestión Web (Proyecto DAW)",
    tech: ["PHP", "MySQL", "JavaScript", "CSS3"],
    description:
      "Desarrollo integral de una aplicación web con arquitectura cliente-servidor, manejo de bases de datos relacionales y autenticación de usuarios.",
    role: "Desarrollo Fullstack",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    id: 3,
    title: "Portfolio Dashboard Profesional",
    tech: ["Vue 3", "Vite", "TypeScript", "Vercel"],
    description:
      "Construcción de esta Single Page Application (SPA) optimizada para rendimiento, con diseño responsive y despliegue continuo (CI/CD).",
    role: "Proyecto Personal",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];
</script>

<template>
  <div class="space-y-8">
    <header class="space-y-3">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
        Portfolio
      </div>
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white">
        Proyectos Destacados
      </h2>
      <p class="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
        Una selección de mis trabajos más recientes, donde aplico lógica de
        componentes, tipado estricto y diseños adaptables a cualquier
        dispositivo.
      </p>
    </header>

    <section
      class="grid gap-6 md:grid-cols-2"
      aria-label="Listado de proyectos">
      <article
        v-for="project in projects"
        :key="project.id"
        class="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
        <header class="flex items-start justify-between mb-4">
          <div class="space-y-1">
            <h3
              class="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
              {{ project.title }}
            </h3>
            <p
              class="text-xs font-medium text-sky-500/80 uppercase tracking-wider">
              {{ project.role }}
            </p>
          </div>
          <div
            class="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-sky-500/30 text-slate-400 group-hover:text-sky-400 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="project.icon" />
            </svg>
          </div>
        </header>

        <p class="text-sm text-slate-400 mb-6 flex-1 leading-relaxed">
          {{ project.description }}
        </p>

        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-[10px] font-medium border border-slate-800 group-hover:border-slate-700 transition-colors">
              {{ tech }}
            </span>
          </div>

          <div v-if="project.link" class="pt-2">
            <a
              :href="project.link"
              target="_blank"
              class="inline-flex items-center text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors">
              Ver repositorio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </article>
    </section>
  </div>
</template>
