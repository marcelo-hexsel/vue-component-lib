<template>
  <div id="app">
    <current-date />
    <current-date-moment />
  </div>
</template>

<script>
import CurrentDate from "./components/CurrentDate.vue";
import CurrentDateMoment from "./components/CurrentDateMoment.vue";

export default {
  name: "app",
  components: {
    CurrentDate,
    CurrentDateMoment
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
