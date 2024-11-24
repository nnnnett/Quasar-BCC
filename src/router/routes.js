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
        component: () => import("pages/userPage/userDashboard.vue"),
      },
      {
        path: "userCourse",
        component: () => import("pages/userPage/userCourse.vue"),
      },
      {
        path: "userProgress",
        component: () => import("pages/userPage/userProgress.vue"),
      },
      {
        path: "userSettings",
        component: () => import("pages/userPage/userSettings.vue"),
      },
      {
        path: "cssCourse/:courseId",
        component: () => import("pages/userPage/cssCourse.vue"),
      },
      {
        path: "activityPage/:activityId",
        component: () => import("pages/userPage/activityPage.vue"),
      },
      {
        path: "instructorRegisterPage",
        component: () =>
          import("src/pages/adminPage/instructorRegisterPage.vue"),
      },
      {
        path: "adminAddCourse",
        component: () => import("src/pages/adminPage/adminAddCourse.vue"),
      },
      {
        path: "adminCourseManagement",
        component: () =>
          import("src/pages/adminPage/adminCourseManagement.vue"),
      },
      {
        path: "adminUserManagement",
        component: () => import("src/pages/adminPage/adminUserManagement.vue"),
      },
      {
        path: "adminAttendanceManagement",
        component: () =>
          import("src/pages/adminPage/adminAttendanceManagement.vue"),
      },
      {
        path: "adminDashboard",
        component: () => import("src/pages/adminPage/adminDashboard.vue"),
      },
      // instructor
      {
        path: "instructorCoursePage",
        component: () =>
          import("src/pages/instructorPage/instructorCoursePage.vue"),
      },
      {
        path: "instructorDashboard",
        component: () =>
          import("src/pages/instructorPage/instructorDashboard.vue"),
      },
      {
        path: "instructorCourse",
        component: () =>
          import("src/pages/instructorPage/instructorCourse.vue"),
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
      {
        path: "qrAttendancePage",
        component: () => import("src/pages/qrAttendancePage.vue"),
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
