<template>
  <div class="border-4 border-blue-500 w-[100%] h-[auto] flex flex-row flex-wrap justify-around">

    <div v-for="item in displayedRecords" :key="item.id" class="border-2 border-red-500 w-[350px] h-[360px] my-2">
      <h1>{{ item.authorName }}</h1>
      <h1>{{ item.date }}</h1>
      <h1>{{ item.topic }}</h1>
      <h1>{{ item.sneakPeak }}</h1>
    </div>
    <div class="border-2 border-red-800 w-[80%] h-[50px] mt-8">
      <vue-awesome-paginate
        :total-items="blogPosts.length"
        :items-per-page="3"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'Blogs',
  setup() {
    const currentPage = ref(1);
    const onClickHandler = (page) => {
      console.log(page)
    };
    const blogPosts = ref([
        {
          id: 1,
          authorName: "Olirejgivia 111 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 2,
          authorName: "Olivjerivervia 222 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 3,
          authorName: "wunmi 333 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 4,
          authorName: "sheriff 444 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 5,
          authorName: "Olirejgivia 555 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 6,
          authorName: "Olivjerivervia 666 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 7,
          authorName: "wunmi 777 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 8,
          authorName: "sheriff 888 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 9,
          authorName: "Olirejgivia 999 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 10,
          authorName: "Olivjerivervia 101010Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 11,
          authorName: "wunmi 111111 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        },
        {
          id: 12,
          authorName: "sheriff 11212 Rhye",
          date: "20, Jan 2022",
          topic: "UX review presentations",
          sneakPeak: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          thumbnailUrl: "/erver",
          writeUp: "lorem70"            
        }
      ])
    return {
      currentPage,
      onClickHandler,
      blogPosts
    }
  },
  computed: {
    displayedRecords() {
      // const startIndex = this.perPage * (this.page - 1);
      const startIndex = 3 * (this.currentPage - 1);
      // const endIndex = startIndex + this.perPage;
      const endIndex = startIndex + 2;
      return this.blogPosts.slice(startIndex, endIndex);
    }
  },
  components: {}
}
</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
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