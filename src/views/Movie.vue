<template>
  <div class="about container mt-16">
    <Navbar :detail="detailTitle" />
    <Detail :detail-movie="info" />
  </div>
</template>
<script>
import axios from "axios";
import env from "@/config/env";
import Navbar from "@/components/movie-detail/Navbar";
import Detail from "@/components/movie-detail/Detail";
export default {
  name: "MovieDetails",
  data() {
    return {
      info: null,
    };
  },
  components: {
    Navbar,
    Detail,
  },
  methods: {
    async getMovieDetail(id) {
      let options = {
        api_key: "f62f750b70a8ef11dad44670cfb6aa57",
      };
      axios
        .get(env.detailMovie + `/${id}`, {
          params: options,
        })
        .then(({ data }) => {
          this.info = data;
        })
        .catch((error) => {
          console.log("error detail:", error);
        });
    },
  },
  computed: {
    detailTitle() {
      return {
        title: this.info?.title,
        TagTitle: this.info?.tagline,
      };
    },
  },
  async created() {
    await this.getMovieDetail(this.$route.query.q);
  },
};
</script>
