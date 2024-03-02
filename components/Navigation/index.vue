<template>
  <!-- ========== HEADER ========== -->
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm md:h-[5rem] sticky top-0"
  >
    <nav
      class="mt-5 relative max-w-[80rem] w-full bg-zinc-900 border-none rounded-lg mx-2 py-3.5 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <div class="md:flex">
          <NuxtLink to="/" class="mr-2 lg:-ml-3 flex items-center space-x-3">
            <NuxtImg src="/crysta.png" class="size-8 rounded-full" />
            <p class="font-bold text-base whitespace-nowrap text-white">
              Crysta Blogs
            </p>
          </NuxtLink>
        </div>
        <div class="md:hidden flex flex-row gap-2">
          <button
            type="button"
            class="sm:w-full md:bg-zinc-900 px-2 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-8"
          >
            <Icon name="tabler:search" class="size-4" />
          </button>
          <button
            type="button"
            class="sm:w-full md:bg-zinc-900 px-2 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-8"
            @click="
              toggleDarkMode(
                $colorMode.preference === 'dark' ? 'light' : 'dark'
              )
            "
          >
            <Icon
              v-if="$colorMode.preference === 'dark'"
              name="tabler:sun-filled"
              class="w-5 h-5"
            />
            <Icon v-else name="tabler:moon-filled" class="w-5 h-5" />
          </button>
          <button
            type="button"
            class="hs-collapse-toggle sm:w-full md:bg-zinc-900 px-2 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-8"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
      >
        <div
          class="flex flex-col gap-y-2 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-2.5 md:mt-0 md:ps-7"
        >
          <a href="/">
            <button
              type="button"
              class="bg-[#222521] w-full md:w-auto md:bg-zinc-900 px-4 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10"
            >
              Home
            </button>
          </a>
          <a href="/articles">
            <button
              type="button"
              class="bg-[#222521] w-full md:w-auto md:bg-zinc-900 px-4 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10"
            >
              Articles
            </button>
          </a>
          <a href="/tips">
            <button
              type="button"
              class="bg-[#222521] w-full md:w-auto md:bg-zinc-900 px-4 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10"
            >
              Tips
            </button>
          </a>
          <a href="/about">
            <button
              type="button"
              class="bg-[#222521] w-full md:w-auto md:bg-zinc-900 px-4 inline-flex items-center gap-x-2 text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10 mr-2"
            >
              About
            </button>
          </a>
          <div class="border-l dark:border-gray-500 flex gap-2">
            <button
              type="button"
              class="ml-4 bg-[#222521] hidden md:inline-flex md:bg-zinc-900 px-4 items-center text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10"
            >
              <Icon name="tabler:search" class="size-4" />
            </button>
            <button
              type="button"
              class="bg-[#222521] hidden md:inline-flex md:bg-zinc-900 px-4 items-center text-sm rounded-md border border-transparent text-[#D9EAD3] hover:bg-[#39453a] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-white h-10"
              @click="
                toggleDarkMode(
                  $colorMode.preference === 'dark' ? 'light' : 'dark'
                )
              "
            >
              <Icon
                v-if="$colorMode.preference === 'dark'"
                name="tabler:sun-filled"
                class="w-5 h-5"
              />
              <Icon v-else name="tabler:moon-filled" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

<script setup lang="ts">
function toggleDarkMode(theme: any) {
  useColorMode().preference = theme;
}
</script>
