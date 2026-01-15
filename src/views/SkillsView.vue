<script setup lang="ts">
type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    name: "Core Frontend",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // Icono de código </>
    items: [
      "HTML5 Semántico",
      "CSS3 Moderno",
      "JavaScript ES6+",
      "DOM Manipulation",
    ],
  },
  {
    name: "Vue Ecosistema",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", // Icono capas
    items: [
      "Vue 3 (Composition API)",
      "Vue Router",
      "Pinia / State Management",
      "Vite",
    ],
  },
  {
    name: "Estilos & UI",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", // Icono diseño
    items: [
      "Tailwind CSS",
      "Diseño Responsive",
      "Componentes Modulares",
      "Animaciones CSS",
    ],
  },
  {
    name: "Tooling & Backend",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", // Icono chip/herramientas
    items: [
      "TypeScript",
      "Git / GitHub",
      "PHP / MySQL",
      "Consumo de APIs (Axios)",
    ],
  },
];
</script>

<template>
  <div class="space-y-8">
    <header class="space-y-3">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
        Tech Stack
      </div>
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white">
        Habilidades Técnicas
      </h2>
      <p class="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
        Especializado en el desarrollo de interfaces modernas. Mi enfoque
        principal es crear aplicaciones rápidas, escalables y visualmente
        atractivas utilizando las últimas tecnologías.
      </p>
    </header>

    <section
      class="grid gap-6 sm:grid-cols-2"
      aria-label="Categorías de skills">
      <article
        v-for="category in skills"
        :key="category.name"
        class="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-500 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
        <div
          class="mb-4 inline-flex p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/50 group-hover:text-sky-400 transition-colors duration-500">
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
              :d="category.icon" />
          </svg>
        </div>

        <h3
          class="text-lg font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
          {{ category.name }}
        </h3>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in category.items"
            :key="item"
            class="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-400 text-xs border border-slate-800 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-200">
            {{ item }}
          </span>
        </div>

        <div
          class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sky-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </article>
    </section>

    <footer
      class="rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-6">
      <div class="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p class="text-sm text-slate-400 text-center md:text-left">
          ¿Interesado en ver cómo aplico estas herramientas?
          <span class="text-white font-medium"
            >Echa un vistazo a mis proyectos.</span
          >
        </p>
        <RouterLink
          to="/projects"
          class="px-5 py-2 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-sky-400 transition-colors">
          Ver Proyectos
        </RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Transiciones suaves para los badges */
article span:hover {
  border-color: rgba(14, 165, 233, 0.5);
  color: #38bdf8;
  transform: scale(1.05);
}
</style>
