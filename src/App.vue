<template>
  <div class="portfolio-shell min-h-screen overflow-x-hidden">
    <div class="portfolio-background" aria-hidden="true"></div>

    <header class="site-header relative z-10">
      <div class="site-header-inner">
        <RouterLink
          to="/"
          class="site-brand"
          aria-label="Jose Manuel Campos, inicio">
          <img src="/profile.jpg" alt="" class="site-brand-photo" />
          <span class="site-brand-name">Jose Manuel Campos</span>
        </RouterLink>

        <nav class="site-nav hidden md:flex" aria-label="Navegación principal">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="site-nav-link">
            {{ item.label }}
          </RouterLink>
        </nav>

        <button
          class="menu-toggle md:hidden"
          type="button"
          :aria-label="menuOpen ? 'Cerrar navegación' : 'Abrir navegación'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          @click="toggleMenu">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              :d="
                menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'
              " />
          </svg>
        </button>
      </div>
    </header>

    <div
      v-if="menuOpen"
      id="mobile-navigation"
      class="mobile-nav relative z-10 md:hidden">
      <nav class="mobile-nav-list" aria-label="Navegación móvil">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="site-nav-link"
          @click="toggleMenu">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>

    <main class="site-main relative z-10">
      <RouterView />
    </main>

    <footer class="site-footer relative z-10">
      <div class="site-footer-inner">
        <span>Jira Service Management · Ciberseguridad · IA</span>
        <span>Jose Manuel Campos García</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Experiencia", to: "/experience" },
  { label: "Proyectos", to: "/projects" },
  { label: "Certificaciones", to: "/certifications" },
  { label: "Skills", to: "/skills" },
  { label: "Sobre mí", to: "/about" },
];

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
