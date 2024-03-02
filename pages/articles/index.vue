<template>
  <Navigation />
  <div
    class="mt-3 relative max-w-[80rem] w-full mx-2 py-0.5 px-2 md:flex md:items-center md:justify-between md:py-0 md:px-1 lg:px-2 xl:mx-auto"
    v-for="n in news"
    :key="n._path"
  >
    <nuxt-link :to="n._path">{{ n.title }}</nuxt-link>
  </div>
</template>

<script setup>
const { data: news } = await useAsyncData("articles", () =>
  queryContent("articles").limit(15).find()
);
useHead({
  title: "Articles",
});
</script>
