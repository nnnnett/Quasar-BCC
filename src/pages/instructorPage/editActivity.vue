<template>
  <q-page>
    <instructorNavBar />
    <div class="main-container">
      <q-card-section>
        <div class="q-pl-lg text-subtitle1">Course > Music > [Activity #]</div>
      </q-card-section>
      <!--  -->
      <div class="main-dashboard q-pl-xl">
        <q-card class="main-content q-px-xl q-py-lg">
          <q-card-section style="display: flex">
            <div class="text-h6 text-weight-medium">Student Submissions</div>
            <q-space />
            <div style="width: 30%; display: flex; align-items: center">
              <div>Sort</div>
              <q-select
                class="q-ml-md"
                style="width: 100%"
                filled
                v-model="mentors"
                label="A-Z"
              />
            </div>
          </q-card-section>
          <!-- header -->
          <q-card-section
            style="
              display: flex;
              justify-content: space-between;
              background-color: #f2f7ff;
              border-radius: 14px;
            "
            class="q-px-none"
          >
            <div style="width: 250px; text-align: center">Name</div>
            <div style="width: 250px; text-align: center">
              Date & Time of Submission
            </div>
            <div style="width: 250px; text-align: center">Actions</div>
          </q-card-section>
          <!-- Content -->

          <q-card-section
            style="
              display: flex;
              justify-content: space-between;
              text-transform: capitalize;
            "
            class="q-px-none"
          >
            <div style="width: 250px; text-align: center">Aiyawaki, Sakura</div>
            <div style="width: 250px; text-align: center">
              2024-02-14 | 3:45 PM
            </div>
            <div style="width: 250px; text-align: center">
              <div class="statusBtn">
                <q-btn-dropdown
                  flat
                  dropdown-icon="more_vert"
                  class="q-px-none"
                >
                  <q-list>
                    <q-item clickable to="#">
                      <q-item-section>
                        <q-item-label
                          style="color: #46af4b"
                          class="text-caption"
                          >Pass</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                    <q-item clickable to="#">
                      <q-item-section>
                        <q-item-label style="color: red" class="text-caption"
                          >Redo</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </q-card-section>
          <!-- counter -->
          <q-card-section
            style="
              display: flex;
              column-gap: 14px;
              align-self: flex-start;
              justify-content: flex-start;
              margin-top: auto;
            "
          >
            <div>Total</div>
            <div>0</div>
          </q-card-section>
        </q-card>
        <q-card class="publishedActivities-container q-py-md q-px-md">
          <!-- submited act -->
          <q-card-section
            class="text-subtitle1"
            style="color: #4b4b4b; font-weight: 600"
          >
            <q-img src="/src/assets/lee.png" />
          </q-card-section>
          <q-card-section
            style="row-gap: 14px; display: flex; flex-direction: column"
          >
            <div class="text-h6 text-weight-medium">Activity 2</div>
            <div
              class="acivityList q-py-md q-pl-md text-subtitle1 text-weight-medium"
              style="color: #925fe2"
            >
              Instruction
              <div
                style="color: #4b4b4b; text-align: justify"
                class="q-px-lg q-pt-md"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus velit, consequatur facilis, eos aperiam dolorum non
                adipisci quod, illo unde exercitationem placeat repudiandae
                ipsum quasi. Totam laborum sit quo aperiam!
              </div>
            </div>
            <div
              style="border: 1px solid #d9d9d9; border-radius: 14px"
              class="q-mt-lg q-py-sm"
            >
              <q-btn
                flat
                to="#"
                label="Edit"
                class="text-subtitle2"
                style="width: 100%; text-transform: capitalize; color: #4b4b4b"
              />
            </div>
            <div
              style="border: 1px solid #ff7070; border-radius: 14px"
              class="q-py-sm"
            >
              <q-btn
                flat
                to="#"
                label="Delete"
                class="text-subtitle2"
                style="width: 100%; text-transform: capitalize; color: #ff7070"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-container
  width: 80vw

.main-dashboard
  display: flex
  justify-content: space-between
.main-content
  height: auto
  width: 65%
  border-radius: 24px

  display: flex
  flex-direction: column
.publishedActivities-container
  width: 33%
  border-radius: 24px
  height: auto

.acivityList
  border: 1px solid #EBE9FB
  text-transform: capitalize
  border-radius: 14px
  color: #4B4B4B
</style>

<script setup>
import instructorNavBar from "src/components/instructorNavBar.vue";
</script>
