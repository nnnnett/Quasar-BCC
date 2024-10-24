<template>
  <div class="notifProfile">
    <q-card-section>
      <q-btn round icon="notifications">
        <q-badge floating color="red" rounded />
      </q-btn>
    </q-card-section>

    <div class="q-pa-md">
      <q-btn-dropdown color="primary" no-caps no-icon>
        <template v-slot:label>
          <q-img
            src="~assets/logo_bcc.png"
            alt="Dropdown Button"
            style="width: 30px; height: 30px"
          />
        </template>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.notifProfile
  display: flex
  flex-direction: row
</style>
<script setup></script>
