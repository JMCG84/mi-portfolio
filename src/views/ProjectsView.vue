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
    title: "Fisio Plenium",
    subtitle: "Sistema de Gestión de Clínica de Fisioterapia",
    tech: ["Vue 3", "TypeScript", "PHP 8", "MySQL"],
    description:
      "Plataforma integral de gestión para clínicas de fisioterapia, migrada a Vue 3 desde su versión legacy en PHP. Proyecto Final de Grado Superior transformado con asistencia de IA, incluyendo gestión de pacientes, reservas, historiales clínicos y panel administrativo con API desacoplada.",
    role: "Proyecto Final de Grado Superior",
    link: "/Videos/fisioplenium-demo.mp4",
    github: "https://github.com/JMCG84/Fisio_plenium",
    icon: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
  },
  {
    id: 3,
    title: "Portfolio Dashboard Profesional",
    tech: ["Vue 3", "Vite", "TypeScript", "Vercel"],
    description:
      "Construcción de esta Single Page Application (SPA) optimizada para rendimiento, con diseño responsive y despliegue continuo (CI/CD).",
    role: "Proyecto Personal",
    link: "https://mi-portfolio-jmcg84.vercel.app/",
    github: "https://github.com/JMCG84/mi-portfolio",
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
  {
    id: 5,
    title: "La Gasolinera Mas Barata",
    subtitle: "Buscador de estaciones de servicio económicas",
    tech: ["Vue 3", "Vite", "Geolocalización HTML5", "Vanilla CSS"],
    description:
      "SPA que ayuda a usuarios a encontrar las estaciones de servicio más económicas dentro de un radio de 20 kilómetros desde su ubicación actual, utilizando datos en tiempo real del Ministerio y la Fórmula de Haversine para cálculos vectoriales.",
    role: "Proyecto Personal",
    link: "https://lagasolinamasbarata.vercel.app/",
    github: "https://github.com/JMCG84/lagasolinamasbarata",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];
</script>

<template>
  <div class="space-y-12">
    <header class="text-center space-y-4">
      <div
        class="inline-block px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium">
        Portfolio
      </div>
      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
        Proyectos Destacados
      </h2>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto">
        Una selección de mis trabajos más recientes, aplicando lógica de
        componentes, tipado estricto y diseños adaptables.
      </p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="project in projects"
        :key="project.id"
        class="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
        :style="{ transformStyle: 'preserve-3d' }">
        <div class="space-y-4">
          <header class="flex items-start justify-between">
            <div class="space-y-1">
              <h3
                class="text-xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors">
                {{ project.title }}
              </h3>
              <p
                class="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {{ project.role }}
              </p>
            </div>
            <div
              class="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white group-hover:scale-110 transition-transform">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="project.icon"></path>
              </svg>
            </div>
          </header>

          <p class="text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-xs font-medium border border-gray-600/50">
              {{ tech }}
            </span>
          </div>

          <div v-if="project.link || project.github" class="flex gap-3 pt-4">
            <a
              v-if="
                project.id === 1 ||
                project.id === 2 ||
                project.id === 3 ||
                project.id === 4 ||
                project.id === 5
              "
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-center hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105">
              Ver Demo
            </a>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-blue-800/50 border border-blue-600/50 text-blue-300 rounded-full font-bold hover:bg-blue-700/50 transition-all transform hover:scale-105">
              GitHub
            </a>

            <a
              v-if="
                project.id !== 1 &&
                project.id !== 2 &&
                project.id !== 3 &&
                project.id !== 4 &&
                project.id !== 5 &&
                project.link
              "
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-gray-300 transition-colors">
              Ver Repo
            </a>
          </div>
        </div>

        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </article>
    </section>

    <footer class="text-center">
      <RouterLink
        to="/"
        class="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg">
        Volver al Inicio
      </RouterLink>
    </footer>
  </div>
</template>
