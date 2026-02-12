<script setup lang="ts">
type Project = {
  id: number;
  title: string;
  subtitle?: string;
  tech: string[];
  description: string;
  role: string;
  link?: string;
  github?: string;
  icon?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quizz City",
    subtitle: "Fullstack Gamified Platform",
    tech: ["Vue 3", "TypeScript", "Node.js", "Prisma"],
    description:
      "Plataforma de competición sobre geografía española con más de 500 preguntas, sistema de ranking global, temporizador inteligente y panel de administración para gestión de contenido.",
    role: "Fullstack Developer (Idea original y desarrollo en Alten)",
    link: "/Videos/quizz-city-demo.mp4",
    github: "https://github.com/JMCG84/quizz-city",
    icon: "M12 3L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-4zm3.5 6l-4 4-2-2",
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
  {
    id: 4,
    title: "CSV Audio-Data Converter",
    subtitle:
      "Herramienta de automatización de datos para ingeniería acústica.",
    tech: ["HTML5", "JS", "CSS", "Vibe Coding", "Vercel"],
    description:
      "Automatización de datos de medición acústica, de carpeta CSV a un archivo Excel estructurado en segundos.",
    role: "Proyecto Personal para solución real a un familiar",
    link: "https://conversor-archivos.vercel.app/",
    github: "https://github.com/JMCG84/conversor_archivos",
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

          <div
            v-if="project.link || project.github"
            class="pt-2 flex gap-2 flex-wrap">
            <a
              v-if="project.id === 1 || project.id === 4"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xs font-bold shadow-sm hover:from-sky-600 hover:to-indigo-600 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true">
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
              Abrir demo
            </a>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold shadow-sm transition-all border border-slate-700 hover:border-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              v-if="project.id !== 1 && project.id !== 4 && project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
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
    <footer class="mt-6">
      <div class="flex justify-end">
        <RouterLink
          to="/"
          class="px-5 py-2 bg-slate-900 text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors border border-slate-800">
          Volver al inicio
        </RouterLink>
      </div>
    </footer>
  </div>
</template>
