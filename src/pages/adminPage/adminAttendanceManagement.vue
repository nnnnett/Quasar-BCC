<template>
  <q-page>
    <adminNavBar />
    <!-- Main content -->
    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          Attendance
        </q-card-section>
        <q-card-section class="text-subtitle2 q-pt-none" style="color: #6c7275">
          Manage student attendance.
        </q-card-section>
      </div>
      <!-- Main content -->
      <q-card class="attendance-Container">
        <!-- Search Bar -->
        <q-card-section style="display: flex">
          <div style="width: 550px">
            <q-input
              v-model="searchQuery"
              label="Search"
              outlined
              rounded
              clearable
              @input="onSearchInput"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <q-space />
          <div class="q-ml-lg">
            <q-btn
              class="q-py-md"
              label="Generate Report"
              no-caps
              to="#"
              color="accent"
              style="background-color: #925fe2; width: 200px"
            />
          </div>
        </q-card-section>
        <!-- Calendar -->

        <div style="display: flex">
          <!-- from date -->
          <q-card-section style="width: 350px">
            <div>From date</div>
            <div>
              <q-input filled v-model="fromDate">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fromDate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </q-card-section>
          <!-- To date -->
          <q-card-section style="width: 350px">
            <div>From date</div>
            <div>
              <q-input filled v-model="toDate">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="toDate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </q-card-section>
          <q-card-section>
            <div>Sort By</div>
            <div style="width: 350px">
              <q-select
                outlined
                v-model="model"
                :options="options"
                label="Alphabetical"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div>Show</div>
            <div style="width: 350px">
              <q-select
                outlined
                v-model="model"
                :options="options"
                label="All Students"
              />
            </div>
          </q-card-section>
        </div>
        <!-- Content -->
        <div class="q-px-md">
          <!-- Header -->
          <q-card-section class="attendanceContainer-header">
            <div style="width: 350px">Name</div>
            <div style="width: 350px">In time</div>
            <div style="width: 350px">Out time</div>
            <div style="width: 350px">Status</div>
            <div style="width: 350px">Action</div>
          </q-card-section>
          <!-- content -->
          <div>
            <q-card-section class="attendanceContainer-content">
              <div style="width: 350px">Miyawaki, Sakura</div>
              <div style="width: 350px">14:15</div>
              <div style="width: 350px">14:15</div>
              <div style="width: 350px; color: #46af4b">Present</div>
              <div style="width: 350px">
                <q-btn-dropdown
                  flat
                  dropdown-icon="more_vert"
                  class="q-px-none"
                >
                  <q-list>
                    <q-item clickable to="#" v-close-popup>
                      <q-item-section>
                        <q-item-label>Present</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable to="#" v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Absent</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </q-card-section>
            <!-- second example -->
            <q-card-section class="attendanceContainer-content">
              <div style="width: 350px">Miyawaki, Sakura</div>
              <div style="width: 350px">14:15</div>
              <div style="width: 350px">14:15</div>
              <div style="width: 350px; color: #f36942">Absent</div>
              <div style="width: 350px">
                <q-btn-dropdown
                  flat
                  dropdown-icon="more_vert"
                  class="q-px-none"
                >
                  <q-list>
                    <q-item clickable to="#" v-close-popup>
                      <q-item-section>
                        <q-item-label>Present</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable to="#" v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Absent</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </q-card-section>
          </div>
        </div>
        <!-- Counter -->
        <q-card-section class="counter-container">
          <div style="display: flex; align-items: center">
            <div style="color: #46af4b">Total Present</div>
            <q-checkbox v-model="totalPresent" />
          </div>
          <div style="display: flex; align-items: center">
            <div style="color: #f36942">Total Absent</div>
            <q-checkbox v-model="totalAbsent" />
          </div>
          <q-space />
          <div class="counter q-mr-sm">Show</div>
          <div class="q-mr-md" style="width: 100px">
            <q-input outlined v-model="model" type="number" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-contaier
  width: 80vw

.attendance-Container
  height: auto
  min-height: 650px
  width: 100%
  border-radius: 14px
  display: flex
  flex-direction: column
.attendanceContainer-header
  background-color: #F2F7FF
  border-radius: 14px
  display: flex
  justify-content: space-between
  text-align: center

.attendanceContainer-content
  display: flex
  justify-content: space-between
  text-align: center

.counter-container
  display: flex
  align-self: flex-start
  align-items: center
  margin-top: auto
  justify-content: flex-start
  width: 100%

.counter
</style>

<script setup>
import adminNavBar from "src/components/adminNavBar.vue";
import { ref } from "vue";

const totalPresent = ref(true);
const totalAbsent = ref(true);
const fromDate = ref("");
const toDate = ref("");
</script>
