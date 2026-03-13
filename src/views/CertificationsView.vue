<script setup lang="ts">
type Certification = {
  id: number;
  title: string;
  company: string;
  pdfLink: string;
  icon: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Vue 3 de cero a experto",
    company: "Udemy",
    pdfLink: "/curso vue.js udemy.pdf",
    icon: "M12 2l9.89 18H2.11L12 2z",
  },
  {
    id: 2,
    title: "JavaScript Avanzado",
    company: "OpenWebinars",
    pdfLink: "/certificado_fundamentos_de_javascript.pdf",
    icon: "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm2 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    id: 3,
    title: "Fundamentos de Angular",
    company: "OpenWebinars",
    pdfLink: "/certificado_fundamentos_de_angular.pdf",
    icon: "M12 2l9 16H3L12 2",
  },
  {
    id: 4,
    title: "PHP: Fundamentos",
    company: "OpenWebinars",
    pdfLink: "/certificado_php__fundamentos.pdf",
    icon: "M12 6a2 2 0 100-4 2 2 0 000 4zM6 12a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    id: 5,
    title: "Desarrollo Aumentado por IA",
    company: "Big School",
    pdfLink: "/Desarrollo con IA.pdf",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 6,
    title: "Google IA Esencial",
    company: "Google",
    pdfLink: "/Google IA Esencial.pdf",
    icon: "M12 3v1m6.364 1.636l-.707.707M21 12H3",
  },
  {
    id: 7,
    title: "Prompting Avanzado",
    company: "Google",
    pdfLink: "/Google _prompting.pdf",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3",
  },
  {
    id: 8,
    title: "Instalación Aplicaciones",
    company: "Formación Profesional",
    pdfLink: "/Diploma de instalacion y configuracion de aplicaciones informaticas.pdf",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5",
  },
  {
    id: 9,
    title: "Seguridad Informática",
    company: "Formación Profesional",
    pdfLink: "/Diploma de seguridad en equipos informaticos.pdf",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];
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
        Evidencia de mi compromiso con el aprendizaje continuo y mi especialización técnica en el ecosistema de desarrollo moderno.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="cert in certifications" :key="cert.id"
               class="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        
        <div class="relative z-10 flex flex-col h-full justify-between">
          <div class="flex items-start gap-5 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white group-hover:scale-110 transition-transform shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cert.icon"></path>
              </svg>
            </div>
            <div class="min-w-0">
              <h3 class="text-xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors line-clamp-2 uppercase leading-tight">
                {{ cert.title }}
              </h3>
              <p class="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">{{ cert.company }}</p>
            </div>
          </div>

          <a :href="cert.pdfLink" target="_blank"
             class="relative z-20 w-full py-3 bg-blue-800/50 border border-blue-600/50 text-blue-300 text-center font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
            Ver Diploma
          </a>
        </div>

        <!-- Efecto de brillo azul -->
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </article>
    </div>

    <div class="flex justify-center pt-8">
      <RouterLink to="/skills" 
                 class="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Volver a Habilidades</span>
      </RouterLink>
    </div>
  </div>
</template>
