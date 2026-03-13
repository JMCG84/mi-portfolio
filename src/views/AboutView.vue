<template>
  <div class="space-y-12">
    <header class="text-center space-y-4">
      <div
        class="inline-block px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium">
        Perfil Profesional
      </div>
      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
        Sobre <span class="text-blue-400">Mí</span>
      </h2>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Biography -->
      <section class="lg:col-span-7 space-y-6">
        <article class="bg-gray-800/50 backdrop-blur-lg rounded-[32px] p-8 border border-gray-600/50 hover:bg-blue-900/30 transition-all duration-500 group relative overflow-hidden">
          <div class="relative z-10 space-y-6">
            <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Soy <span class="text-blue-400">Frontend Developer</span> especializado en Vue 3, TypeScript y JavaScript ES6+. Me formé como Técnico Superior en Desarrollo de Aplicaciones Web y adquirí experiencia real en <span class="text-white font-bold">ALTEN Spain</span>, donde desarrollé interfaces escalables, componentes reutilizables y lógica de negocio con tipado estricto en entorno de consultoría tecnológica.
            </p>
            <div class="space-y-4 text-gray-400 leading-relaxed text-base italic">
              <p>
                Antes de dedicarme al desarrollo pasé 16 años como fisioterapeuta. Esa etapa me dio algo que no se aprende en ningún curso: <span class="text-gray-300">escucha activa, análisis de necesidades reales del usuario y capacidad de trabajar bajo presión</span> manteniendo la calidad. Hoy lo aplico directamente a cómo construyo interfaces y colaboro en equipo.
              </p>
              <p>
                Integro <span class="text-blue-300 font-medium">IA generativa</span> en mi flujo de trabajo diario — generación de componentes, detección de bugs, documentación técnica — y sigo formándome de forma continua. Busco un equipo donde pueda aportar desde el primer día y seguir creciendo.
              </p>
            </div>
          </div>
          <!-- Brillo azul hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </article>

        <!-- Botones de Acción CV/Proyectos -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/CV_Jose_Manuel_Campos_Garcia_Frontend_Developer.pdf" target="_blank"
             class="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold uppercase tracking-widest text-xs text-center hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105 shadow-lg">
            Descargar CV
          </a>
          <RouterLink to="/projects" 
             class="flex-1 px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 rounded-2xl font-bold uppercase tracking-widest text-xs text-center hover:bg-blue-500/10 transition-all transform hover:scale-105">
            Mi Portfolio
          </RouterLink>
        </div>
      </section>

      <!-- Contact & Info Panels -->
      <aside class="lg:col-span-5 space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <!-- Compromiso -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 text-center hover:bg-blue-900/30 transition-all duration-500 group relative overflow-hidden transform hover:scale-105">
            <p class="text-4xl font-extrabold text-blue-400 mb-1">100%</p>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500">Compromiso Profesional</p>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <!-- Ubicación -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 text-center hover:bg-blue-900/30 transition-all duration-500 group relative overflow-hidden transform hover:scale-105">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Ubicación Actual</p>
            <div class="flex items-center justify-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
              <p class="text-xl font-bold text-white uppercase tracking-tight">España</p>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <!-- Social Connections -->
        <div class="grid grid-cols-3 gap-4">
          <!-- Email -->
          <a href="mailto:jmcg84@icloud.com" 
             class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 flex flex-col items-center gap-3 hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-500 group transform hover:scale-105 relative overflow-hidden">
            <div class="p-3 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-gray-500">Email</span>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/josemanuelcamposgarcia" target="_blank"
             class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 flex flex-col items-center gap-3 hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-500 group transform hover:scale-105 relative overflow-hidden">
            <div class="p-3 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-gray-500">LinkedIn</span>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/JMCG84" target="_blank"
             class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-600/50 flex flex-col items-center gap-3 hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-500 group transform hover:scale-105 relative overflow-hidden">
            <div class="p-3 rounded-xl bg-gray-600/20 text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-gray-500">GitHub</span>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>
