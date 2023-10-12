<template>
    <NavBar />
    <h1 class="font-bold text-5xl h-[700px]">fugnur {{ blogStore.blog.authorName }}</h1>
    <FootBar />
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useBlogStore } from '../stores/counter';

import NavBar from '../components/NavBar.vue';
import FootBar from '../components/FootBar.vue';

export default {
    name: 'BlogsView',
    setup() {
        const route = useRoute();
        const blogStore = useBlogStore();

        onMounted(async () => {
            // const blogStore = useBlogStore();
            await blogStore.getBlog(route.params.id);
            console.log("rererer", blogStore.blog.authorName)
        })
        return {
            route,
            blogStore
        }
    },
    components: {
        NavBar,
        FootBar
    }

}
</script>

<style>

</style>