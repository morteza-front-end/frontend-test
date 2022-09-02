<template>
  <div class="description">
    <p v-if="info" class="text-justify">
      {{ info.overview }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Description",
  props: {
    info: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
};
</script>
