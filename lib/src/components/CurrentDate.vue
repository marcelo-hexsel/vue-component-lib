<template>
  <div class="current-date">Now is {{currentDate}}</div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style>
.current-date {
  color: red;
}
</style>
