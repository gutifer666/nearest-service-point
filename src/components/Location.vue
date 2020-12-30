<template></template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Location",

  methods: {
    ...mapMutations("example", ["SET_LOCATION"]),

    success(pos) {
      this.SET_LOCATION([pos.coords.latitude, pos.coords.longitude]);
    },
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(this.success);
  },
};
</script>