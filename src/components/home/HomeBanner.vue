<template>
  <div class="banner flex items-center justify-between home-page__main-text">
    <div class="column">
      <div class="text-5xl font-bold home-page__main-text__title">
        Saiba tudo em um só <span class="text-blue-1">lugar.</span>
      </div>
      <div class="text-grey-3 mt-6">
        Personagens. localizações, episódios e muito mais.
      </div>
      <div class="flex items-center mt-16 mb-6">
        <Base-button buttonClass="bg-white flex items-center">
          <template #icon>
            <img
              src="../../assets/icon/Moon.svg"
              alt="Moon"
              width="25px"
              height="25px"
            />
          </template>
          <span class="pl-2"> Escuro </span>
        </Base-button>

        <Base-button class="ml-4">
          <template #icon>
            <img
              src="../../assets/icon/Sun.svg"
              alt="Sun"
              width="25px"
              height="25px"
            />
          </template>
          <span class="pl-2">Claro</span>
        </Base-button>
      </div>
      <div class="text-blue-1">Wubba Lubba Dub Dub! Cuidado com os olhos.</div>
    </div>

    <!-- Rick And Morty Image -->
    <div>
      <img
        src="../../assets/img/rickAndMorty.svg"
        width="400px"
        height="300px"
        alt="Rick And Morty"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "HomeBanner",
};
</script>
