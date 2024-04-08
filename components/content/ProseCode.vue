<script setup lang="ts">
import { ref } from "vue";

defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
});

const hovered = ref(false);
</script>

<template>
  <div
    :class="[`highlight-${language}`]"
    class="prose-code"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>
    <slot />
    <CopyButton :show="hovered" :content="code" class="copy-button" />
  </div>
</template>

<style lang="scss" scoped>
.prose-code {
  position: relative;
  overflow-x: auto;
  width: 100%;
  font-size: 14px;
  margin: 24px 0;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  backdrop-filter: contrast(1);
  padding: 16px;
  counter-reset: line 0;
  @apply border-[#ECEBE8] dark:border-[#201E1B] text-[#36332E] dark:text-[#ECEBE8] bg-[#FBFBFB] dark:bg-[#121110];
}

.prose-code code {
  width: 100%;
}

.prose-code.highlight-zsh code .line,
.prose-code.highlight-sh code .line,
.prose-code.highlight-bash code .line,
.prose-code.highlight-shell code .line,
.prose-code.highlight-shellscript code .line {
  position: relative;
  padding-inline-start: 1rem;
}

.prose-code.highlight-zsh code .line::before,
.prose-code.highlight-sh code .line::before,
.prose-code.highlight-bash code .line::before,
.prose-code.highlight-shell code .line::before,
.prose-code.highlight-shellscript code .line::before {
  content: ">";
  position: absolute;
  top: 0;
  inset-inline-start: -0.1rem;
  display: block;
  user-select: none;
  font-weight: 700;
  color: #1a62ff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace, "Noto Sans JP", sans-serif;
}

.copy-button {
  position: absolute;
  inset-inline-end: 0;
  bottom: 0;
}

code {
  display: flex;
  flex-direction: column;
}

.line {
  display: inline-table;
  min-height: 1rem;
}

.filename {
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  padding: 0.5rem 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace, "Noto Sans JP", sans-serif;
  border-radius: 14px;
  font-size: 12px;
  line-height: 1.5;
  transition: opacity 200ms;
  backdrop-filter: blur(4px);
  @apply text-[#36332E] dark:text-[#ECEBE8];
}

.prose-code:hover .filename {
  opacity: 0;
}

.prose-code:hover .filename:hover {
  opacity: 1;
}

pre {
  display: flex;
  flex: 1;
  overflow-x: auto;
  margin: 0;
  padding: 16px;
  line-height: 1.625;
}

pre code {
  padding-inline-end: 30px;
}

:slotted(pre code .line::before) {
  text-align: right;
  counter-increment: line;
  content: counter(line);
  margin-right: 1.5rem;
  color: rgba(155, 166, 171, 0.4);
  display: inline-block;
  width: 2.1rem;
  padding-left: 0.5rem;
  margin-left: -0.8rem;
}
:slotted(pre code .highlight) {
  @apply bg-[#EAEBEE] dark:bg-[#24272C];
}
:slotted(pre code .diff.add) {
  content: "+";
  @apply bg-[#D8F0E8] dark:bg-[#17322C];
}
:slotted(pre code .diff.remove) {
  @apply bg-[#F9E7EA] dark:bg-[#301C23];
}
</style>
