const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "loginPage", component: () => import("src/pages/loginPage.vue") },
      { path: "signupPage", component: () => import("pages/signupPage.vue") },

      {
        path: "registerPage",
        component: () => import("src/pages/registerPage.vue"),
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
