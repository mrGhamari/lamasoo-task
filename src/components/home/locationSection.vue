<template>
  <div class="personagens-section">
    <div class="flex items-center mt-4">
      <span class="text-bold">Localizações</span>
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
    <div class="grid grid-cols-7 mt-6 gap-4">
      <div v-for="(item, index) in locationList" :key="item.id">
        <Location :locationItems="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Location from "./location.vue";
import location from "./location.vue";
export default {
  name: "location-section",

  mounted() {
    this.fetchLocation();
  },

  data() {
    return {
      locationList: [],
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchLocation() {
      try {
        const response = await fetch(this.baseUrl + "location");
        const data = await response.json();
        this.locationList = data.results.slice(0, 7);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
