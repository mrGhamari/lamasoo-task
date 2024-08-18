<template>
  <div class="person-info mt-8">
    <div class="flex flex-row items-start">
      <div class="basis-1/4">
        <img
          :src="character.image"
          alt="Character Image"
          height="100%"
          class="rounded-[16px] h-full"
        />
      </div>
      <div class="ml-10 basis-3/4">
        <div class="text-4xl flex items-center">
          <span>
            {{ character.name }}
          </span>
          <Base-Button buttonClass="bg-white ml-4">
            <template #icon>
              <img src="../../assets/icon/unLiked.svg" />
            </template>
          </Base-Button>
        </div>

        <div class="column">
          <div class="flex items-center mt-8">
            <img src="../../assets/icon/Monitor.svg" />
            <span class="ml-2">
              Participa de {{ episodeLength }} episódios
            </span>
          </div>

          <div class="flex items-center mt-12">
            <div class="flex flex-items">
              <img
                src="../../assets/icon/Pulse.svg"
                alt="pulse"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ character.status }}</span>
            </div>

            <div class="flex flex-items ml-3">
              <img
                src="../../assets/icon/Alien.svg"
                alt="Alien"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ character.species }}</span>
            </div>

            <div class="flex flex-items ml-3">
              <img
                src="../../assets/icon/Planet.svg"
                alt="Planet"
                width="32"
                height="32"
              />
              <span class="pl-1">{{ character.origin?.name }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <Location
            :locationItems="{
              type: character.type ? character.type : '-',
              name: character.origin?.name,
            }"
          />
          <Location
            class="ml-8"
            :locationItems="{
              type: character.location?.name,
            }"
            icon="LocationMark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
import Location from "../home/location.vue";
export default {
  name: "PersonInfo",
  mounted() {
    this.fetchSingleCharacter();
  },

  components: { Location },
  computed: {
    episodeLength() {
      return this.character.episode?.length;
    },
  },

  data() {
    return {
      character: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchSingleCharacter() {
      try {
        const response = await fetch(
          this.baseUrl + `/character/${this.$route.params.id}`
        );
        const data = await response.json();
        this.character = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
