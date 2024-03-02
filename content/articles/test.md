---
title: Nuxt3/contentでブログ構築は本当にできるのか?を試してみた!
image: /ogimage.png
tags:
  - Nuxt.js
date: 2023-02-19T00:18:24+09:00
---

# Code Blocks

## Focus

```vue [[id\\].vue]
<template>
  <Navigation />
  <div class="flex flex-col justify-center mx-auto max-w-[50rem] px-8 md:px-16">
    <ContentDoc v-slot="{ doc: news }">
      <NuxtLink
        to="/articles"
        class="mt-8 text-[#7a7a7a] dark:text-[#969e9c] text-sm hover:underline hover:text-gray-400 dark:hover:text-gray-300"
        >Articles</NuxtLink
      >
      <h1 class="text-3xl">{{ news.title }}</h1>
      <div class="flex flex-row gap-2 mt-2">
        <NuxtLink
          :to="`/articles?category=${tag}`"
          v-for="tag in news.tags"
          :key="tag"
          class="flex items-center text-black dark:text-white text-base underline hover:text-gray-500 dark:hover:text-gray-300"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
      <div class="mt-4">
        <img class="rounded-lg" :src="news.image" />
      </div>
      <div class="mt-4">
        <ContentRenderer :value="news" />
      </div>
    </ContentDoc>
  </div>
</template>

<script setup>
const route = useRoute();
const news = await queryContent(route.path).findOne();
const meta = {
  title: news.title,
};
useHead(meta);
</script>

```

