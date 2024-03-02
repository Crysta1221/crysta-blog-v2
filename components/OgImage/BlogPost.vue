<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "title",
  }
);
</script>

<template>
  <div class="h-full w-full flex items-start justify-start og_image">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="mt-8 text-6xl p-23 font-black text-left">
          {{ title }}
        </h1>
        <div class="flex items-center pb-16 px-23 gap-3">
          <img class="size-[62px] rounded-full" src="/crysta.png" />
          <p class="text-3xl font-bold">CrystaWorld Blogs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.og_image {
  background-image: url("https://dl.hstorage.io/20240302234443_31343852.png");
}
</style>
