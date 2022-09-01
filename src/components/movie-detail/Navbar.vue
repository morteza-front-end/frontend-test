<template>
  <div
    class="search bg-gray-450 rounded flex items-center justify-between py-5 pl-16 pr-12"
  >
    <div class="flex items-center gap-14">
      <button
        class="bg-blue-450 text-white rounded-full pl-4 pr-6 py-1 flex items-center"
      >
        <img
          src="@/assets/images/right_arrow_icon.png"
          alt="back"
          class="mr-0.5"
        />
        Back
      </button>
      <div v-if="detail" class="text-lg">
        <p class="font-bold">{{ detail.title }}</p>
        <p>{{ detail.TagTitle }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    detail: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
};
</script>
