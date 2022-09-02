<template>
  <router-link
    :to="{ path: `/movie/${info.title}` }"
    @click.native="handleSaveId(info.id)"
    class="bg-gray-350 w-74 h-48 px-1 border border-gray-350 rounded-md grid grid-cols-2 items-center justify-center cursor-pointer"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500${info.poster_path}`"
      class="w-32 h-45 py-0.5 justify-self-start rounded-bl rounded-tl"
      alt=""
      loading="lazy"
    />
    <div class="w-full h-full flex flex-col items-start justify-between">
      <p class="font-bold text-left">{{ info.original_title }}</p>
      <div>
        <div class="flex items-center">
          <img src="@/assets/images/Calendar-icon.png" alt="Calendar-icon" />
          {{ info.release_date }}
        </div>
        <div class="flex flex-wrap gap-x-3">
          <div class="flex items-baseline gap-1">
            <span class="text-subTitle">Action</span>
            <div class="w-2 h-2 rounded-full inline-block bg-gray-500"></div>
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-subTitle">Action</span>
            <div class="w-2 h-2 rounded-full inline-block bg-gray-500"></div>
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-subTitle">Action</span>
            <div class="w-2 h-2 rounded-full inline-block bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    info: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  methods: {
    handleSaveId(id) {
      this.$store.dispatch("handleUpdateIdSelected", id);
    },
  },
};
</script>

<style></style>
