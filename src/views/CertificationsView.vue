<script setup lang="ts">
import { computed } from "vue";

type Certification = {
  id: number;
  title: string;
  company: string;
  pdfLink?: string;
  icon: string;
  description?: string;
  inProgress?: boolean;
  date?: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Certificado Profesional de Ciberseguridad de Google",
    company: "Google",
    pdfLink: "/Certificado Google Cybersecurity.pdf",
    description:
      "Especialización compuesta por 9 módulos técnicos centrados en la protección de infraestructuras críticas, el análisis de vulnerabilidades y la automatización de respuestas ante amenazas con Python.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    date: "2026-06-28",
  },
  {
    id: 2,
    title: "Google AI Essentials (5 cursos)",
    company: "Google",
    pdfLink: "/Google AI Essentials (5 cursos).pdf",
    description:
      "Programa Google AI Essentials compuesto por cinco cursos sobre fundamentos y aplicaciones de inteligencia artificial.",
    icon: "M12 3v1m6.364 1.636l-.707.707M21 12H3",
  },
  {
    id: 3,
    title: "Vue 3 de cero a experto",
    company: "Udemy",
    pdfLink: "/curso vue.js udemy.pdf",
    description:
      "Curso completo para crear aplicaciones modernas con Vue 3, Composition API, Vue Router, Pinia y herramientas de desarrollo para proyectos escalables.",
    icon: "M12 2l9.89 18H2.11L12 2z",
    date: "2026-01-29",
  },
  {
    id: 4,
    title: "JavaScript Avanzado",
    company: "OpenWebinars",
    pdfLink: "/certificado_fundamentos_de_javascript.pdf",
    description:
      "Profundización en conceptos clave del lenguaje, como asincronía, closures, módulos, patrones y buenas prácticas para escribir código robusto.",
    icon: "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm2 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    date: "2026-01-29",
  },
  {
    id: 5,
    title: "Fundamentos de Angular",
    company: "OpenWebinars",
    pdfLink: "/certificado_fundamentos_de_angular.pdf",
    description:
      "Introducción práctica al framework Angular para construir aplicaciones con componentes, servicios, formularios y rutas de navegación.",
    icon: "M12 2l9 16H3L12 2",
    date: "2026-01-29",
  },
  {
    id: 6,
    title: "PHP: Fundamentos",
    company: "OpenWebinars",
    pdfLink: "/certificado_php__fundamentos.pdf",
    description:
      "Aprendizaje de la sintaxis básica de PHP, funciones, lógica de programación y conexión con bases de datos para desarrollar aplicaciones dinámicas.",
    icon: "M12 6a2 2 0 100-4 2 2 0 000 4zM6 12a2 2 0 100-4 2 2 0 000 4z",
    date: "2026-01-29",
  },
  {
    id: 7,
    title: "Desarrollo Aumentado por IA",
    company: "Big School",
    pdfLink: "/Desarrollo con IA.pdf",
    description:
      "Uso de herramientas de inteligencia artificial para acelerar tareas de programación, documentación y productividad en entornos de desarrollo reales.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    date: "2026-02-05",
  },
  {
    id: 8,
    title: "Prompting Avanzado",
    company: "Google",
    pdfLink: "/Google _prompting.pdf",
    description:
      "Técnicas para diseñar prompts más efectivos y obtener respuestas más útiles, precisas y adaptadas a distintos contextos de uso.",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3",
    date: "2026-02-12",
  },
  {
    id: 9,
    title: "Instalación Aplicaciones",
    company: "Formación Profesional",
    pdfLink:
      "/Diploma de instalacion y configuracion de aplicaciones informaticas.pdf",
    description:
      "Formación práctica sobre la instalación, configuración y mantenimiento básico de aplicaciones informáticas en entornos de usuario.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5",
    date: "2026-02-19",
  },
  {
    id: 10,
    title: "Seguridad Informática",
    company: "Formación Profesional",
    pdfLink: "/Diploma de seguridad en equipos informaticos.pdf",
    description:
      "Conceptos fundamentales de protección de equipos, contraseñas, redes y buenas prácticas para mantener un entorno digital más seguro.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    date: "2026-02-19",
  },
  {
    id: 11,
    title: "Jira Service Management",
    company: "Atlassian",
    pdfLink: "/certificado jira service management.pdf",
    description:
      "Gestión de tickets, flujos de trabajo y procesos de soporte técnico con herramientas de Atlassian para equipos organizados.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5",
    date: "2026-04-06",
  },
  {
    id: 12,
    title: "Make",
    company: "Make",
    pdfLink: "/certificado make.pdf",
    description:
      "Automatización de procesos y workflows conectando aplicaciones sin necesidad de desarrollar código complejo para cada tarea.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    date: "2026-04-06",
  },
];

