<template>
  <q-btn-dropdown flat dropdown-icon="more_vert" class="q-px-none">
    <q-list>
      <q-item clickable to="#">
        <q-item-section>
          <q-item-label>Edit</q-item-label>
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
</template>

<script setup></script>
