<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="inline-flex items-center gap-0.5 font-medium text-blue-600 underline dark:text-blue-400 hover:no-underline"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: "_blank",
    required: false,
  },
});
</script>
