<template>
  <div class="more-episode">
    <div class="flex items-center">
      <img src="../../assets/icon/More.svg" alt="more" />
      <div class="column font-bold ml-4">
        <div>Mais</div>
        <div>episódios</div>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-6 gap-4">
      <div v-for="(item, index) in episodeList" :key="item.id">
        <Episode :episodeItems="item" />
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <BasePagination :totalRecords="paginationData.count" v-model="page" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreEpisode",
  mounted() {
    this.fetchEpisodes();
  },

  data() {
    return {
      page: 1,
      episodeList: [],
      paginationData: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },
  watch: {
    page() {
      this.fetchEpisodes();
    },
  },

  methods: {
    async fetchEpisodes() {
      try {
        const response = await fetch(
          this.baseUrl + `episode/?page=${this.page}`
        );
        const data = await response.json();
        this.episodeList = data.results;
        this.paginationData = data.info;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
