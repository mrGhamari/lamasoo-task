<template>
  <button :class="buttonClass" @click="handleClick">
    <slot name="icon"></slot>
    <span class="pl-2"><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default:
        "bg-blue-1 text-white px-4 py-2 rounded-[32px] flex items-center",
    },
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
