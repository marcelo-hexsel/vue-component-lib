<template>
  <div class="current-date-moment">Now is {{currentDate}}</div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      currentDate: moment().format("DD/MM/YYYY HH:mm:ss")
    };
  }
};
</script>

<style>
.current-date-moment {
  color: blue;
}
</style>
