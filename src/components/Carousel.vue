<template>
    <swiper class="w-[100%] h-[100%] mx-[auto]"
        :modules="modules"
        :slides-per-page="1"
        :space-between="20"
        :loop="true"
        navigation
        :pagination="{clickable: true}"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }"
    >
        <swiper-slide v-for="image in carouselImages" :key="image" class="bg-[#dbdff0] w-[100%] h-[100%] mx-[auto]">
            <img :src="image" alt="landing page" class="w-[100%] h-[100%] object-cover" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import 'swiper/css/pagination'
import {ref} from 'vue'

export default {
    name: 'Carousel',
    setup() {
        const carouselImages = ref([
            '/img/container.png',
            // '/img/apple.png',
            '/img/flight.png',
            '/img/sea.png'
        ]);
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
            // modules:[Pagination, Autoplay],
            carouselImages,
            onSwiper,
            onSlideChange
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style>

</style>