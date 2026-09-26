<template>
  <div class="home-view">
    <section class="home-hero animate-fade-in" aria-labelledby="home-title">
      <div class="home-copy">
        <p class="home-eyebrow">
          <span class="status-dot" aria-hidden="true"></span>
          Jira Service Management · Ciberseguridad · IA
        </p>

        <h1 id="home-title" class="home-title">
          Jose Manuel
          <span>Campos García</span>
        </h1>

        <p class="home-role">
          Tecnología útil para operaciones seguras y eficientes.
        </p>
        <p class="home-summary">
          Administro Jira Service Management en entornos de ciberseguridad y
          construyo soluciones frontend. Integro IA y automatización para
          mejorar procesos IT y experiencias digitales.
        </p>

        <div class="home-actions">
          <RouterLink to="/projects" class="home-action-primary">
            Ver proyectos
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </RouterLink>
          <RouterLink to="/about" class="home-action-secondary">
            Conocer mi perfil
          </RouterLink>
        </div>

        <p class="home-current-role">
          <span>Actualmente</span>
          Telefónica Tech · Administración de JSM
        </p>
      </div>

      <figure class="home-portrait">
        <img
          src="/profile.jpg"
          alt="Jose Manuel Campos García, profesional de tecnología"
          fetchpriority="high" />
        <figcaption>
          <span>Operaciones · Seguridad · Desarrollo</span>
        </figcaption>
      </figure>
    </section>

    <section class="home-capabilities" aria-label="Áreas de especialidad">
      <article class="capability-item">
        <span class="capability-index">01</span>
        <div>
          <h2>Administración ITSM</h2>
          <p>
            Jira Service Management, workflows y automatización de procesos.
          </p>
        </div>
      </article>
      <article class="capability-item">
        <span class="capability-index">02</span>
        <div>
          <h2>Ciberseguridad operativa</h2>
          <p>
            Soporte a equipos de seguridad, trazabilidad y gestión de
            incidencias.
          </p>
        </div>
      </article>
      <article class="capability-item">
        <span class="capability-index">03</span>
        <div>
          <h2>Desarrollo e IA</h2>
          <p>Vue, TypeScript e IA aplicada a flujos de trabajo tecnológicos.</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
