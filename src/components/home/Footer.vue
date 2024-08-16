<template>
  <div class="header flex items-center justify-between mt-12">
    <div>
      <img
        src="../../assets/img/LogoA.svg"
        alt="Rick and Morty Logo"
        class="logo"
      />
    </div>
    <div class="flex items-start pt-5">
      <span class="mt-1">Voltar ao topo</span>
      <span>
        <base-button buttonClass="bg-white" @click.native="scrollToTop">
          <template #icon>
            <img
              src="../../assets/icon/Top.svg"
              alt="Top"
              width="35px"
              height="35px"
            />
          </template>
        </base-button>
      </span>
    </div>
  </div>
</template>

<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "Footer",

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
