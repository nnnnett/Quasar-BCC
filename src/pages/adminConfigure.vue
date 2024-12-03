<template>
  <q-page style="overflow: hidden">
    <userNavBar />
    <div class="main-contaier q-mt-xl q-py-md q-px-md">
      <div class="q-mt-xl">
        <q-card-section
          class="text-h5 text-weight-bold q-pl-none"
          style="color: #4b4b4b"
        >
          Configure
        </q-card-section>
        <div style="color: #6c7275">Configure the system content.</div>
      </div>
      <!-- Resources container -->
      <q-card-section>
        <div class="text-h6" style="color: #925fe2">Resource</div>
      </q-card-section>
      <hr />
      <!-- resource header -->
      <q-card-section
        class="q-px-none"
        style="width: 100%; display: flex; justify-content: space-between"
      >
        <div style="width: 35%">
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
        <div style="width: 20%">
          <q-select outlined v-model="model" :options="options" label="A-Z">
            <template #prepend>
              <div class="q-pl-sm text-caption">Filter:</div>
            </template>
          </q-select>
        </div>
        <div
          style="
            width: 20%;
            border: 1px solid #925fe2;
            display: flex;
            text-align: center;
            justify-content: center;
          "
        >
          <q-btn
            flat
            label="Resource Upload"
            style="width: 100%; color: #4b4b4b; text-transform: capitalize"
            @click="uploadResource"
          />
        </div>
      </q-card-section>
      <!-- resource content -->
      <q-card
        class="q-px-xl q-py-lg"
        style="border-radius: 24px; height: 550px; overflow-y: scroll"
      >
        <!-- header -->
        <q-card-section
          class="text-weight-bold"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            background-color: #f2f7ff;
            color: #5b5b5b;
            border-radius: 14px;
          "
        >
          <div style="width: 20%">Resource Name</div>
          <div style="width: 20%">Description</div>
          <div style="width: 20%">Upload On</div>
          <div style="width: 20%">File Size</div>
          <div style="width: 20%">Actions</div>
        </q-card-section>
        <!-- content -->
        <q-card-section
          style="
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            text-align: center;
            color: #5b5b5b;
          "
        >
          <div style="width: 20%">CourseName.jpeg</div>
          <div style="width: 20%; text-align: justify">
            DescrCourse Thumbnail for Digital Literacy Courseiption
          </div>
          <div style="width: 20%">Upload On</div>
          <div style="width: 20%">File Size</div>
          <div style="width: 20%">
            <q-btn-dropdown flat dropdown-icon="more_vert" class="q-px-none">
              <q-list>
                <q-item clickable @click="viewDetails = true">
                  <q-item-section>
                    <q-item-label>View Details</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable to="#" v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Publish</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable to="#" v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Archieve</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-card-section>

        <q-card-section>
          <q-dialog v-model="viewDetails" class="courseEdit-container">
            <q-card class="q-pa-xl">
              <div style="width: 100%; color: #4b4b4b">
                <q-card-section>
                  <div class="text-h6 text-weight-medium q">View Resource</div>
                </q-card-section>
                <q-card-section>
                  <!-- File Name -->
                  <div style="width: 100%">
                    <div class="q-mb-none">File Name</div>
                    <div
                      class="q-py-md q-pl-md"
                      style="border: 1px solid #8f9bb3; border-radius: 14px"
                    >
                      CourseName.jpeg
                    </div>
                  </div>
                  <!-- Description -->
                  <div style="width: 100%">
                    <div class="q-mb-none q-mt-md">Description</div>
                    <div
                      class="q-py-md q-px-md"
                      style="
                        border: 1px solid #8f9bb3;
                        border-radius: 14px;
                        text-align: justify;
                        max-height: 200px;
                        overflow-y: scroll;
                      "
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit temporibus repellat rem quaerat, dignissimos modi
                      dolorem ducimus autem dolore odio ipsam ab cum. Adipisci
                      deserunt quod a, necessitatibus porro libero. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Velit
                    </div>
                  </div>

                  <!-- Upload Date -->
                  <div
                    class="q-mt-md"
                    style="
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                    "
                  >
                    <div style="width: 45%">
                      <div class="q-mb-none">Upload Date</div>
                      <div
                        class="q-py-md q-pl-md"
                        style="border: 1px solid #8f9bb3; border-radius: 14px"
                      >
                        26/11/2024
                      </div>
                    </div>
                    <div style="width: 45%">
                      <div class="q-mb-none">File Size</div>
                      <div
                        class="q-py-md q-pl-md"
                        style="border: 1px solid #8f9bb3; border-radius: 14px"
                      >
                        200KB
                      </div>
                    </div>
                  </div>
                </q-card-section>
                <div style="width: auto; display: flex">
                  <!-- content image -->
                  <q-card-section style="max-width: 300px; width: 300px">
                    <div>
                      <q-img src="/src/assets/lee.png" />
                    </div>
                  </q-card-section>

                  <q-card-actions class="text-primary">
                    <q-btn flat label="Edit" @click="EditDetails = true" />
                    <q-btn flat label="Close" v-close-popup />
                  </q-card-actions>
                </div>
              </div>
            </q-card>
          </q-dialog>
          <q-dialog
            v-model="EditDetails"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="q-pa-xl">
              <div style="width: 100%; color: #4b4b4b">
                <q-card-section>
                  <div class="text-h6 text-weight-medium q">
                    Edit/Upload Resource
                  </div>
                </q-card-section>
                <q-card-section>
                  <!-- File Name -->
                  <div style="width: 100%">
                    <div class="q-mb-none">File Name</div>
                    <div class="q-py-md">
                      <q-input type="text" outlined square v-model="fileName">
                      </q-input>
                    </div>
                  </div>
                  <!-- Description -->
                  <div style="width: 100%">
                    <div class="q-mb-none q-mt-md">Description</div>
                    <div class="q-py-md q-px-md">
                      <q-input
                        type="textarea"
                        outlined
                        square
                        v-model="description"
                      >
                      </q-input>
                    </div>
                  </div>

                  <!-- Upload Date -->
                  <div
                    class="q-mt-md"
                    style="
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                    "
                  >
                    <div style="width: 45%">
                      <div class="q-mb-none">Upload Date</div>
                      <div class="q-py-md q-pl-md">
                        <q-input
                          type="date"
                          outlined
                          square
                          v-model="uploadDate"
                        >
                        </q-input>
                      </div>
                    </div>
                    <div style="width: 45%">
                      <div class="q-mb-none">File Size</div>
                      <div
                        class="q-py-md q-pl-md q-mt-md"
                        style="border: 1px solid #8f9bb3; border-radius: 14px"
                      >
                        200KB
                      </div>
                    </div>
                  </div>
                </q-card-section>
                <div style="width: auto; display: flex">
                  <!-- content image -->
                  <q-card-section style="max-width: 300px; width: 300px">
                    <div>
                      <div>Resource Image</div>
                      <q-file
                        v-model="imageFile"
                        accept="image/*"
                        outlined
                        label="Upload Image"
                        square
                      >
                      </q-file>
                    </div>
                  </q-card-section>

                  <q-card-actions class="text-primary">
                    <q-btn flat label="Save" @click="saveDetails = true" />
                    <q-btn flat label="Cancel" v-close-popup />
                  </q-card-actions>
                </div>
              </div>
            </q-card>
          </q-dialog>
          <q-dialog
            v-model="saveDetails"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="q-pa-md">
              <q-card-section style="color: #4b4b4b">
                <div class="text-h6">Are you sure you want to save?</div>
                <div class="text-subtitle2">
                  Double check the details before saving
                </div>
              </q-card-section>
              <q-card-actions align="right" class="bg-white text-teal">
                <q-item clickable v-close-popup @click="closepopup" class=" ">
                  <q-item-section>
                    <q-item-label>Save</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-btn flat label="Cancel" v-close-popup />
                </q-item>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.main-contaier
  width: 80vw

@media (max-width:1485px)
.main-contaier
  width: 75vw
</style>

<script setup>
import userNavBar from "src/components/userNavBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const viewDetails = ref(false);
const EditDetails = ref(false);
const saveDetails = ref(false);
const router = useRouter();
const fileName = ref("");
const description = ref("");
const uploadDate = ref("");
const imageFile = ref("");

function closepopup() {
  viewDetails.value = false; // Close the dialog
  EditDetails.value = false;
  router.replace("/adminConfigure"); // Navigate back
}

function uploadResource() {
  EditDetails.value = true;
}
</script>
