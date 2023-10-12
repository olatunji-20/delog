<template>
    <NavBar />
    <h1 class="font-bold text-5xl h-[700px]">{{ route.params.id }}</h1>
    <FootBar />
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

import NavBar from '../components/NavBar.vue';
import FootBar from '../components/FootBar.vue';

export default {
    name: 'BlogsView',
    setup() {
        const route = useRoute();
        onMounted(() => {
            console.log(route.params.id)
        })
        return {
            route
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