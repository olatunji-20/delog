<template>
    <NavBar />
    <Landing />
    <LogisticServices />


    <!-- WHY DELOG SECTION -->


    <section class="border-4 border-purple-500 w-[100%] h-[auto] py-16">
        <h1 class="font-bold text-3xl text-center">WHY DELOG?</h1>
        <p class="text-center pt-4 px-4">We are not an ordinary logistics company, we are a team of professionals bringing innovative ideas
            to the logistics market of Georgia!</p>
        <p class="text-center pt-4 px-4">Here are some reasons why we are the best choice for your logistics needs.</p>
        <div class="border-2 border-red-300 w-[22rem] h-[550px] mx-[auto] my-8 md:hidden">            
            <img src="/img/sea.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="border-2 border-red-600 hidden md:block md:mx-[auto] w-[75%] h-[320px] my-12">            
            <img src="/img/large.png" alt="sea-travel" class="w-[100%] h-[100%] object-contain" />
        </div>

        <div class="border-2 border-green-500 w-[100%] h-[auto] mb-8 flex flex-col flex-wrap md:flex-row justify-center">
            <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
                <h1 class="font-bold text-5xl">7413</h1>
                <p>Shipment completed</p>
            </div>
            <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
                <h1 class="font-bold text-5xl">828</h1>
                <p>Satisfied customer</p>
            </div>
            <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
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
    <ShipDelog />
    <WedLove />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Landing from '../components/Landing.vue'
import LogisticServices from '../components/LogisticServices.vue'
import ShipDelog from '../components/ShipDelog.vue'
import OurWareHouse from '../components/OurWareHouse.vue'
import WedLove from '../components/WedLove.vue'
import FrequentlyAsked from '../components/FrequentlyAsked.vue'
import NewsLetter from '../components/NewsLetter.vue'
import FootBar from '../components/FootBar.vue'

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        Landing,
        LogisticServices,
        ShipDelog,
        OurWareHouse,
        WedLove,
        FrequentlyAsked,
        NewsLetter,
        FootBar
    }
}
</script>