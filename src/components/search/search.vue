<template>
  <div
    class="search bg-gray-450 rounded flex items-center justify-between py-5 pl-16 pr-12"
  >
    <div class="flex items-center gap-3">
      <span>Search by release date:</span>
      <Datepicker
        class="date-picker"
        @handleFilterByDate="updateSelectedDate"
      />
    </div>
    <button
      @click="filterByDate"
      class="bg-blue-450 rounded-full px-3 pt-1.5 pb-2 flex items-center"
    >
      search
    </button>
  </div>
</template>

<script>
import Datepicker from "@/components/search/date-picker/index.vue";
export default {
  name: "Search",
  data() {
    return {
      selectedDate: " ",
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    updateSelectedDate(value) {
      let date = [];
      for (let item in value) {
        let selectedDate = value[item].split(" ");
        date.push(selectedDate?.shift());
      }
      this.selectedDate = date;
    },
    filterByDate() {
      if (this.selectedDate.length > 0) {
        this.$emit("handleSelectedDate", this.selectedDate);
      } else {
        this.$emit("handleSelectedDate", null);
      }
    },
  },
};
</script>

<style>
.date-picker .vpd-main > .vpd-input-group > .vpd-clear-btn {
  left: auto !important;
  right: 0 !important;
}
</style>
