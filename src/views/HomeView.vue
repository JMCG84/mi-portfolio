<script setup lang="ts">
const highlightText =
  'Este portfolio está construido con Vue 3, TypeScript, Vite y Tailwind CSS.'
</script>

<template>
  <div class="space-y-6">
    <section class="space-y-3">
      <p class="text-xs uppercase tracking-[0.3em] text-sky-400/80">
        Frontend Developer
      </p>
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
        Portfolio tipo dashboard para mostrar trabajo de frontend
      </h2>
      <p class="text-sm text-slate-300 max-w-2xl">
        {{ highlightText }}
        La idea es demostrar capacidad para estructurar una SPA con routing, componentes,
        layouts reutilizables y un diseño limpio.
      </p>
    </section>

    <section
      class="grid gap-4 md:grid-cols-3 text-sm"
      aria-label="Resumen de lo que se muestra en este proyecto"
    >
      <article class="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
        <h3 class="font-medium text-slate-50">Estructura de SPA</h3>
        <p class="text-slate-400">
          Navegación entre vistas (Inicio, Proyectos, Skills, Sobre mí) usando Vue Router,
          con layout consistente.
        </p>
      </article>

      <article class="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
        <h3 class="font-medium text-slate-50">Maquetación con Tailwind</h3>
        <p class="text-slate-400">
          Uso de flexbox, grid, tipografía y estados hover para construir una interfaz
          moderna y clara.
        </p>
      </article>

      <article class="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
        <h3 class="font-medium text-slate-50">Datos simulados</h3>
        <p class="text-slate-400">
          Listados de proyectos y skills a partir de datos tipados en TypeScript, como si
          vinieran de una API.
        </p>
      </article>
    </section>
  </div>
</template>

