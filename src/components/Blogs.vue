<template>
  <div class="border-4 border-blue-500 w-[100%] h-[auto] flex flex-row flex-wrap justify-around">

    <div v-for="item in pageOfItems" :key="item.id" class="border-2 border-red-500 w-[350px] h-[360px] my-2">
      <div class="border border-purple-500 w-[100%] h-[200px] mb-4"></div>
      <p class="inline text-blue-400">{{ item.authorName }}</p> <p class="inline text-blue-400">. 21, may 2023</p>
      <p class="my-2 font-bold text-lg">UX review pesentation</p>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque sed eligendi cumque.</p>
    </div>
    <div class="border-2 border-red-800 w-[80%] h-[50px] mt-8">
      <jw-pagination :items="blogPosts"  @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import JwPagination from 'jw-vue-pagination';

export default {
  name: 'Blogs',
  setup() {
    const pageOfItems = ref([]);
    const blogPosts = ref([
      {
        id: 1,
        authorName: "Olirejgivia Rhye",
        date: "20, Jan 2022",
        topic: "UX review presentations",
        sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        thumbnailUrl: "/erver",
        writeUp: "lorem70"            
      },
      {
        id: 2,
        authorName: "Olivjerivervia Rhye",
        date: "20, Jan 2022",
        topic: "UX review presentations",
        sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        thumbnailUrl: "/erver",
        writeUp: "lorem70"            
      },
      {
        id: 3,
        authorName: "Ovirlivia Rhye",
        date: "20, Jan 2022",
        topic: "UX review presentations",
        sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        thumbnailUrl: "/erver",
        writeUp: "lorem70"            
      },
      {
        id: 4,
        authorName: "Olknvjerivia Rhye",
        date: "20, Jan 2022",
        topic: "UX review presentations",
        sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        thumbnailUrl: "/erver",
        writeUp: "lorem70"            
      }
      
    ])
    const onChangePage = (pageOfItems) => {
      pageOfItems.value = pageOfItems;
    } 
    return {
      blogPosts,
      pageOfItems,
      onChangePage
    }
  },
  components: {
    JwPagination
  }
}
</script>

<style>

</style>