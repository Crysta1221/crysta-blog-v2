<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const copyButtonRef = ref<HTMLElement>();

const { copy: copyToClipboard } = useClipboard();
onClickOutside(copyButtonRef, () => {
  if (state.value === "copied") {
    state.value = "init";
  }
});

const state = ref("init");

const copy = (_e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = "copied";
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("Couldn't copy to clipboard!", err);
    });
};
</script>

<template>
  <button
    ref="copyButtonRef"
    :class="[(show || state === 'copied') && 'show']"
    @click="copy"
  >
    <span class="sr-only">Copy to clipboard</span>
    <span class="icon-wrapper">
      <Transition name="fade">
        <Icon
          v-if="state === 'copied'"
          name="ph:check"
          size="18"
          class="copied"
        />
        <Icon v-else name="ph:copy" size="18" />
      </Transition>
    </span>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 4px;
  margin: 4px;
  border-radius: 3px;
  transition: all 200ms;
  transform: scale(0.75);
  opacity: 0;
}

button:focus {
  opacity: 1;
  outline: none;
  box-shadow: 0 0 0 2px #1a62ff;
}

button.show {
  transform: scale(1);
  opacity: 1;
}

button .icon-wrapper {
  display: block;
  position: relative;
  width: 18px;
  height: 18px;
}

button .icon-wrapper .icon {
  display: block;
  position: absolute;
}

button .icon-wrapper .fade-enter-active,
button .icon-wrapper .fade-leave-active {
  transition: opacity 200ms;
}

button .icon-wrapper .fade-enter-from,
button .icon-wrapper .fade-leave-to {
  opacity: 0;
}
</style>
