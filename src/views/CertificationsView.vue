<script setup lang="ts">
type Certification = {
  id: number;
  title: string;
  company: string;
  date: string;
  pdfLink: string;
  icon?: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Vue 3 de cero a experto",
    company: "Udemy",
    date: "Diciembre 2025",
    pdfLink: "/public/curso vue.js udemy.pdf",
    icon: "M12 2l9.89 18H2.11L12 2z",
  },
  {
    id: 2,
    title: "Fundamentos de Angular",
    company: "OpenWebinars",
    date: "Julio 2025",
    pdfLink: "/public/certificado_fundamentos_de_angular.pdf",
    icon: "M12 2l9 16H3L12 2m0 0v10m0-10L3 18h18L12 2",
  },
  {
    id: 3,
    title: "Fundamentos de JavaScript",
    company: "OpenWebinars",
    date: "Julio 2025",
    pdfLink: "/public/certificado_fundamentos_de_javascript.pdf",
    icon: "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm2 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    id: 4,
    title: "PHP: Fundamentos",
    company: "OpenWebinars",
    date: "Julio 2025",
    pdfLink: "/public/certificado_php__fundamentos.pdf",
    icon: "M12 6a2 2 0 100-4 2 2 0 000 4zM6 12a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zm0-6a2 2 0 100-4 2 2 0 000 4z",
  },
];
</script>

<template>
  <div class="space-y-8">
    <header class="space-y-3">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
        Certificaciones
      </div>
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white">
        Certificaciones Académicas
      </h2>
      <p class="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
        Formación continua y certificaciones en las principales tecnologías y
        metodologías del desarrollo web moderno.
      </p>
    </header>

    <section class="space-y-4" aria-label="Listado de certificaciones">
      <article
        v-for="cert in certifications"
        :key="cert.id"
        class="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
        <div
          class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-start gap-4 flex-1">
            <div
              class="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/50 group-hover:text-sky-400 transition-colors duration-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="cert.icon" />
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <h3
                class="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                {{ cert.title }}
              </h3>
              <div
                class="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-slate-400">
                <span class="font-medium">{{ cert.company }}</span>
                <span class="hidden sm:inline text-slate-600">•</span>
                <span>{{ cert.date }}</span>
              </div>
            </div>
          </div>

          <a
            :href="cert.pdfLink"
            download
            class="px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-bold hover:bg-sky-500/20 hover:border-sky-500/50 transition-all duration-300 flex items-center gap-2 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 16v-4m0 0V8m0 4h4m-4 0h-4m6-11H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2z" />
            </svg>
            Descargar PDF
          </a>
        </div>

        <div
          class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sky-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </article>
    </section>

    <footer
      class="rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-6">
      <div class="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p class="text-sm text-slate-400 text-center md:text-left">
          ¿Quieres conocer más sobre mis habilidades técnicas?
          <span class="text-white font-medium"
            >Explora mis competencias y tecnologías.</span
          >
        </p>
        <RouterLink
          to="/skills"
          class="px-5 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-sky-400 transition-colors">
          Ver Habilidades
        </RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
