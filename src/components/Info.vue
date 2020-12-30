<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Service Point</div>
    </q-card-section>
    <q-card-section class="text-body1">
      <p>{{ nameServicePoint }}</p>
      <p>Horario de apertura:</p>
      <p>{{openHourServicePoint}}</p>
      <p>Horario de cierre:</p>
      <p>{{closeHourServicePoint}}</p>
      <p>Dirección:</p>
      <p>{{addressServicePoint}}</p>
      <p>Distancia:</p>
      <p>A {{distanceServicePoint}} metros</p>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Info",
  computed: {
    ...mapState("example", ["nameServicePoint"]),
    ...mapState("example", ["openHourServicePoint"]),
    ...mapState("example", ["closeHourServicePoint"]),
    ...mapState("example", ["addressServicePoint"]),
    ...mapState("example", ["distanceServicePoint"]),
  },
};
</script>

<style>
.my-card {
  text-align: center;
}
</style>