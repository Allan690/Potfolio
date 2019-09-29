import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import AboutPage from "@/components/presentational/AboutPage";
import ResumePage from "@/components/presentational/ResumePage";
import ProjectsPage from "@/components/presentational/ProjectsPage";
import ContactsPage from "@/components/presentational/ContactsPage";
import HomePage from "@/components/presentational/HomePage";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: '/about', name: 'about', component: AboutPage, props: true },
  { path: '/resume', name: 'resume', component: ResumePage, props: true },
  { path: '/projects', name: 'projects', component: ProjectsPage, props: true },
  { path: '/contacts', name: 'contact', component: ContactsPage, props: true },
  { path: '/home', name: 'home', component: HomePage, props: true  },
  { path: '/', name: 'home', component: HomePage, props: true  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