const sortedCertifications = computed(() => {
  return [...certifications].sort((a, b) => {
    const pinnedOrder = [1, 2];
    const aPinnedIndex = pinnedOrder.indexOf(a.id);
    const bPinnedIndex = pinnedOrder.indexOf(b.id);

    if (aPinnedIndex !== -1 || bPinnedIndex !== -1) {
      if (aPinnedIndex === -1) return 1;
      if (bPinnedIndex === -1) return -1;
      return aPinnedIndex - bPinnedIndex;
    }

    return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
  });
});
</script>

<template>
  <div class="space-y-12">
    <header class="text-center space-y-4">
      <div
        class="inline-block px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium">
        Historial Académico
      </div>
      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
        Certificaciones Académicas
      </h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Evidencia de mi compromiso con el aprendizaje continuo y mi
        especialización técnica en el ecosistema de desarrollo moderno.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="cert in sortedCertifications"
        :key="cert.id"
        class="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        <div class="relative z-10 flex flex-col h-full justify-between">
          <div class="flex items-start gap-5 mb-6">
            <div
              class="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white group-hover:scale-110 transition-transform shrink-0">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="cert.icon"></path>
              </svg>
            </div>
            <div class="min-w-0">
              <h3
                class="text-xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors line-clamp-2 uppercase leading-tight">
                {{ cert.title }}
              </h3>
              <p class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span
                  v-if="cert.id === 1 || cert.id === 2"
                  class="text-base font-bold normal-case tracking-normal"
                  aria-label="Google">
                  <span class="text-[#4285F4]">G</span
                  ><span class="text-[#EA4335]">o</span
                  ><span class="text-[#FBBC05]">o</span
                  ><span class="text-[#4285F4]">g</span
                  ><span class="text-[#34A853]">l</span
                  ><span class="text-[#EA4335]">e</span>
                </span>
                <span
                  v-else
                  class="text-sm font-medium text-gray-400 uppercase tracking-widest">
                  {{ cert.company }}
                </span>
                <span
                  v-if="cert.id === 1 || cert.id === 2"
                  class="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Certificado oficial
                </span>
              </p>
              <p
                v-if="cert.description"
                class="text-sm text-gray-400 leading-relaxed mt-3 normal-case whitespace-normal break-words">
                {{ cert.description }}
              </p>
            </div>
          </div>

          <a
            v-if="cert.pdfLink"
            :href="cert.pdfLink"
            target="_blank"
            class="relative z-20 w-full py-3 bg-blue-800/50 border border-blue-600/50 text-blue-300 text-center font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
            Ver Diploma
          </a>
          <span
            v-else
            class="relative z-20 w-full py-3 bg-gray-700/50 border border-gray-600/50 text-gray-300 text-center font-bold uppercase tracking-[0.2em] text-xs rounded-xl flex items-center justify-center gap-2">
            En curso
          </span>
        </div>

        <!-- Efecto de brillo azul -->
        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </article>
    </div>

    <div class="flex justify-center pt-8">
      <RouterLink
        to="/skills"
        class="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Volver a Habilidades</span>
      </RouterLink>
    </div>
  </div>
</template>
