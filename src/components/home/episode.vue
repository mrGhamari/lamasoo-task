<template>
  <div class="episode-card px-4 pt-4 rounded-[16px] column">
    <div class="flex items-center">
      <img
        src="../../assets/icon/Monitor.svg"
        alt="Moon"
        width="25px"
        height="25px"
      />
      <div class="ml-3">
        {{ episodeItems.name }} | {{ episodeItems.episode }}
      </div>
    </div>

    <div class="flex flex-center items-center justify-between">
      <base-button>
        <template #icon>
          <img
            src="../../assets/icon/Info.svg"
            alt="heart"
            width="20px"
            height="20px"
          />
        </template>
        Saiba mais
      </base-button>

      <base-button buttonClass="personagens-card__liked-button mt-6">
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
