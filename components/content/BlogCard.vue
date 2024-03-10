<script setup lang="ts">
const props = defineProps({
  url: String,
});
const { data, pending } = await useLazyAsyncData(
  props.url,
  () => {
    const query = { url: props.url };
    return $fetch(`/api/ogp`, {
      query,
    });
  },
  {
    server: false,
  }
);
</script>

<template>
  <NuxtLink
    v-if="data?.title"
    :to="props.url"
    target="_blank"
    class="bg-white dark:bg-zinc-800 mt-4 mb-4 box-border flex min-h-[100px] flex-row justify-between rounded-md border border-gray-300 dark:border-gray-700 text-black dark:text-white"
  >
    <div
      class="flex w-1/2 md:w-[65%] flex-grow shrink-0 flex-col justify-evenly break-words px-5"
    >
      <div class="line-clamp-2 text-sm">
        {{ data?.title }}
      </div>
      <div
        class="text-xs overflow-hidden text-ellipsis text-nowrap text-gray-600 dark:text-gray-400"
      >
        {{ data?.description }}
      </div>
      <div class="flex flex-row items-center gap-2">
        <img :src="data?.favicon" class="size-4 rounded-sm dark:bg-white" />
        <p class="text-xs line-clamp-1 text-gray-800 dark:text-gray-200">
          {{ data?.open_graph?.url }}
        </p>
      </div>
    </div>
    <div
      v-if="data?.open_graph?.images"
      class="w-1/3 md:w-auto h-[100px] max-w-[230px] hidden md:inline-flex"
    >
      <img
        :src="data?.open_graph?.images?.[0].url"
        class="mt-0 mb-0 h-full w-full object-cover rounded-tr-md rounded-br-md"
      />
    </div>
  </NuxtLink>
  <NuxtLink
    v-else
    :to="props.url"
    target="_blank"
    class="bg-white dark:bg-zinc-800 mt-4 mb-4 box-border flex min-h-[100px] flex-row justify-between rounded-md border border-gray-300 dark:border-gray-700 text-black dark:text-white"
  >
    <div
      class="flex w-1/2 md:w-[65%] flex-grow shrink-0 flex-col justify-evenly break-words px-5"
    >
      <div class="line-clamp-2 text-sm">OGP取得エラー</div>
      <div
        class="text-xs overflow-hidden text-ellipsis text-nowrap text-gray-600 dark:text-gray-400"
      >
        {{ props.url }}
        の応答がありませんでした。このURLが正しいかどうか確認してください。
      </div>
      <div v-if="data?.favicon" class="flex flex-row items-center gap-2">
        <img :src="data?.favicon" class="size-4 rounded-lg" />
        <p class="text-xs text-gray-800 dark:text-gray-200">
          {{ props.url }}
        </p>
      </div>
      <div v-else class="flex flex-row items-center gap-2">
        <p class="text-xs text-gray-800 dark:text-gray-200">
          {{ props.url }}
        </p>
      </div>
    </div>
    <div
      v-if="data?.open_graph?.images"
      class="w-1/3 md:w-auto h-[100px] max-w-[230px] hidden md:inline-flex"
    >
      <img
        :src="data?.open_graph?.images?.[0].url"
        class="mt-0 mb-0 h-full w-full object-cover rounded-tr-md rounded-br-md"
      />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
