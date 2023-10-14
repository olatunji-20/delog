<template>
  <NavBar />
  <div class="w-[100%] h-[auto] py-12 px-4 md:p-16">
    <h1 class="font-bold text-3xl text-center">BLOGS & INTERVIEWS</h1>
    <p class="text-center pt-4 md:px-72">
      The blog is the best source of information for interviews, tips, guides,
      industry best practices and news. Subscribe for updates in your inbox
      every week.
    </p>

    <hr class="border border-gray-300 w-[90%] mx-[auto] my-8" />

    <div
      class="w-[100%] h-[auto] mx-[auto] mt-12 md:w-[100%]"
    >
      <Blogs />
    </div>
  </div>
  <NewsLetter />
  <FootBar />
</template>
  
<script>
import NavBar from "../components/NavBar.vue";
import NewsLetter from "../components/NewsLetter.vue";
import Blogs from "../components/Blogs.vue";
import FootBar from "../components/FootBar.vue";

export default {
  name: "BlogPost",
  setup() {},
  components: {
    NavBar,
    NewsLetter,
    Blogs,
    FootBar,
  },
};
</script>

<style>
</style>