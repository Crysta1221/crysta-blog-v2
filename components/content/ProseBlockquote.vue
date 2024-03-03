<template>
  <blockquote class="prose-blockquote">
    <slot />
  </blockquote>
</template>

<style lang="scss" scoped>
.prose-blockquote {
  padding-inline-start: 14px;
  quotes: "'201C' '201D' '2018' '2019'";
  border-inline-start-width: 4px;
  border-inline-start-style: solid;
  @apply border-s-white dark:border-s-[#5e5b57] text-gray-500 dark:text-gray-400;
  margin-bottom: 1rem;
}
</style>
