<template>
  <div class="personagens-card p-4 rounded-[8px]">
    <div class="personagens-card__avatar">
      <img
        :src="personagensItem.image"
        :alt="personagensItem.name"
        width="100%"
        height="200px"
      />
    </div>
    <div>
      <div class="column">
        <div class="personagens-card__name text-grey-3 text-bold pt-4">
          {{ personagensItem.name }}
        </div>

        <div class="flex items-start justify-between">
          <div class="column">
            <div class="flex flex-items">
              <img src="../../assets/icon/Pulse.svg" alt="pulse" />
              <span class="pl-3">{{ personagensItem.status }}</span>
            </div>
            <div class="flex flex-items">
              <img src="../../assets/icon/Alien.svg" alt="Alien" />
              <span class="pl-3">{{ personagensItem.species }}</span>
            </div>
            <div class="flex flex-items">
              <img src="../../assets/icon/Planet.svg" alt="Planet" />
              <span class="pl-3">{{ personagensItem.origin.name }}</span>
            </div>
          </div>

          <div>
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
        <div class="flex justify-end mt-3">
          <base-button @click.native="goToPage(personagensItem.id)">
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
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "personagens-card",

  props: {
    personagensItem: {
      required: true,
    },
  },
  methods: {
    goToPage(id) {
      this.$router.push(`/person/${id}`);
    },
  },
};
</script>

<style lang="scss">
.personagens-card {
  background-color: #f1f1f1;
  &__liked-button {
    background-color: #f1f1f1;
  }
}
</style>
