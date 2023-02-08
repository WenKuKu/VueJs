import { createRouter, createWebHashHistory } from "vue-router";
import Dashbord from "../path/Dashboard/index.vue";
import Courses from "../path/Courses/index.vue";
import Student from "../path/Student/index.vue";

const routes = [
  { path: "/", component: Dashbord },
  { path: "/Courses", component: Courses },
  { path: "/Student", component: Student },
];

const router =createRouter({

  history:createWebHashHistory(),
  routes,
});

export default router;