<template>
  <Navigation />
  <ContentDoc v-slot="{ doc: news }">
    <div
      class="mt-8 flex flex-col md:flex-row justify-center mx-auto max-w-[78rem] px-1"
    >
      <div
        class="mx-4 px-4 lg:w-8/12 lg:px-6 xl:px-8 xl:w-9/12 rounded-md bg-white dark:bg-[#2F3232] mb-4"
      >
        <NuxtLink
          to="/articles"
          class="text-sm hover:underline mt-8 inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
        >
          Articles
        </NuxtLink>
        <h1 class="text-3xl font-semibold">{{ news.title }}</h1>
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
            sizes="sm:400px md:1200px"
          />
        </div>
        <div class="mt-4 mb-8">
          <ContentRenderer :value="news" />
        </div>
        <Sharelink />
      </div>
      <div
        class="hidden lg:inline-flex flex-col lg:w-4/12 lg:pl-8 xl:w-3/12 mr-4"
      >
        <div class="sticky top-[8rem]">
          <p class="mb-2 ml-4 underline">Table of Contents</p>
          <div
            v-for="item in news.body.toc.links"
            :key="item.id"
            class="mt-1 mb-1 ml-4"
          >
            <div v-if="item.depth === 2" class="h2">
              <div
                class="hover:bg-[#B3D8B3] dark:hover:bg-black rounded-md cursor-pointer text-gray-500 hover:text-[#3C3C43] dark:hover:text-gray-300 dark:text-[#71717a]"
                @click="toc(item.id)"
              >
                <NuxtLink class="ml-2 text-sm">
                  {{ item.text }}
                </NuxtLink>
              </div>
              <div v-if="item.children" class="h3">
                <div v-for="child in item.children" :key="child.id">
                  <div
                    class="ml-5 hover:bg-[#B3D8B3] dark:hover:bg-black rounded-md cursor-pointer text-gray-500 hover:text-[#3C3C43] dark:hover:text-gray-300 dark:text-[#71717a]"
                  >
                    <NuxtLink @click="toc(child.id)" class="text-sm ml-2">
                      {{ child.text }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="item.depth === 3" class="h3">
              <NuxtLink
                @click="toc(item.id)"
                class="ml-6 cursor-pointer text-sm text-[#3C3C43] hover:text-gray-400 dark:hover:text-gray-300 dark:text-[#71717a]"
              >
                {{ item.text }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
import { routerKey } from "vue-router";

const route = useRoute();
const router = useRouter();
const news = await queryContent(route.path).findOne();
const meta = {
  title: news.title,
};
useHead(meta);
defineOgImageComponent("BlogPost", {
  title: news.title,
});

if (!news.title) {
  throw createError("404 Not Found");
}

const toc = (id: string) => {
  const baseUrl = window.location.href.split("#")[0];
  const fullURL = `${baseUrl}#${id}`;
  window.history.pushState({}, "", fullURL);
  const el = document.getElementById(id);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - 100, behavior: "smooth" });
  }
};
</script>

<style scoped>
.toc {
  margin-bottom: 30px;
  border: 2px solid #189a51;
  border-radius: 3px;
}

.toc-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px 0;
  background-color: #189a51;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}

.toc-title::before {
  display: inline-flex;
  align-items: center;
  width: 1em;
  height: 1em;
  margin-right: 5px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
  content: "";
}
</style>
