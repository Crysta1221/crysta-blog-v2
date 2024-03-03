<template>
  <code class="prose-code-inline">
    <slot />
  </code>
</template>

<style type="scss" scoped>
.prose-code-inline {
  border-radius: 4px;
  padding: 0.2rem;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 0.5rem;
  font-size: 14px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  @apply bg-[#595a58] dark:bg-[#5e5b57] text-black dark:text-white;
}

h1 a .prose-code-inline,
h2 a .prose-code-inline,
h3 a .prose-code-inline,
h4 a .prose-code-inline,
h5 a .prose-code-inline,
h6 a .prose-code-inline {
  font-size: 0.777777em;
  border-radius: 4px;
  padding: 0.15em 0.5em;
  @apply text-black dark:text-white;
}

a .prose-code-inline {
  border-width: var(--border-width-a);
  border-style: var(--border-style-a);
  border-color: var(--border-color-a-static);
  @apply text-[#ADA9A4] dark:text-[#67635D];
}

a:hover .prose-code-inline {
  color: var(--color-a-hover);
  border-color: var(--border-color-a-hover);
  background-color: var(--background-color-a-hover);
}
</style>
