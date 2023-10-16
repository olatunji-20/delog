<template>
  <NavBar />
  <div class="w-[100%] h-[auto] py-12 px-2 md:p-16">
    <p class="text-md text-blue-400 inline">{{ blogStore.blog.date }}</p>
    <p class="inline border border-blue-700 mx-2 rounded-full"></p>
    <p class="text-md text-blue-400 inline">{{ blogStore.blog.authorName }}</p>
    <h1 class="font-bold text-3xl my-3">{{ blogStore.blog.topic }}</h1>
    <p class="text-sm text-gray-700 md:w-[37.5rem]">
      {{ blogStore.blog.sneakPeak }}
    </p>

    <div class="w-[100%] h-[15.625rem] mx-[auto] my-12 md:w-[80%] md:h-[28rem]">
      <img
        :src="blogStore.blog.thumbnailUrl"
        :alt="blogStore.blog.topic"
        class="w-[100%] h-[100%] object-cover"
      />
    </div>

    <BlogStory />
  </div>
  <FootBar />
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useBlogStore } from "../stores/counter";

import NavBar from "../components/NavBar.vue";
import BlogStory from "../components/BlogStory.vue";
import FootBar from "../components/FootBar.vue";

export default {
  name: "BlogsView",
  setup() {
    const route = useRoute();
    const blogStore = useBlogStore();

    onMounted(async () => {
      // const blogStore = useBlogStore();
      await blogStore.getBlog(route.params.id);
      console.log("rererer", blogStore.blog.authorName);
    });
    return {
      route,
      blogStore,
    };
  },
  components: {
    NavBar,
    BlogStory,
    FootBar,
  },
};
</script>

<style>
</style>