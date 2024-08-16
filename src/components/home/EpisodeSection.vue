<template>
  <div class="personagens-section">
    <div class="flex items-center mt-4">
      <span class="text-bold">Episódios</span>
      <span class="ml-3">
        <base-button>
          <template #icon>
            <img
              src="../../assets/icon/SquaresFour.svg"
              alt="heart"
              width="25px"
              height="25px"
            />
          </template>
          Ver todos
        </base-button>
      </span>
    </div>
    <div class="grid grid-cols-5 mt-6 gap-4">
      <div v-for="(item, index) in episodeList" :key="item.id">
        <Episode :episodeItems="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Episode from "@/components/home/episode.vue";
export default {
  name: "episode-section",

  mounted() {
    this.fetchCharacters();
  },

  data() {
    return {
      episodeList: [],
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch(this.baseUrl + "episode");
        const data = await response.json();
        this.episodeList = data.results.slice(0, 5);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
