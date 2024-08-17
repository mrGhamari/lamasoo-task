<template>
  <button :class="buttonClass" @click="handleClick">
    <span>
    <slot name="icon"></slot>
    </span>
    <span><slot /></span>
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
