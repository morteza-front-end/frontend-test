<template>
  <div class="home container">
    <Search class="mt-16" @handleSelectedDate="filterByDate" />
    <MoviesList
      :listMovies="listMovies"
      :isLoading="loading"
      :error="errorMessage"
    />
    <Pagination :firstMovie="page" @handleUpdatePage="updatePage" />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/search/search.vue";
import MoviesList from "@/components/movies/ListMovies.vue";
import Pagination from "@/components/pagination/index.vue";
import axios from "axios";
import env from "@/config/env";
export default {
  name: "Home",
  data() {
    return {
      listMovies: null,
      page: 1,
      loading: false,
      selectedDate: null,
      errorMessage: "",
    };
  },
  components: {
    Search,
    MoviesList,
    Pagination,
  },
  async created() {
    await this.getMovies();
  },
  methods: {
    async getMovies(page) {
      if (!page) {
        page = 1;
      }
      this.loading = true;
      let options;
      if (this.selectedDate) {
        options = {
          api_key: "f62f750b70a8ef11dad44670cfb6aa57",
          page: page,
          "release_date.lte": this.selectedDate[1],
          "release_date.gte": this.selectedDate[0],
        };
      } else {
        options = {
          api_key: "f62f750b70a8ef11dad44670cfb6aa57",
          page: page,
        };
      }
      await axios
        .get(env.baseUrl + `/movie`, {
          params: options,
        })
        .then(({ data }) => {
          this.listMovies = data?.results;
          this.page = data?.page;
          this.loading = false;
        })
        .catch((error) => {
          this.errorMessage = error?.message;
          this.loading = false;
          console.log("error:", error);
        });
    },
    async updatePage(page) {
      await this.getMovies(page);
    },
    filterByDate(value) {
      this.selectedDate = value;
      this.getMovies();
    },
  },
};
</script>
