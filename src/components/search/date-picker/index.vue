<template>
  <div id="app">
    <date-picker
      v-model="range"
      range
      clearable
      auto-submit
      locale="en"
      format="YYYY-MM-DD HH:mm"
      display-format="jYYYY/jM/jD"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: "",
    };
  },
  watch: {
    range(Value) {
      if (Value) {
        this.$emit("handleFilterByDate", Value);
      }
    },
  },
};
</script>

<style>
.w-56 > div > input {
  padding: 5px 10px;
  width: 100%;
}
</style>
