<template>
    <div class="person-page">
      <div class="container mx-auto px-14">
        <Header />
      </div>
  
      <hr class="h-0.5 bg-blue-1 mt-16 mb-12" />
  
      <div class="container mx-auto px-14 mt-6">
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
  
  export default {
    name: "Person",
    mounted() {
      this.fetchSingleEpisode();
    },
    components: {
      Footer,
      Header,
      personInfo,
    },
    data() {
      return {
        episode: {},
        baseUrl: import.meta.env.VITE_BASE_URL,
      };
    },
    methods: {
      async fetchSingleEpisode() {
        try {
          const response = await fetch(
            this.baseUrl + `/episode/${this.$route.params.id}`
          );
          const data = await response.json();
          this.episode = data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    },
  };
  </script>
  
  <style lang="scss">
  .episode-page {
  }
  </style>
  