<template>
<div class="q-pa-md">
  <q-btn icon="directions" color="info" class="full-width" label="Service Point más cercano" @click="showMap"  />
</div>
  
</template>

<script>
export default {
  name: "ServicePoint",
  methods: {
    showMap() {
      return this.$store.dispatch("example/GET_DATA_SERVICEPOINT");
    }
  }
};
</script>