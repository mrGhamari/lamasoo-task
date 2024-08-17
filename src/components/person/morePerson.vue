<template>
  <div class="more-person">
    <div class="flex items-center">
      <img src="../../assets/icon/More.svg" alt="more" />
      <div class="column font-bold ml-4">
        <div>Mais</div>
        <div>personagens</div>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-6 gap-4">
      <div v-for="(item, index) in characterList" :key="item.id">
        <Personagens :personagensItem="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MorePerson",
  mounted() {
    this.fetchCharacters();
  },
  components: {},

  data() {
    return {
      page: 1,
      characterList: [],
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch(this.baseUrl + "character");
        const data = await response.json();
        this.characterList = data.results;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

