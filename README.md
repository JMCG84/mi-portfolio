# Portfolio Frontend (Vue 3 + TypeScript + Tailwind)

Mini portfolio orientado a **trabajo de frontend**: SPA con Vue 3, TypeScript, Vite y Tailwind CSS, con vistas de Inicio, Proyectos, Skills y Sobre mí.

## Stack

- **Framework**: Vue 3
- **Lenguaje**: TypeScript
- **Bundler/Dev server**: Vite
- **Estilos**: Tailwind CSS (v4)
- **Enrutado**: Vue Router

## Estructura básica

- `src/main.ts`: punto de entrada, monta la app Vue y el router.
- `src/App.vue`: layout principal tipo dashboard (sidebar / topbar + zona de contenido).
- `src/router.ts`: definición de las rutas (`/`, `/projects`, `/skills`, `/about`).
- `src/views/HomeView.vue`: página de inicio con explicación del proyecto.
- `src/views/ProjectsView.vue`: lista de proyectos frontend (datos simulados, se pueden sustituir por proyectos reales).
- `src/views/SkillsView.vue`: categorías de skills de frontend.
- `src/views/AboutView.vue`: texto sobre ti (editable fácilmente).
- `src/style.css`: entrada de estilos con Tailwind.

## Cómo ejecutar el proyecto en local

```bash
npm install
npm run dev
```

Después abre en el navegador la URL que muestre Vite (por defecto suele ser `http://localhost:5173` o `http://localhost:5175` si el puerto está ocupado).

## Scripts disponibles

- `npm run dev`: arranca el servidor de desarrollo.
- `npm run build`: genera el build de producción en la carpeta `dist`.
- `npm run preview`: sirve el build de producción para probarlo en local.

## Personalización rápida

- **Proyectos**: editar `src/views/ProjectsView.vue` y cambiar el array de proyectos por los tuyos (nombre, descripción, tecnologías, enlaces a GitHub, etc.).
- **Skills**: editar `src/views/SkillsView.vue` para reflejar tus conocimientos reales.
- **Sobre mí**: editar `src/views/AboutView.vue` con tu historia y objetivos como frontend developer.
- **Estilos**: puedes ajustar clases de Tailwind directamente en los templates para cambiar layout/colores según tu gusto.

## Cómo subirlo a GitHub

Desde la carpeta `portfolio-frontend`:

```bash
git init
git add .
git commit -m "feat: portfolio frontend con Vue 3, TS y Tailwind"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Solo tienes que sustituir `TU_USUARIO` y `TU_REPO` por el nombre de tu usuario de GitHub y el nombre del repositorio que crees allí.

