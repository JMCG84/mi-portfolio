<template>
  <div class="h-[calc(100vh-280px)] min-h-[450px] flex flex-col items-center justify-center overflow-hidden">
    <!-- Hero Section Ultra-Compacto - Diseñado para Carga Instantánea -->
    <section class="max-w-4xl w-full text-center space-y-4 md:space-y-6 animate-fade-in px-4">
      <div class="flex flex-col items-center space-y-4 md:space-y-6">
        
        <!-- Badge de Disponibilidad Mini -->
        <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 glass border border-white/20 rounded-full shadow-lg">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan shadow-[0_0_8px_#06b6d4]"></span>
          </span>
          <span class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">Disponible para proyectos</span>
        </div>
        
        <!-- Bio Principal Central -->
        <div class="space-y-3 md:space-y-4">
          <h1 class="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter">
            Frontend <span class="text-brand-cyan">Developer</span> <br class="hidden md:block" />
            <span class="text-brand-violet">Vue 3</span> & <span class="text-white">TypeScript</span>
          </h1>
          <p class="text-sm md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
            Especializado en interfaces <span class="text-white font-bold">pixel-perfect</span> y arquitecturas escalables de alto rendimiento.
          </p>
        </div>

        <!-- Botones de Acción -->
        <div class="flex flex-row gap-4 justify-center pt-2">
          <RouterLink to="/projects" 
            class="btn-primary group px-8 md:px-10 py-3.5 md:py-4 bg-white text-black font-black rounded-2xl transition-all uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 shadow-xl">
            Proyectos
          </RouterLink>
          <RouterLink to="/about" 
            class="btn-primary px-8 md:px-10 py-3.5 md:py-4 glass border border-white/20 text-white font-black rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-[10px] md:text-xs">
            Sobre mí
          </RouterLink>
        </div>

        <!-- Tech Tags Discretos -->
        <div class="flex flex-wrap gap-2 pt-4 md:pt-6 justify-center opacity-40">
          <div v-for="tech in ['Vite', 'Tailwind', 'Pinia', 'Git', 'GenAI']" :key="tech"
               class="px-2.5 py-1 text-[7px] md:text-[8px] font-black uppercase tracking-[0.15em] text-gray-300 border border-white/10 rounded-full glass">
            {{ tech }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Vista optimizada para 0 scroll y máxima velocidad de lectura
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
