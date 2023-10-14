<template>    
    <div class="border-2 border-purple-400 w-[950px] h-[auto] flex flex-row flex-nowrap justify-between md:h-[245px] md:w-[100%]">
        <div class="border-2 border-green-400 w-[270px] relative h-[300px] md:h-[240px] md:w-[210px]" v-for="blog in landingBlogs" :key="blog.id">
            <router-link :to="'/blogs-view/' + blog.id">
                <div class="border border-blue-400 w-[100%] h-[160px] md:h-[120px] overflow-hidden">
                    <img :src="blog.thumbnailUrl" :alt="blog.topic" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
                </div>
                <p class="text-blue-400 text-sm pt-2"> {{ blog.date }} {{ blog.id }}</p>
                <p class="text-sm pt-3 font-bold leading-1"> {{ blog.topic }} </p>
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useBlogStore } from '../stores/counter';

export default {
    name: 'LandingBlog',
    setup() {
        const blogStore = useBlogStore();
        blogStore.getBlogs();

        const landingBlogs = computed(() => {
            const randomBlogs = blogStore.blogs.sort(() => 0.5 - Math.random());
            return randomBlogs.slice(0, 3);
        });

        return {
            landingBlogs
        }



    }
}
</script>

<style>

</style>