<template>
  <div class="personagens-section">
    <div class="flex flex-center justify-between">
      <div class="flex items-center border-2 border-grey-3 rounded-[32px]">
        <input
          class="flex-grow px-4 py-2 rounded-[32px] focus:outline-none"
          type="search"
          placeholder="Personagem, episódio, localização..."
        />
        <button class="w-12 h-full flex items-center justify-center text-white">
          <img src="../../assets/icon/search.svg" alt="search" />
        </button>
      </div>

      <div class="flex items-center">
        <span>Filtrar por:</span>

        <Base-button
          buttonClass="bg-blue-1 flex items-center rounded-[32px] px-2 py-1 text-white ml-3"
        >
          <template #icon>
            <img
              src="../../assets/icon/Smile.svg"
              alt="Moon"
              width="25px"
              height="25px"
            />
          </template>
          Personagens
        </Base-button>

        <Base-button buttonClass="bg-white flex items-center mx-3">
          <template #icon>
            <img
              src="../../assets/icon/Location.svg"
              alt="Moon"
              width="25px"
              height="25px"
            />
          </template>
          Localizaçãoes
        </Base-button>
        <Base-button buttonClass="bg-white flex items-center">
          <template #icon>
            <img
              src="../../assets/icon/Monitor.svg"
              alt="Moon"
              width="25px"
              height="25px"
            />
          </template>
          Episódio
        </Base-button>
      </div>
    </div>
    <div class="flex items-center mt-4">
      <span class="text-bold">Personagens</span>
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
    <div class="grid grid-cols-4 mt-6 gap-4">
      <div v-for="(item, index) in characterList" :key="item.id">
        <Personagens :personagensItem="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personagens-section",

  mounted() {
    this.fetchCharacters();
  },

  data() {
    return {
      characterList: [],
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },

  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch(this.baseUrl + "character");
        const data = await response.json();
        this.characterList = data.results.slice(0, 8);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
