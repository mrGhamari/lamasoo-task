<template>
  <div class="more-person">
    <div class="flex items-center">
      <img src="../../assets/icon/More.svg" alt="more" />
      <div class="column font-bold ml-4">
        <div>Mais</div>
        <div>personagens</div>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-6 gap-4">
      <div v-for="(item, index) in characterList" :key="item.id">
        <Personagens :personagensItem="item" />
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <BasePagination :totalRecords="paginationData.count" v-model="page" />
    </div>
  </div>
</template>

<script>
import BasePagination from "@/components/shared/BasePagination.vue";
export default {
  name: "MorePerson",
  mounted() {
    this.fetchCharacters();
  },
  components: {},

  data() {
    return {
      page: 1,
      characterList: [],
      paginationData: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },
  watch: {
    page() {
      this.fetchCharacters()
    },
  },

  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch(
          this.baseUrl + `character/?page=${this.page}`
        );
        const data = await response.json();
        this.characterList = data.results;
        this.paginationData = data.info;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
