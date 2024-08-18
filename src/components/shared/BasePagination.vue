<template>
  <div class="flex flex-row flex-wrap gap-2 cursor-pointer select-none">
    <div @click="movePrevPage" class="rounded-full size-12 flex items-center justify-center">
      <img
          src="../../assets/img/rickAndMorty.svg"
          alt="heart"
          width="25px"
          height="25px"
      />
    </div>
    <div class="flex flex-row flex-wrap gap-2">
      <div
          v-for="knob in knobs" :key="knob"
          class="border-2 rounded-full size-12 flex items-center justify-center"
          :class="{'bg-blue-400': knob === value, 'text-amber-50': knob === value, 'cursor-not-allowed': typeof knob !== 'number'}"
          @click="changePage(knob)"
      >
        {{ knob }}
      </div>
    </div>
    <div @click="moveNextPage" class="rounded-full size-12 flex items-center justify-center">
      <img
          src="../../assets/img/rickAndMorty.svg"
          alt="heart"
          width="25px"
          height="25px"
      /></div>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    totalRecords: {
      type: Number,
      required: true,
    },
    rowsPerPage: {
      type: Number,
      default: 20,
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.totalRecords / this.rowsPerPage);
    },
    knobs() {
      if (this.pageCount <= 7) {
        return Array(this.pageCount).fill(0).map((_, i) => i + 1);
      }
      if (this.value <= 4) {
        return [1, 2, 3, 4, 5, '...', this.pageCount];
      }
      if (this.pageCount - this.value <= 3) {
        return [1, '...', this.pageCount - 4, this.pageCount - 3, this.pageCount - 2, this.pageCount - 1, this.pageCount];
      }
      return [1, '...', this.value - 1, this.value, this.value + 1, '...', this.pageCount];
    },
  },

  methods: {
    changePage(val) {
      if (typeof val === 'number') {
        this.movePage(val);
      }
    },
    moveNextPage() {
      this.movePage(this.value + 1);
    },
    movePrevPage() {
      this.movePage(this.value - 1);
    },
    movePage(val) {
      if (val > this.pageCount || val < 1) {
        return;
      }
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
.base-pagination {
  border: 1px dashed red;
}
</style>/