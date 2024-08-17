<template>
  <div class="more-episode">
    <div class="flex items-center">
      <img src="../../assets/icon/More.svg" alt="more" />
      <div class="column font-bold ml-4">
        <div>Mais</div>
        <div>episódios</div>
      </div>
    </div>
    <div class="grid grid-cols-5 mt-6 gap-4">
      <div v-for="(item, index) in episodeList" :key="item.id">
        <Episode :episodeItems="item" />
      </div>
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
      episodeList: [],
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchEpisodes() {
      try {
        const response = await fetch(this.baseUrl + "episode");
        const data = await response.json();
        this.episodeList = data.results;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
