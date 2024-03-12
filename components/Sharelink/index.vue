<template>
  <div class="flex gap-x-4 gap-y-2 flex-wrap justify-center mb-8 -ml-1 md:ml-0">
    <div class="hs-tooltip">
      <NuxtLink
        type="button"
        :to="
          'https://twitter.com/intent/tweet?url=' +
          share.link +
          '&text=' +
          share.text
        "
        target="_blank"
        class="hs-tooltip-toggle mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-black/70 dark:hover:bg-black/40"
        aria-label="Xでシェア"
      >
        <Icon name="simple-icons:x" class="size-4" />
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
          role="tooltip"
        >
          Xでシェア
        </span>
      </NuxtLink>
    </div>
    <div class="hs-tooltip">
      <NuxtLink
        type="button"
        :to="'https://social-plugins.line.me/lineit/share?url=' + share.link"
        target="_blank"
        class="hs-tooltip-toggle mb-2 inline-block rounded bg-[#06C755] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-[#06C755]/70"
        aria-label="LINEでシェア"
      >
        <Icon name="bi:line" class="size-4" />
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
          role="tooltip"
        >
          LINEでシェア
        </span>
      </NuxtLink>
    </div>
    <div class="hs-tooltip">
      <NuxtLink
        type="button"
        :to="
          'https://misskey-hub.net/ja/share/?url=' +
          share.link +
          '&text=' +
          share.text
        "
        target="_blank"
        class="hs-tooltip-toggle mb-2 inline-block rounded bg-[#86B300] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-[#86B300]/70"
        aria-label="Misskeyでシェア"
      >
        <Icon name="simple-icons:misskey" class="size-4" />
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700 normal-case"
          role="tooltip"
        >
          Misskeyでシェア
        </span>
      </NuxtLink>
    </div>
    <div class="hs-tooltip">
      <button
        type="button"
        @click="copy(share.link)"
        class="hs-tooltip-toggle mb-2 inline-block rounded bg-white px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-white/70"
        aria-label="リンクをシェア"
      >
        <template v-if="!copied">
          <Icon name="material-symbols:share" class="size-4" />
        </template>
        <template v-else>
          <Icon name="tabler:check" class="size-4" />
        </template>
      </button>
      <span
        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700 normal-case"
        role="tooltip"
      >
        リンクをコピー
      </span>
    </div>
  </div>
</template>

<script setup>
const { copy, copied } = useClipboard();
const route = useRoute();
const news = await queryContent(route.path).findOne();
const meta = {
  title: news.title,
};
const share = {
  link: `https://blog.crystaworld1221.com${route.path}`,
  text: `${news.title}`,
};
</script>
