<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Nearest Service Point
        </q-toolbar-title>

        <div>Quasar & Leaflet</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <div class="fixed-center info">
      <Info></Info>
    </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Info from "../components/Info";

export default {
  name: 'MainLayout',
  components: { Info },
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>

<style>
  .info {
    width: max-content;
  }
</style>