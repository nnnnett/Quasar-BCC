<template>
  <q-page>
    <!-- components -->
    <div class="navbar-Profile">
      <div class="q-pb-xl">
        <UserNavBar />
      </div>
      <q-space />
      <div class="q-pt-lg q-mr-lg">
        <notifProfile />
      </div>
    </div>
    <div class="main-container q-ml-lg q-pb-lg">
      <!-- Mindstorm Container -->
      <div class="mindstorm-container q-pl-xl">
        <q-card-section class="text-h6 q-pa-none"> Mindstorm </q-card-section>
        <q-btn
          class=" "
          label="view"
          no-caps
          type="submit"
          color="accent"
          style="background-color: #925fe2; width: 100px"
          rounded
        />
      </div>
      <!-- active/completed courses -->
      <div class="activeCompleteCourse-container">
        <!-- active -->
        <div class="activeCourse q-mt-md">
          <q-item-section avatar class="q-pl-lg">
            <q-icon name="library_books" style="color: #925fe2" />
          </q-item-section>
          <div class="q-pl-none">
            <q-card-section class="q-pb-none q-pl-none"> 6 </q-card-section>
            <q-card-section class="q-pt-none q-pl-none">
              Active Courses
            </q-card-section>
          </div>
        </div>
        <!-- complete -->
        <div class="completedCourse q-mt-md q-ml-md">
          <q-item-section avatar class="q-pl-lg">
            <q-icon name="library_books" style="color: #5ce1e6" />
          </q-item-section>
          <div class="q-pl-none">
            <q-card-section class="q-pb-none q-pl-none"> 10 </q-card-section>
            <q-card-section class="q-pt-none q-pl-none">
              Completed Courses
            </q-card-section>
          </div>
        </div>
      </div>
      <!-- Active Courses Container -->
      <div class="activeCourse-container q-mt-md">
        <div class="flex activeCourseAndLink">
          <q-card-section class="q-pl-none text-h6">
            Active Courses
          </q-card-section>
          <q-space />
          <RouterLink
            to="#"
            class="q-pt-md viewAllactiveCourse-link text-subtitle1"
            style="text-decoration: none"
          >
            View All
          </RouterLink>
        </div>
        <!-- different active courses -->
        <div class="diffCourseActive">
          <!-- first active //digitalLiteracy-->
          <div
            class="digitalLiteracyContainer q-mr-none q-pt-md activeCourseList"
          >
            <div
              class="q-mx-md"
              style="
                background: linear-gradient(180deg, #fff0e1 0%, #ff9a35 100%);
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 14px;
              "
            >
              <!-- icon container -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="54px"
                viewBox="0 -960 960 960"
                width="54px"
                fill="white"
                class="computerIcon"
              >
                <path
                  d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"
                />
              </svg>
            </div>
            <q-card-section class="q-pb-none" style="font-size: 1em">
              Digital Literacy Digital Literacy
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              7 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm" flat />
            </div>
          </div>
          <!-- Second Active //CSS-->
          <div class="cssContainer q-mr-none q-pt-md activeCourseList">
            <div
              class="q-mx-md"
              style="
                background: linear-gradient(180deg, #ffe3fc 0%, #e08dd7 100%);
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 14px;
              "
            >
              <!-- icon container -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="54px"
                viewBox="0 -960 960 960"
                width="54px"
                fill="white"
              >
                <path
                  d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Zm280-600h160v-120H400v120ZM200-160h160v-120H200v120Zm400 0h160v-120H600v120ZM480-680ZM360-280Zm240 0Z"
                />
              </svg>
            </div>
            <q-card-section
              class="q-pb-none text-subtitle1"
              style="font-size: 1em"
            >
              CSS
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              5 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm" flat />
            </div>
          </div>
          <!-- Third Active -->
          <div class="animationsContainer q-mr-none q-pt-md activeCourseList">
            <div
              class="q-mx-md"
              style="
                background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 14px;
              "
            >
              <!-- icon container -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#FFFFFF"
              >
                <path
                  d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                />
              </svg>
            </div>
            <q-card-section
              class="q-pb-none text-subtitle1"
              style="font-size: 1em"
            >
              Animations
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              3 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm" flat />
            </div>
          </div>
          <div class="animationsContainer q-mr-none q-pt-md activeCourseList">
            <div
              class="q-mx-md"
              style="
                background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                width: 85%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 14px;
              "
            >
              <!-- icon container -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#FFFFFF"
              >
                <path
                  d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                />
              </svg>
            </div>
            <q-card-section
              class="q-pb-none text-subtitle1"
              style="font-size: 1em"
            >
              Animations
            </q-card-section>
            <q-card-section class="q-pt-none q-pb-sm text-caption">
              3 topics
            </q-card-section>
            <div style="height: 50px; display: flex; justify-content: flex-end">
              <q-btn icon="chevron_right" class="q-px-sm" flat />
            </div>
          </div>
        </div>
      </div>
      <!-- Continue lerning -->

      <q-card class="continueLearning-container q-mt-lg" style="height: auto">
        <div class="continueLearning-header" style="border: 1px solid #8f9bb3">
          <div class="continueLearningHeader-txt q-my-md">
            <q-card-section class="text-h6"> Continue Learning </q-card-section>
          </div>
          <div class="learningHeaderNavAndLink">
            <div class="continueLearningHeader-nav q-my-md">
              <router-link to="#" style="text-decoration: none">
                <q-card-section> All </q-card-section>
              </router-link>
              <router-link to="#" style="text-decoration: none">
                <q-card-section> On Progress </q-card-section>
              </router-link>
              <router-link to="#" style="text-decoration: none">
                <q-card-section> Completed </q-card-section>
              </router-link>
            </div>
            <div class="continueLearning-link q-my-md">
              <q-card-section>View All</q-card-section>
            </div>
          </div>
        </div>
        <div
          class="continueLearning-content q-px-lg q-pt-md"
          style="width: 100%; height: auto"
        >
          <div class="courseName">
            <q-card-section class="text-subtitle2">
              Course Name
            </q-card-section>
          </div>
          <div class="courseList">
            <!-- first course -->
            <div class="flex q-mt-md">
              <div
                class="q-mx-md q-my-sm"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 55px;
                  height: 55px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <div class="courseDetails">
                <q-card-section
                  class="text-subtitle2 q-pb-none q-pl-none"
                  style="font-size: 1em"
                >
                  Animations
                </q-card-section>
                <q-card-section class="text-caption q-pt-none q-pl-none">
                  3 topics
                </q-card-section>
              </div>
            </div>
            <hr />
            <div class="flex q-mt-md">
              <div
                class="q-mx-md q-my-sm"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 55px;
                  height: 55px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <div class="courseDetails">
                <q-card-section
                  class="text-subtitle2 q-pb-none q-pl-none"
                  style="font-size: 1em"
                >
                  Animations
                </q-card-section>
                <q-card-section class="text-caption q-pt-none q-pl-none">
                  3 topics
                </q-card-section>
              </div>
            </div>
            <hr />
            <div class="flex q-mt-md">
              <div
                class="q-mx-md q-my-sm"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 55px;
                  height: 55px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <div class="courseDetails">
                <q-card-section
                  class="text-subtitle2 q-pb-none q-pl-none"
                  style="font-size: 1em"
                >
                  Animations
                </q-card-section>
                <q-card-section class="text-caption q-pt-none q-pl-none">
                  3 topics
                </q-card-section>
              </div>
            </div>
            <hr />
            <div class="flex q-mt-md">
              <div
                class="q-mx-md q-my-sm"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 55px;
                  height: 55px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <div class="courseDetails">
                <q-card-section
                  class="text-subtitle2 q-pb-none q-pl-none"
                  style="font-size: 1em"
                >
                  Animations
                </q-card-section>
                <q-card-section class="text-caption q-pt-none q-pl-none">
                  3 topics
                </q-card-section>
              </div>
            </div>
            <hr />
            <div class="flex q-mt-md">
              <div
                class="q-mx-md q-my-sm"
                style="
                  background: linear-gradient(180deg, #e5f3ff 0%, #5b9ce3 100%);
                  width: 55px;
                  height: 55px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 14px;
                "
              >
                <!-- icon container -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path
                    d="M354-80q-56 0-106-20.5T159-160q-38-38-58.5-87.5T80-354q0-80 41.5-146T232-598q20-42 53-75t77-55q32-71 97.5-111.5T607-880q56 0 105.5 20.5T800-800q38 39 59 88t21 105q0 84-38.5 146.5T728-362q-20 44-52.5 76.5T598-232q-32 71-97.5 111.5T354-80Zm0-60q45 0 86.5-19.5T508-211q-63 7-120.5-12.5T286-286q-44-43-63-101t-12-121q-33 26-52 67.5T140-354q0 45 16 84t46 68q30 29 68.5 45.5T354-140Zm126-127q45 0 86-19t69-52q-63 7-120-13.5T415-416q-44-45-64-102.5T339-639q-40 38-56 73.5T267-480q0 44 16 83t46 69q29 29 68 45t83 16Zm131-129q17 0 34.5-3.5T683-411q21-59 7-116.5T631-630q-42-42-105.5-57T408-683q-5 17-7.5 35t-2.5 41q0 42 16 81t46 70q30 32 69 46t82 14Zm143-54q34-29 50-67t16-90q0-43-16-81.5T758-757q-31-31-69.5-47T607-820q-49 0-89 16.5T446-752q63-7 122 13.5T673-673q46 45 67 102.5T754-450Z"
                  />
                </svg>
              </div>
              <div class="courseDetails">
                <q-card-section
                  class="text-subtitle2 q-pb-none q-pl-none"
                  style="font-size: 1em"
                >
                  Animations
                </q-card-section>
                <q-card-section class="text-caption q-pt-none q-pl-none">
                  3 topics
                </q-card-section>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.navbar-Profile
  display: flex
.main-container

  height:  auto
  width: 80vw
.mindstorm-container
  border: 4px solid #925FE2
  background-color: rgba(156, 111, 228, 0.3) /* Adjust the alpha value (0.7) to your preference */
  width: auto
  border-radius: 14px
  height: 220px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: baseline
  row-gap: 5%
  color: #925FE2
.activeCompleteCourse-container
  display: flex
  flex-direction: row
.activeCourse
  border: 2px solid #925FE2
  border-radius: 14px
  width: 54%
  display: flex
.completedCourse
  border: 2px solid #5CE1E6
  border-radius: 14px
  width: 54%
  display: flex

.diffCourseActive
  display: flex
  height: 260px
  column-gap: 20px
  flex-wrap: wrap
  row-gap: 20px
  overflow-y: hidden
.activeCourseList
  width: 15%
  max-height: 260px
  border: 1px solid #8F9BB3
  border-radius: 14px

.continueLearning-container
  border-radius: 14px 14px 0px  0px
  width: 100%
  height: 500px
  display: flex
  flex-direction: column
.continueLearning-header
  width: 100%
  height: 80px
  display: flex
  justify-content: space-between
  border-radius: 14px 14px 0px  0px
.courseName
  border-radius: 14px
  background-color: #F2F7FF
.continueLearningHeader-txt
  width: 20%
.learningHeaderNavAndLink
  display: flex
  width: 40%

  justify-content: space-between
.continueLearningHeader-nav
  display: flex
  width: 60%
  justify-content: space-between
  border: 1px solid #C5CBD6
  border-radius: 24px 24px 14px 14px
.courseDetails
  display: flex
  flex-direction: column

@media (max-width:1680px)
  .main-container
    width: 70vw
  .activeCourseList
    min-width: 22%
  .continueLearningHeader-txt
    min-width: 30%
  .learningHeaderNavAndLink
    min-width: 55%
@media (max-width:1203px)
  .main-container
    width: 60vw
  .activeCourseList
    min-width: 28%
  .continueLearningHeader-txt
    min-width: 225px
  .learningHeaderNavAndLink
    min-width: 390px
    padding: 0
  .continueLearningHeader-nav
    min-width: 300px
@media (max-width:1023px)
  .main-container
    width: 90vw
    margin-left:5%
@media (max-width:676px)
  .activeCompleteCourse-container
    display: flex
    flex-direction: column
  .activeCourse
    width: 100%
  .completedCourse
    width: 100%
    margin-left: 0
  .activeCourse-container
    overflow-x: scroll
  .activeCourseAndLink
    display: flex
    padding: 0
    flex-direction: column
    width: 100%
  .diffCourseActive
    width: 600px
  .activeCourseList
    min-width: 28%
  .continueLearning-container
    overflow-x: scroll
  .continueLearning-header
    min-width: 650px
  .courseName
    min-width: 600px
  .courseList
    min-width: 600px
</style>

<script setup>
import notifProfile from "src/components/notifProfile.vue";
import UserNavBar from "src/components/userNavBar.vue";
</script>
