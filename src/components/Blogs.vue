<template>
  <div class="w-[100%] h-[auto] flex flex-row flex-wrap justify-around">
    <div v-for="item in displayedPosts" :key="item.id" data-aos="slide-up" class="border border-gray-300 rounded-lg w-[21.875rem] h-[21.875rem] my-2 relative duration-150 bottom-0 hover:bottom-1 hover:shadow-lg">
      <router-link :to="'/blogs-view/' + item.id">
        <div class="w-[100%] h-[200px] rounded-lg mb-5 overflow-hidden">
            <img :src="item.thumbnailUrl" :alt="item.topic" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
        </div>
        <p class="text-md text-blue-400 inline">{{ item.date }}</p>
        <p class="inline border border-blue-700 mx-2 rounded-full"></p>
        <p class="text-md text-blue-400 inline">{{ item.authorName }}</p>
        <h1 class="font-bold my-2">{{ item.topic }}</h1>
        <h1 class="text-sm text-gray-700">{{ item.sneakPeak }}</h1>
      </router-link>
    </div>
    <div class="w-[100%] h-[auto] mt-8 text-center">
      <vue-awesome-paginate
        :total-items="blogStore.blogs.length"
        :items-per-page="perPage"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useBlogStore } from '../stores/counter';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000
});

export default {
  name: 'Blogs',
  setup() {
    const blogStore = useBlogStore();
    blogStore.getBlogs();


    const currentPage = ref(1);
    const perPage = ref(9);
    const onClickHandler = (page) => {
      console.log(page)
    };
      const displayedPosts = computed(() => {
        const startIndex = perPage.value * (currentPage.value - 1);
        const endIndex = startIndex + perPage.value;
        return blogStore.blogs.slice(startIndex, endIndex);
      });

    return {
      currentPage,
      perPage,
      onClickHandler,
      blogStore,
      displayedPosts
    }
  },
  components: {}
}
</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
    border: 1px solid purple;
    margin: 0px auto;
  }
  .paginate-buttons {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>