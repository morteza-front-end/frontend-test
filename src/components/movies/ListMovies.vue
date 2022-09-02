<template>
  <div>
    <div v-if="!isLoading">
      <div
        v-if="listMovies && listMovies.length > 0"
        class="grid grid-cols-3 items-center justify-between gap-x-16 gap-y-8 mt-36"
      >
        <CardMovie
          v-for="(movie, index) in listMovies"
          :key="index"
          :info="movie"
          :list="listAllGenres"
        />
      </div>
      <div
        v-else-if="error.length > 0"
        class="flex items-center justify-center h-screen"
      >
        <p class="">{{ error }}</p>
      </div>
      <div v-else class="h-screen flex justify-center items-center">
        <p class="font-bold text-lg">Nothing Found..!</p>
      </div>
    </div>
    <div
      v-else
      class="grid grid-cols-3 items-center justify-between gap-x-16 gap-y-8 mt-36"
    >
      <div
        class="ssc-square rounded"
        v-for="(item, index) in 20"
        :key="index"
        :class="item"
      ></div>
    </div>
  </div>
</template>

<script>
import CardMovie from "../movies/movie-card/index.vue";
import axios from "axios";
import env from "@/config/env";

export default {
  name: "ListMovies",
  components: {
    CardMovie,
  },
  props: {
    listMovies: {
      type: Array,
      require: true,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      require: true,
      default: false,
    },
    error: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {
      listAllGenres: [],
    };
  },
  methods: {
    async getGenres() {
      let options = {
        api_key: "f62f750b70a8ef11dad44670cfb6aa57",
      };
      await axios
        .get(env.getAllGenre, {
          params: options,
        })
        .then((response) => {
          this.listAllGenres.push(...response?.data?.genres);
        });
    },
  },
  async created() {
    await this.getGenres();
  },
};
</script>

<style>
.ssc-square {
  height: 192px !important;
}
</style>
