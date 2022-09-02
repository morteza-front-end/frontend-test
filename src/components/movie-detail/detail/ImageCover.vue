<template>
  <div>
    <img :src="path" class="w-image h-image rounded-lg" alt="image" />
  </div>
</template>
<script>
export default {
  name: "ImageCover",
  props: {
    path: {
      type: String,
      require: true,
      default: "",
    },
  },
};
</script>
<style>
.h-image {
  height: 495px !important;
}
.w-image {
  width: 330px !important;
}
</style>
