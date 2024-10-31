const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "loginPage", component: () => import("src/pages/loginPage.vue") },
      { path: "signupPage", component: () => import("pages/signupPage.vue") },
      {
        path: "userDashboard",
        component: () => import("src/pages/userDashboard.vue"),
      },
      {
        path: "adminAddCourse",
        component: () => import("pages/adminAddCourse.vue"),
      },

      {
        path: "registerPage",
        component: () => import("src/pages/registerPage.vue"),
      },
      {
        path: "testPage",
        component: () => import("src/pages/testPage.vue"),
      },
      {
        path: "nicePage",
        component: () => import("src/pages/nicePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
