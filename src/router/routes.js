const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "loginPage", component: () => import("src/pages/loginPage.vue") },
      { path: "signupPage", component: () => import("pages/signupPage.vue") },
      {
        path: "dashboard",
        component: () => import("src/pages/dashboardPage.vue"),
      },
      {
        path: "course",
        component: () => import("src/pages/userCourse.vue"),
      },
      {
        path: "userProgress",
        component: () => import("src/pages/userProgress.vue"),
      },
      {
        path: "userSettings",
        component: () => import("src/pages/userSettings.vue"),
      },
      {
        path: "cssCourse/:courseId",
        component: () => import("src/pages/coursePage.vue"),
      },
      {
        path: "activityPage/:courseId/:activityId",
        component: () => import("src/pages/activityPage.vue"),
      },
      {
        path: "instructorRegisterPage",
        component: () => import("src/pages/instructorRegisterPage.vue"),
      },
      {
        path: "adminAddCourse",
        component: () => import("src/pages/adminAddCourse.vue"),
      },
      {
        path: "adminCourseManagement",
        component: () => import("src/pages/adminCourseManagement.vue"),
      },
      {
        path: "adminUserManagement",
        component: () => import("src/pages/adminPage/adminUserManagement.vue"),
      },
      {
        path: "attendanceManagement",
        component: () => import("src/pages/attendanceManagement.vue"),
      },
      {
        path: "adminDashboard",
        component: () => import("src/pages/adminDashboard.vue"),
      },
      {
        path: "adminConfigure",
        component: () => import("src/pages/adminConfigure.vue"),
      },
      {
        path: "adminReports",
        component: () => import("src/pages/adminReports.vue"),
      },
      // instructor
      {
        path: "instructorCoursePage",
        component: () => import("src/pages/instructorCoursePage.vue"),
      },
      {
        path: "instructorDashboard",
        component: () => import("src/pages/instructorDashboard.vue"),
      },
      {
        path: "instructorCourse",
        component: () => import("src/pages/instructorCourse.vue"),
      },
      {
        path: "instructorAddActivity/:courseId",
        component: () => import("src/pages/instructorAddActivity.vue"),
      },
      {
        path: "editActivity",
        component: () => import("src/pages/editActivity.vue"),
      },
      {
        path: "registerPage/:code",
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
        path: "3dSample",
        component: () => import("src/pages/3dSample.vue"),
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
