<template>
  <div class="home-page">
    <div class="container mx-auto lg:px-16 px-40">
      <Header />
      <HomeBanner />
    </div>

    <hr class="h-0.5 bg-blue-1" />

    <div class="container mx-auto lg:px-16 px-40  mt-6">
      <PersonagensSection />
      <EpisodeSection />
      <LocationSection />
      <Footer />

      <hr class="h-0.5 bg-blue-1" />

      <div class="flex items-center justify-between mt-4 mb-10">
        <span>2024</span>
        <span>
          powered By
          <a href="https://www.linkedin.com/in/mrghamari/">mrGhamari</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/home/Footer.vue";
import Header from "@/components/home/Header.vue";
import HomeBanner from "@/components/home/HomeBanner.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import Personagens from "@/components/home/Personagens.vue";
import EpisodeSection from "@/components/home/EpisodeSection.vue";
import LocationSection from "@/components/home/locationSection.vue";
import PersonagensSection from "@/components/home/PersonagensSection.vue";

export default {
  name: "Home",
  components: {
    Footer,
    BaseButton,
    Personagens,
    LocationSection,
    PersonagensSection,
  },
};
</script>

<style lang="scss">
.home-page {
  &__main-text {
    &__title {
      width: 24.8125rem;
    }
  }
}
</style>
