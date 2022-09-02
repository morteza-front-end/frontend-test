<template>
  <div v-if="info" class="list leading-4 h-full self-baseline">
    <div class="flex items-center justify-between pt-3 pb-5">
      <span>Budget</span>
      <span>${{ splitPrice(info.budget) }}</span>
    </div>
    <div class="flex items-center justify-between pb-5">
      <span>Revenue</span>
      <span>${{ splitPrice(info.revenue) }}</span>
    </div>
    <div class="flex items-center justify-between pb-5">
      <span>Release Date</span>
      <span>{{ info.release_date }}</span>
    </div>
    <div class="flex items-center justify-between pb-5">
      <span>Runtime</span>
      <span>{{ convertRunTime(info.runtime) }}</span>
    </div>
    <div class="flex items-center justify-between pb-5">
      <span>Score</span>
      <span>{{ info.vote_average }} ({{ info.vote_count }} votes)</span>
    </div>
    <div class="flex items-center justify-between pb-5">
      <span>Genres</span>
      <div class="flex flex-wrap justify-end" v-if="info.genres">
        <div v-for="(genre, index) in info.genres" :key="index">
          <span>{{ genre.name }}</span>
          <span v-show="index !== lastIndex">,</span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>IMDB Link</span>
      <span>
        <a
          :href="`https://www.imdb.com/title/${info.imdb_id}`"
          class="text-blue-500"
          target="_blank"
          >Link</a
        >
      </span>
    </div>
    <div class="flex items-center justify-between pt-5">
      <span>Homepage Link</span>
      <span>
        <a :href="`${info.homepage}`" class="text-blue-500" target="_blank"
          >Link</a
        >
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    info: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      lastIndex: null,
    };
  },
  watch: {
    "info.genres"(value) {
      this.lastIndex = value.length - 1;
    },
  },
  methods: {
    splitPrice(number) {
      number += "";
      number = number.replace("’", "");
      let x = number.split(".");
      let y = x[0];
      let z = x.length > 1 ? "." + x[1] : "";
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
      return y + z;
    },
    convertRunTime(time) {
      let hours = Number.parseInt(time / 60);
      let minutes = time - hours * 60;
      return `${hours}h ${minutes}m`;
    },
  },
};
</script>
