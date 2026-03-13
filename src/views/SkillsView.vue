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
  <div class="space-y-12">
    <header class="text-center space-y-4">
      <div class="inline-block px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium">
        Tech Stack
      </div>
      <h2 class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
        Habilidades Técnicas
      </h2>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto">
        Especializado en el desarrollo de interfaces modernas. Mi enfoque principal es crear aplicaciones rápidas, escalables y visualmente atractivas.
      </p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <article
        v-for="category in skills"
        :key="category.name"
        class="group bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
      >
        <div class="flex items-center space-x-4 mb-6">
          <div class="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="category.icon"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors">
            {{ category.name }}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <span
            v-for="item in category.items"
            :key="item"
            class="px-4 py-2 rounded-full bg-blue-800/50 text-blue-300 text-sm font-medium border border-blue-600/50 hover:bg-blue-700/50 transition-all transform hover:scale-105"
          >
            {{ item }}
          </span>
        </div>

        <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </article>
    </section>

    <footer class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 text-center">
      <p class="text-lg text-gray-400 mb-6">
        ¿Interesado en ver cómo aplico estas herramientas?
        <span class="text-gray-200 font-bold">Echa un vistazo a mis proyectos o certificaciones.</span>
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/projects"
          class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105"
        >
          Ver Proyectos
        </RouterLink>
        <RouterLink
          to="/certifications"
          class="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 rounded-full font-bold hover:bg-blue-500 hover:text-black transition-all transform hover:scale-105"
        >
          Ver Certificaciones
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
