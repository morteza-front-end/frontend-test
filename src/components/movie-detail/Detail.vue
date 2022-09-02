<template>
  <div class="detail mt-20">
    <div class="flex items-center justify-between gap-16 mb-14">
      <ImageCover :path="imagePath" />
      <List :info="detailMovie" class="flex-grow" />
    </div>
    <Description />
  </div>
</template>
<script>
import ImageCover from "@/components/movie-detail/detail/ImageCover";
import List from "@/components/movie-detail/detail/List";
import Description from "@/components/movie-detail/detail/Description";
import env from "@/config/env";
export default {
  name: "Detail",
  props: {
    detailMovie: {
      type: Object,
      require: true,
      default: () => {},
    },
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
  },
};
</script>
