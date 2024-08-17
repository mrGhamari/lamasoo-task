<template>
  <div class="location-card px-4 rounded-[16px] grid justify-items-center">
    <div
      class="location-card__image transform -translate-y-1/2 grid justify-items-center"
    >
    <img v-if="icon" src="../../assets/icon/LocationMark.svg" alt="Location Mark">
      <img
      v-else
        src="../../assets/icon/Location.svg"
        alt="Moon"
        width="45px"
        height="36px"
      />
    </div>
    <div class="grid justify-items-center top-4">
      <div>{{ locationItems.type }}</div>
      <div class="text-blue-1">{{ locationItems.name }}</div>
      <div class="my-4">
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
      </div>

      <base-button buttonClass="personagens-card__liked-button mb-7">
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
  name: "location-card",

  props: {
    locationItems: {
      required: true,
    },
    icon: { required: false },
  },
};
</script>

<style lang="scss">
.location-card {
  background-color: #f1f1f1 !important;
  &__liked-button {
  }
}
</style>
