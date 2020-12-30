<template>
  <div>
    <Location></Location>
    <ServicePoint></ServicePoint>
    <Map></Map>
  </div>
</template>

<script>
import Location from "../components/Location";
import ServicePoint from "../components/ServicePoint";
import Map from "../components/Map";
export default {
  name: "PageIndex",
  components: {
    Location,
    ServicePoint,
    Map,
  },
};
</script>
