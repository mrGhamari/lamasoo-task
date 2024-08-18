<template>
  <div class="episode-info">
    <div class="column">
      <img
        src="../../assets/icon/Monitor.svg"
        alt="Moon"
        width="54px"
        height="58px"
        class="mt-11"
      />
      <div class="flex flex-row items-center text-4xl font-bold py-6">
        <span>{{ episode.name }}</span>
        <Base-Button buttonClass="bg-white ml-4">
          <template #icon>
            <img src="../../assets/icon/unLiked.svg" />
          </template>
        </Base-Button>
      </div>

      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center">
          <img
            src="../../assets/icon/CalendarBlank.svg"
            width="24"
            height="26"
          />
          <span class="pl-2 text-grey-3">{{ episode.air_date }}</span>
        </div>
        <div class="flex flex-row items-center ml-6">
          <img src="../../assets/icon/playIcon.svg" width="24" height="26" />
          <span class="pl-2 text-grey-3">{{ episode.episode }}</span>
        </div>
      </div>
      <div class="flex flex-row items-center mt-16">
          <img src="../../assets/icon/More.svg" width="24" height="26" />
          <span class="pl-2 text-grey-3">{{ episode.characters?.length }} Personagens participaram deste episódio</span>
        </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "EpisodeInfo",

  mounted() {
    this.fetchSingleEpisode();
  },

  data() {
    return {
      episode: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchSingleEpisode() {
      try {
        const response = await fetch(
          this.baseUrl + `/episode/${this.$route.params.id}`
        );
        const data = await response.json();
        this.episode = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
