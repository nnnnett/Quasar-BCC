<template>
  <div>
    <q-toolbar class="navbar q-px-xl text-black">
      <q-btn flat class="nav-btn" label="Home" />
      <q-btn flat class="nav-btn" label="About Us" />
      <q-btn flat class="nav-btn" label="Contact Us" />
    </q-toolbar>
  </div>
</template>

<style lang="sass" scoped>
.navbar
  width: 40vw
  display: flex
  justify-content: space-between
  border: 1px solid black

.nav-btn
  &:hover
    color: #925FE2
</style>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
