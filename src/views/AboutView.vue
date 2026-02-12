<template>
  <div class="space-y-8">
    <header class="space-y-3">
      <div
        class="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
        Mi Trayectoria
      </div>
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white">
        Sobre mí
      </h2>
      <p class="text-sm md:text-base text-sky-400 font-semibold italic">
        Frontend Developer | Especialista en Vue.js & TypeScript
      </p>
    </header>

    <section
      class="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-5 text-sm md:text-base text-slate-300 leading-relaxed transition-all duration-500 hover:border-sky-500/30 hover:bg-slate-900/60 shadow-xl">
      <p>
        Mi camino hacia el desarrollo de software no ha sido el convencional,
        pero sí el más apasionante. Vengo de años de experiencia en el
        <strong class="text-white">sector sanitario</strong>, una etapa que
        forjó en mí una base inquebrantable de
        <strong class="text-sky-400"
          >disciplina, responsabilidad y compromiso</strong
        >
        con el trabajo bien realizado.
      </p>

      <p>
        Decidí reconducir mi carrera profesional hacia el desarrollo Frontend,
        encontrando en el código el reto constante y la creatividad que buscaba.
        Tras completar mi formación técnica, tuve la oportunidad de realizar mis
        prácticas profesionales en el departamento de Frontend de
        <span
          class="text-white font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10"
          >ALTEN</span
        >.
      </p>

      <p>
        Durante mi etapa en ALTEN, me especialicé en el ecosistema de
        <strong class="text-white">Vue.js 3, TypeScript y Tailwind CSS</strong>,
        participando en el desarrollo de interfaces modernas y componentes
        escalables. Mi enfoque se centra en escribir código limpio, crear
        experiencias de usuario fluidas y colaborar estrechamente con el equipo.
      </p>

      <p class="text-slate-200">
        Actualmente, busco una oportunidad para seguir creciendo como
        desarrollador, aportando mi madurez profesional, mi capacidad de
        aprendizaje rápido y mi actitud proactiva a un equipo dinámico.
      </p>

      <div
        class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sky-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </section>

    <div class="flex flex-wrap gap-4 pt-4">
      <a
        href="/CV_José_Manuel_Campos_García.pdf"
        target="_blank"
        class="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition-all font-bold shadow-lg shadow-sky-500/20 active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Descargar CV (PDF)
      </a>

      <a
        href="https://www.linkedin.com/in/josemanuelcamposgarcia"
        target="_blank"
        class="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700 font-bold active:scale-95">
        <span>LinkedIn</span>
      </a>

      <a
        href="mailto:jmcg84@icloud.com"
        class="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700 font-bold active:scale-95">
        <span>Email</span>
      </a>
    </div>
    <footer class="mt-6">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700 font-bold">
        ← Volver al inicio
      </RouterLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No se requiere lógica adicional para esta vista
</script>
