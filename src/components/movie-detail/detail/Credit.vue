<template>
  <div v-if="creditDetail && creditDetail.cast" class="credit mt-20 mb-96">
    <p class="text-lg font-bold mb-3">Credit:</p>
    <div class="flex flex-wrap text-justify truncate">
      <div v-for="(actor, index) in list" :key="index">
        <span>{{ actor.original_name }}</span>
        <span v-show="index !== lastIndex">,</span>
        <span v-show="index === 8"> and {{ remaining }} more.</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Credit",
  props: {
    creditDetail: {
      type: [Object, Array],
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      lastIndex: null,
      remaining: null,
    };
  },
  computed: {
    list() {
      return this.creditDetail?.cast.slice(0, 9);
    },
  },
  watch: {
    "creditDetail.cast"(value) {
      this.lastIndex = value.length - 1;
      this.remaining = value.length - 10;
    },
  },
};
</script>
