import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SkillsView from "./views/SkillsView.vue";
import AboutView from "./views/AboutView.vue";
import CertificationsView from "./views/CertificationsView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/projects", name: "projects", component: ProjectsView },
  { path: "/skills", name: "skills", component: SkillsView },
  {
    path: "/certifications",
    name: "certifications",
    component: CertificationsView,
  },
  { path: "/about", name: "about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
