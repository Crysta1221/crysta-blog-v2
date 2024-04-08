<script setup>
defineProps(["type", "text"]);
</script>

<template>
  <div :class="[type]" class="mb-4 mt-2">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon
          class="flex-shrink-0 size-5"
          :name="
            type === 'warning'
              ? 'tabler:alert-triangle-filled'
              : type === 'info'
              ? 'tabler:alert-circle-filled'
              : type === 'danger'
              ? 'ph:fire-fill'
              : ''
          "
        />
      </div>
      <div class="ms-4">
        <h3 class="text-sm font-semibold uppercase">
          {{}}
          {{ text || type }}
        </h3>
        <ContentSlot
          class="mt-1 text-sm text-yellow-700"
          :use="$slots.default"
          unwrap="p"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.warning {
  @apply bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500;
}

.info {
  @apply bg-green-100 border border-green-200 text-sm text-green-800 rounded-lg p-4 dark:bg-green-800/10 dark:border-green-900 dark:text-green-500;
}

.danger {
  @apply bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500;
}
</style>
