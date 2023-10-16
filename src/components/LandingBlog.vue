<template>
  <div
    class="w-[59.375rem] h-[auto] flex flex-row flex-nowrap justify-between md:h-[15.3125rem] md:w-[100%]"
  >
    <div
      class="w-[16.875rem] relative h-[18.75rem] md:h-[14rem] md:w-[13.125rem]"
      v-for="blog in landingBlogs"
      :key="blog.id"
    >
      <router-link :to="'/blogs-view/' + blog.id">
        <div class="w-[100%] h-[10rem] md:h-[7.5rem] overflow-hidden">
          <img
            :src="blog.thumbnailUrl"
            :alt="blog.topic"
            class="w-[100%] h-[100%] object-cover duration-150 hover:scale-110"
          />
        </div>
        <p class="text-blue-400 text-sm pt-2">{{ blog.date }}</p>
        <p class="text-sm pt-3 font-bold leading-1">{{ blog.topic }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useBlogStore } from "../stores/counter";

export default {
  name: "LandingBlog",
  setup() {
    const blogStore = useBlogStore();
    blogStore.getBlogs();

    const landingBlogs = computed(() => {
      const randomBlogs = blogStore.blogs.sort(() => 0.5 - Math.random());
      return randomBlogs.slice(0, 3);
    });

    return {
      landingBlogs,
    };
  },
};
</script>

<style>
</style>