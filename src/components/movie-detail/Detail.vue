<template>
  <div class="detail mt-20">
    <div class="flex items-center justify-between gap-16 mb-14">
      <ImageCover :path="imagePath" />
      <List :info="detailMovie" class="flex-grow" />
    </div>
    <Description :info="detailMovie" />
    <Credit :credit-detail="creditsMovie" />
  </div>
</template>
<script>
import ImageCover from "@/components/movie-detail/detail/ImageCover";
import List from "@/components/movie-detail/detail/List";
import Description from "@/components/movie-detail/detail/Description";
import Credit from "@/components/movie-detail/detail/Credit";
import env from "@/config/env";
import axios from "axios";
export default {
  name: "Detail",
  props: {
    detailMovie: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      creditsMovie: null,
    };
  },
  computed: {
    imagePath() {
      return `${env.baseUrlImage}${this.detailMovie?.poster_path}`;
    },
  },
  components: {
    ImageCover,
    List,
    Description,
    Credit,
  },
  async created() {
    await this.getCredits();
  },
  methods: {
    async getCredits() {
      let options = {
        api_key: "f62f750b70a8ef11dad44670cfb6aa57",
      };
      let id = this.$route.query.q;
      const data = await axios.get(env.creditsMovie(id), {
        params: options,
      });
      this.creditsMovie = data?.data;
    },
  },
};
</script>
