<template>
  <div class="person-page">
    <div class="container mx-auto px-14">
      <Header />
      <EpisodeInfo />
    </div>

    <hr class="h-0.5 bg-blue-1 mt-16 mb-12" />

    <div class="container mx-auto px-14 mt-6">
      <MoreEpisode />
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
import EpisodeInfo from "@/components/episode/episodeInfo.vue";
import MoreEpisode from "@/components/episode/moreEpisode.vue";

export default {
  name: "episode",

  components: {
    Footer,
    Header,
    EpisodeInfo,
    MoreEpisode,
  },
};
</script>
