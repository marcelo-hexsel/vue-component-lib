<template>
  <div id="app">
    <current-date />
  </div>
</template>

<script>
import lib from "lib";

export default {
  name: "app",
  components: {
    CurrentDate: lib.CurrentDate
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
