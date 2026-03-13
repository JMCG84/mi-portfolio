<template>
  <div class="space-y-12 py-4">
    <header class="max-w-4xl space-y-4">
      <div class="inline-flex items-center px-4 py-1 glass border border-white/20 rounded-full shadow-lg">
        <span class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-cyan">Perfil Profesional</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
        Sobre <span class="text-brand-cyan">Mí</span>
      </h2>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Biography -->
      <section class="lg:col-span-7 space-y-8">
        <div class="glass-card p-10 rounded-[35px] space-y-6">
          <p class="text-xl text-gray-300 leading-relaxed font-light">
            Soy un desarrollador apasionado por crear interfaces que no solo sean funcionales, sino que también cuenten una historia visual. Mi enfoque se centra en la <span class="text-white font-bold underline decoration-brand-cyan decoration-4">experiencia del usuario</span> y la eficiencia técnica.
          </p>
          <div class="space-y-4 text-gray-400 leading-relaxed font-light text-base">
            <p>
              Con una sólida base en el ecosistema de Vue.js y TypeScript, disfruto enfrentándome a retos complejos que requieren soluciones creativas y escalables. Mi objetivo es siempre elevar el estándar de calidad en cada proyecto en el que participo.
            </p>
            <p>
              Me considero un aprendiz constante, explorando siempre las nuevas fronteras del desarrollo frontend, desde micro-animaciones fluidas hasta la integración de inteligencia artificial para optimizar flujos de trabajo.
            </p>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="flex flex-wrap gap-4">
          <a href="/CV_Jose_Manuel_Campos_Garcia_Frontend_Developer.pdf" target="_blank"
             class="btn-primary flex-1 min-w-[160px] px-8 py-4 bg-white text-black text-center font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Curriculum
          </a>
          <RouterLink to="/projects" class="btn-primary flex-1 min-w-[160px] px-8 py-4 glass border border-white/20 text-white text-center font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            Proyectos
          </RouterLink>
        </div>
      </section>

      <!-- Contact & Info -->
      <aside class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        <!-- Compromiso Centrado -->
        <div class="glass-card p-6 rounded-[30px] text-center group flex flex-col justify-center">
          <p class="text-4xl font-black text-brand-cyan mb-1 group-hover:scale-110 transition-transform">100%</p>
          <p class="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Compromiso</p>
        </div>

        <!-- Ubicación Centrada -->
        <div class="glass-card p-6 rounded-[30px] border border-white/5 text-center flex flex-col justify-center gap-2">
          <p class="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500 text-center">Ubicación</p>
          <div class="flex items-center justify-center gap-3">
            <div class="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
            <p class="text-xl font-black text-white uppercase tracking-tight">España</p>
          </div>
        </div>

        <!-- Redes Grid Con Enlace Email Corregido -->
        <div class="grid grid-cols-2 gap-4 sm:col-span-2 lg:col-span-1">
          <a href="mailto:jmcg84@icloud.com" 
             class="glass-card p-6 rounded-[30px] flex flex-col items-center gap-3 hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 group transition-all cursor-pointer relative z-50">
            <div class="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-all">
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="text-[8px] font-black uppercase tracking-widest text-gray-400 pointer-events-none">Email</span>
          </a>
          <a href="https://github.com/JMCG84" target="_blank"
             class="glass-card p-6 rounded-[30px] flex flex-col items-center gap-3 hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 group transition-all cursor-pointer relative z-50">
            <div class="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <span class="text-[8px] font-black uppercase tracking-widest text-gray-400">GitHub</span>
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>
