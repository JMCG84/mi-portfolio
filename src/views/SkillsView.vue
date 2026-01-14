<script setup lang="ts">
type SkillCategory = {
  name: string
  items: string[]
}

const skills: SkillCategory[] = [
  {
    name: 'Core frontend',
    items: ['HTML semántico', 'CSS moderno (Flexbox, Grid)', 'JavaScript ESNext'],
  },
  {
    name: 'Vue & ecosistema',
    items: ['Vue 3 (Composition API)', 'Vue Router', 'State management básico'],
  },
  {
    name: 'Estilos & UI',
    items: ['Tailwind CSS', 'Diseño responsive', 'Componentes reutilizables'],
  },
  {
    name: 'Tooling',
    items: ['Vite', 'TypeScript básico', 'Git / GitHub'],
  },
]
</script>

<template>
  <div class="space-y-5">
    <header class="space-y-2">
      <h2 class="text-xl md:text-2xl font-semibold tracking-tight">Skills de frontend</h2>
      <p class="text-sm text-slate-300 max-w-2xl">
        Resumen de tecnologías y conceptos con los que trabajas en el día a día en el lado de
        frontend.
      </p>
    </header>

    <section class="grid gap-4 md:grid-cols-2" aria-label="Categorías de skills">
      <article
        v-for="category in skills"
        :key="category.name"
        class="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3"
      >
        <h3 class="font-medium text-slate-50">
          {{ category.name }}
        </h3>
        <ul class="space-y-1.5 text-sm text-slate-300 list-disc list-inside">
          <li v-for="item in category.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

