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
  <div class="space-y-12 py-4">
    <header class="max-w-3xl space-y-4">
      <div class="inline-flex items-center px-4 py-1 glass border border-white/20 rounded-full shadow-lg">
        <span class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">Certificaciones</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
        Certificaciones <span class="text-brand-cyan">Académicas</span>
      </h2>
    </header>

    <!-- Grid compacto para reducir scroll -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="cert in certifications" :key="cert.id"
               class="glass-card group p-6 rounded-[30px] flex flex-col justify-between border border-white/5 hover:border-brand-cyan/30 transition-all">
        <div class="flex items-start gap-5 mb-6">
          <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-all shrink-0">
            <svg class="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cert.icon"></path>
            </svg>
          </div>
          <div class="min-w-0">
            <h3 class="text-lg font-black tracking-tight text-white group-hover:text-brand-cyan transition-colors line-clamp-2 uppercase leading-tight">
              {{ cert.title }}
            </h3>
            <p class="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">{{ cert.company }}</p>
          </div>
        </div>

        <a :href="cert.pdfLink" target="_blank"
           class="w-full py-3 glass border border-white/10 text-white text-center font-black uppercase tracking-[0.2em] text-[9px] rounded-xl hover:bg-brand-cyan hover:text-black transition-all flex items-center justify-center gap-2">
          Ver Diploma
        </a>
      </article>
    </div>

    <div class="flex justify-center pt-8">
      <RouterLink to="/skills" class="btn-primary flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
        <svg class="w-4 h-4 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="text-xs font-black uppercase tracking-[0.2em]">Volver</span>
      </RouterLink>
    </div>
  </div>
</template>
