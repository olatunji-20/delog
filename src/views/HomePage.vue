<template>
    <NavBar />
    <Landing />
    <LogisticServices />


    <!-- WHY DELOG SECTION -->


    <section class="bg-[#edeff8] w-[100%] h-[auto] pt-16 mb-20" data-aos="zoom-in">
        <h1 class="font-bold text-3xl text-center">WHY DELOG?</h1>
        <p class="text-center pt-4 px-4">We are not an ordinary logistics company, we are a team of professionals bringing innovative ideas
            to the logistics market of Georgia!</p>
        <p class="text-center pt-4 px-4">Here are some reasons why we are the best choice for your logistics needs.</p>
        <div class="w-[22rem] h-[34.375rem] mx-[auto] my-8 md:hidden">            
            <img src="/img/small.png" alt="why-delog" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="hidden md:block md:mx-[auto] w-[75%] h-[20rem] my-12">            
            <img src="/img/large.png" alt="why-delog" class="w-[100%] h-[100%] object-contain" />
        </div>

        <div class="bg-[#d8ddef] w-[100%] h-[auto] flex flex-col flex-wrap md:flex-row justify-center" data-aos="slide-up">
            <div class="md:border-r border-gray-400 w-[100%] h-[auto] text-center py-12 md:w-[21.875rem]">
                <h1 class="font-bold text-5xl">7413</h1>
                <p>Shipment completed</p>
            </div>
            <div class="md:border-r border-gray-400 w-[100%] h-[auto] text-center py-12 md:w-[21.875rem]">
                <h1 class="font-bold text-5xl">828</h1>
                <p>Satisfied customer</p>
            </div>
            <div class="w-[100%] h-[auto] text-center py-12 md:w-[21.875rem]">
                <h1 class="font-bold text-5xl">3</h1>
                <p>Years on the market</p>
            </div>
        </div>

    </section>


    <!-- WHY DELOG SECTION -->


    <OurWareHouse />
    <FrequentlyAsked />
    <NewsLetter />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Landing from '../components/Landing.vue';
import LogisticServices from '../components/LogisticServices.vue';
import OurWareHouse from '../components/OurWareHouse.vue';
import FrequentlyAsked from '../components/FrequentlyAsked.vue';
import NewsLetter from '../components/NewsLetter.vue';
import FootBar from '../components/FootBar.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000
});

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        Landing,
        LogisticServices,
        OurWareHouse,
        FrequentlyAsked,
        NewsLetter,
        FootBar
    }
}
</script>