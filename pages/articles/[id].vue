<template>
  <Navigation />
  <div class="flex flex-col justify-center mx-auto max-w-[50rem] px-8 md:px-16">
    <ContentDoc v-slot="{ doc: news }">
      <NuxtLink
        to="/articles"
        class="text-sm hover:underline mt-8 inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
      >
        Articles
      </NuxtLink>
      <h1 class="text-3xl">{{ news.title }}</h1>
      <div class="mt-4 flex items-center gap-x-2">
        <p
          class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2"
        >
          <Icon name="tabler:calendar-event" class="w-4 h-4" />
          {{
            $dayjs(news.date)
              .locale("ja")
              .tz("Asia/Tokyo")
              .format("YYYY-MM-DD (ddd)")
              .toString()
          }}
        </p>
        <div class="ml-2 flex items-center gap-2">
          <Icon name="tabler:tag" class="w-4 h-4" />
          <NuxtLink
            class="underline text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center"
            :to="`/articles?category=${tag}`"
            v-for="tag in news.tags"
            :key="tag"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
      <div class="mt-4 mb-6">
        <NuxtImg
          format="webp"
          class="rounded-lg w-full"
          :src="news.image"
          :alt="news.title"
          loading="lazy"
        />
      </div>
      <div class="mt-4 mb-8">
        <ContentRenderer :value="news" />
      </div>
    </ContentDoc>
    <Sharelink />
  </div>
</template>

<script setup>
const { copy, copied } = useClipboard();
const route = useRoute();
const news = await queryContent(route.path).findOne();
const meta = {
  title: news.title,
};
useHead(meta);
defineOgImageComponent("BlogPost", {
  title: news.title,
});

if (!news.title) {
  throw createError({
    statusCode: 404,
    message: "お探しの記事が見つかりませんでした",
    fatal: true,
  });
}

const share = {
  link: `https://blog.crystaworld1221.com${route.path}`,
  text: `${news.title}`,
};
</script>
