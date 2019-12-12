import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chat from "@/components/Chat";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if(to.params.name) {
        next()
      } else {
        next({ name: 'Welcome' })
      }
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
