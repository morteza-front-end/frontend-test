<template>
  <div class="pagination text-center mt-40 mb-20">
    <div class="font-bold gap-3">
      <button
        class="text-gray-950"
        :disabled="checkActive"
        :class="activeClass"
        @click="changePage(page--, true)"
      >
        Previous Page
      </button>
      <span class="mx-2">|</span>
      <button class="text-blue-450" @click="changePage(page++, false)">
        Next Page
      </button>
    </div>
    <p class="text-gray-450 text-base">
      Showing results {{ startMovie }} - {{ endMovie }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    firstMovie: {
      type: [Number, String],
      require: true,
      default: 1,
    },
  },
  data() {
    return {
      page: 1,
      NextStartMovie: null,
      previousPage: false,
    };
  },
  computed: {
    startMovie() {
      if (this.firstMovie && this.firstMovie === 1) {
        return 1;
      } else {
        return this.NextStartMovie;
      }
    },
    endMovie() {
      return Number(this.startMovie) + 19;
    },
    checkActive() {
      return this.firstMovie === 1;
    },
    activeClass() {
      return this.firstMovie === 1 ? "cursor-not-allowed" : "text-blue-450";
    },
  },
  methods: {
    changePage(page, decries) {
      this.previousPage = decries;
      this.$emit("handleUpdatePage", this.page);
      this.updateLastNumberMovie();
      window.scrollTo(0, 0);
    },
    updateLastNumberMovie() {
      if (this.previousPage) {
        this.NextStartMovie = this.startMovie - 20;
      } else {
        this.NextStartMovie = this.endMovie + 1;
      }
    },
  },
};
</script>

<style></style>
