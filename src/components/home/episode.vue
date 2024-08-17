<template>
  <div class="episode-card p-4 rounded-[16px] column">
    <div class="flex items-center">
      <img
        src="../../assets/icon/Monitor.svg"
        alt="Moon"
        width="25px"
        height="25px"
      />
      <div class="ml-3">
        {{ title }}
      </div>
    </div>

    <div class="flex flex-center items-center justify-between mt-2">
      <base-button @click.native="goToPage(episodeItems.id)">
        <template #icon>
          <img
            src="../../assets/icon/Info.svg"
            alt="heart"
            width="20px"
            height="20px"
          />
        </template>
        <span class="ml-1">Saiba mais</span>
      </base-button>

      <base-button buttonClass="personagens-card__liked-button">
        <template #icon>
          <img
            src="../../assets/icon/Liked.svg"
            alt="Liked"
            width="35px"
            height="35px"
          />
        </template>
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "episode-card",

  props: {
    episodeItems: {
      required: true,
    },
  },
  computed: {
    title() {
      const str = `${this.episodeItems.name} | ${this.episodeItems.episode}`;
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024)
        return str.length > 10 ? str.substring(0, 10) + "..." : str;
      else if (screenWidth >= 1280)
        return str.length > 28 ? str.substring(0, 28) + "..." : str;
      else return str;
    },
  },

  methods: {
    goToPage(id) {
      this.$router.push(`/episode/${id}`);
    },
  },
};
</script>

<style lang="scss">
.episode-card {
  background-color: #f1f1f1;
  &__liked-button {
    background-color: #f1f1f1;
  }
}
</style>
