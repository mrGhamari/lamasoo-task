<template>
  <div class="personagens-card p-4 rounded-[8px]">
    <div class="personagens-card__avatar">
      <img
        :src="personagensItem.image"
        :alt="personagensItem.name"
        width="100%"
        height="200px"
        class="rounded-[16px]"
      />
    </div>
    <div>
      <div class="column">
        <div class="personagens-card__name text-grey-3 text-bold pt-4">
          {{ name }}
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
              <span class="pl-3">{{ truncatedString }}</span>
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
            <span class="pl-2">Saiba mais</span>
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
  computed: {
    name() {
      const str = this.personagensItem.name;
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024)
        return str.length > 18 ? str.substring(0, 18) + "..." : str;
      else return str;
    },
    truncatedString() {
      const str = this.personagensItem.origin.name;
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024)
        return str.length > 10 ? str.substring(0, 10) + "..." : str;
      else if (screenWidth >= 1280)
        return str.length > 22 ? str.substring(0, 22) + "..." : str;
      else return str;
    },
  },
  methods: {
    goToPage(id) {
      if (this.$route.name !== "Person") this.$router.push(`/person/${id}`);
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
