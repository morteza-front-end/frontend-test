<template>
  <div id="app">
    <datepicker
      class="w-56"
      placeholder=" "
      v-model="model.date"
      :minimumView="'day'"
      :maximumView="'month'"
      :initialView="'month'"
      :format="DatePickerFormat"
    ></datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      model: {
        date: "",
      },
      DatePickerFormat: "dd/MM/yyyy",
    };
  },
  watch: {
    "model.date"(Value) {
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
