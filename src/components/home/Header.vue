<template>
  <div class="header flex items-center justify-between mt-12">
    <div>
      <img
        src="../../assets/img/LogoA.svg"
        alt="Rick and Morty Logo"
        class="logo cursor-pointer"
        @click="()=> $router.push('/')"
      />
    </div>
    <base-button>
      <template #icon>
        <img
          src="../../assets/icon/heart.svg"
          alt="heart"
          width="25px"
          height="25px"
        />
      </template>
      <span class="pl-2"> Lista de favoritos </span>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "Header",
};
</script>
