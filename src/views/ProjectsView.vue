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
  icon: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quizz City",
    subtitle: "Plataforma Gamificada",
    tech: ["Vue 3", "TypeScript", "Node.js", "Prisma"],
    description: "Plataforma de competición sobre geografía española con más de 500 preguntas, ranking global y panel de administración.",
    role: "Fullstack Developer",
    link: "/Videos/quizz-city-demo.mp4",
    github: "https://github.com/JMCG84/quizz-city",
    icon: "M12 3L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-4zm3.5 6l-4 4-2-2",
  },
  {
    id: 2,
    title: "Gestión Empresarial",
    tech: ["PHP", "MySQL", "JavaScript", "CSS3"],
    description: "Desarrollo integral de aplicación web para optimización de procesos internos y gestión de datos masivos.",
    role: "Fullstack Developer",
    github: "https://github.com/JMCG84",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    id: 3,
    title: "Portfolio Premium",
    tech: ["Vue 3", "Vite", "TypeScript", "Vercel"],
    description: "Single Page Application (SPA) optimizada para rendimiento, con diseño responsive y despliegue continuo (CI/CD).",
    role: "Frontend Developer",
    github: "https://github.com/JMCG84/mi-portfolio",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: 4,
    title: "Conversor CSV Acústico",
    tech: ["HTML5", "JS", "CSS", "Vibe Coding"],
    description: "Herramienta de automatización acústica. Convierte estructuras CSV complejas en reportes Excel estructurados.",
    role: "Frontend Developer",
    link: "https://conversor-archivos.vercel.app/",
    github: "https://github.com/JMCG84/conversor_archivos",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    id: 5,
    title: "Buscador Gasolineras",
    tech: ["Vue 3", "Vite", "Geolocalización", "Tailwind"],
    description: "Buscador en tiempo real de estaciones de servicio económicas utilizando geolocalización precisa.",
    role: "Frontend Developer",
    link: "https://lagasolinamasbarata.vercel.app/",
    github: "https://github.com/JMCG84/lagasolinamasbarata",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];
</script>

<template>
  <div class="space-y-12 py-4">
    <header class="max-w-3xl space-y-4">
      <div class="inline-flex items-center px-4 py-1 glass border border-white/20 rounded-full shadow-lg">
        <span class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">Portfolio</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
        Proyectos <span class="text-brand-cyan">Seleccionados</span>
      </h2>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id" 
           class="glass-card p-8 rounded-[35px] flex flex-col justify-between group h-full border border-white/5 hover:border-brand-cyan/30 transition-all">
        
        <div>
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-all">
              <svg class="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="project.icon"></path>
              </svg>
            </div>
            <a v-if="project.github" :href="project.github" target="_blank" 
               class="p-2.5 text-gray-500 hover:text-white transition-colors glass border border-white/10 rounded-lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          <div class="space-y-3">
            <h3 class="text-xl font-black uppercase tracking-tight group-hover:text-brand-cyan transition-colors leading-tight">{{ project.title }}</h3>
            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">{{ project.role }}</p>
            <p class="text-gray-400 font-light leading-relaxed text-sm line-clamp-3">{{ project.description }}</p>
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-4">
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.tech.slice(0, 3)" :key="tech"
                  class="px-2 py-1 text-[8px] font-black uppercase text-gray-500 bg-white/5 rounded-md border border-white/5">
              {{ tech }}
            </span>
          </div>

          <a v-if="project.link" :href="project.link" target="_blank" 
             class="btn-primary w-full py-3 bg-brand-cyan text-[#020617] font-black uppercase tracking-[0.2em] text-[9px] rounded-xl flex items-center justify-center gap-2">
             Demo en Vivo
             <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center pt-8">
      <RouterLink to="/" class="btn-primary flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
        <svg class="w-4 h-4 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="text-xs font-black uppercase tracking-[0.2em]">Inicio</span>
      </RouterLink>
    </div>
  </div>
</template>
