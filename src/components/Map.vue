<template>
  <q-page padding class="flex">
    <q-card style="flex: 1">
      <l-map :zoom="zoom" :center="userCoordenade">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="userCoordenade" :icon="iconCenter"></l-marker>
        <l-marker
          :lat-lng="coordenadeServicePoint"
          :icon="iconSercivePoint"
        ></l-marker>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { mapState } from "vuex";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },

  data() {
    return {
      zoom: 15,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      iconCenter: L.icon({
        iconUrl: "icons/place-black-24dp.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      iconSercivePoint: L.icon({
        iconUrl: "icons/storefront-24px.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
  computed: {
    ...mapState("example", ["userCoordenade"]),
    ...mapState("example", ["coordenadeServicePoint"]),
  },
};
</script>
<style>
</style>