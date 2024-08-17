<template>
  <div class="person-page">
    <div class="container mx-auto px-14">
      <Header />
      <PersonInfo :person="character" />
    </div>

    <hr class="h-0.5 bg-blue-1 mt-16 mb-12" />

    <div class="container mx-auto px-14 mt-6">
      <MorePerson />
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
import PersonInfo from "@/components/person/personInfo.vue";
import personInfo from "@/components/person/personInfo.vue";
import MorePerson from "@/components/person/morePerson.vue";

export default {
  name: "Person",
  mounted() {
    this.fetchSingleCharacter();
  },
  components: {
    Footer,
    Header,
    personInfo,
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

<style lang="scss">
.person-page {
}
</style>
