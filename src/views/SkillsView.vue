<script setup lang="ts">
type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    name: "Arquitectura Frontend",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    items: [
      "HTML5 Semántico",
      "CSS3 Avanzado",
      "JavaScript ES6+",
      "Estrategia DOM",
    ],
  },
  {
    name: "Ecosistema Vue.js",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    items: [
      "Composition API",
      "Gestión de Estado",
      "Router Dinámico",
      "Vite & Build Tools",
    ],
  },
  {
    name: "Ingeniería Visual",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.3a1 1 0 00-.7.3l-2 2a3 3 0 01-4.2 0l-2-2a1 1 0 00-.7-.3H7",
    items: [
      "Tailwind CSS",
      "Sistemas de Diseño",
      "UX Responsivo",
      "Micro-animaciones",
    ],
  },
  {
    name: "Manejo de IA (GenAI)",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    items: [
      "Prompt Engineering",
      "IA en Desarrollo",
      "Optimización Flujos",
      "Integración de LLMs",
    ],
  },
  {
    name: "Herramientas Modernas",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    items: [
      "TypeScript",
      "Arquitectura Git",
      "Orquestación API",
      "Flujo Ágil",
    ],
  },
];
</script>

<template>
  <div class="space-y-12 py-4">
    <header class="max-w-3xl space-y-4">
      <div class="inline-flex items-center px-4 py-1 glass border border-white/20 rounded-full shadow-lg">
        <span class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">Tech Stack</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
        Habilidades <span class="text-brand-cyan">Técnicas</span>
      </h2>
    </header>

    <!-- Grid optimizado para reducir scroll -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in skills" :key="category.name" 
           class="glass-card p-8 rounded-[35px] group relative overflow-hidden flex flex-col justify-between border border-white/5 hover:border-brand-cyan/30 transition-all">
        
        <div class="relative z-10">
          <div class="flex items-center gap-5 mb-8">
            <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-all">
              <svg class="w-7 h-7 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors leading-tight">{{ category.name }}</h3>
          </div>

          <div class="grid grid-cols-1 gap-3">
            <div v-for="item in category.items" :key="item"
                 class="flex items-center gap-3 group/item">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-cyan/40 group-hover/item:bg-brand-cyan transition-all"></div>
              <span class="text-sm text-gray-400 group-hover/item:text-white transition-colors font-light">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Decoración trasera sutil -->
        <svg class="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="category.icon"></path>
        </svg>
      </div>
    </div>

    <div class="flex flex-col items-center gap-8 pt-12">
      <div class="flex flex-wrap justify-center gap-6">
        <RouterLink to="/projects" 
          class="btn-primary px-10 py-4 bg-white text-black font-black rounded-2xl transition-all uppercase tracking-widest text-[10px] shadow-lg">
          Ver Proyectos
        </RouterLink>
        <RouterLink to="/certifications" 
          class="btn-primary px-10 py-4 glass border border-white/20 text-white font-black rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-[10px]">
          Ver Certificaciones
        </RouterLink>
      </div>
    </div>
  </div>
</template>
