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
        <div class="border-4 border-red-600 hidden md:block md:mx-[auto] w-[75%] h-[350px] my-12">            
            <img src="/img/flight.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover" />
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

        <div class="border-2 border-red-500 w-[100%] h-[auto] py-12 flex flex-col flex-wrap md:flex-row justify-between">
            <div class="border-4 border-green-400 w-[100%] h-[auto] py-8 md:w-[51%]">                   
                <h1 class="font-bold text-3xl text-center md:text-left pl-4">OUR WAREHOUSES</h1>
                <p class="text-center pt-4 px-4 md:text-left">No money, no problem. Untitled is a next-generation financial technology company in the process.</p>
                <div class="border-2 border-purple-400 w-[100%] h-[200px] mt-16 md:h-[300px] md:mt-8">image</div>
            </div>
            <div class="border-4 border-blue-400 w-[100%] h-[auto] md:w-[42%]">
                <div class="border-2 border-red-400 w-[100%] h-[130px] my-4"></div>
                <div class="border-2 border-red-400 w-[100%] h-[130px] my-4"></div>
                <div class="border-2 border-red-400 w-[100%] h-[130px] my-4"></div>
            </div>
        </div>
    </section>


    <!-- WHY DELOG SECTION -->


    <ShipDelog />
    <WedLove />
    <FrequentlyAsked />
    <NewsLetter />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Landing from '../components/Landing.vue'
import LogisticServices from '../components/LogisticServices.vue'
import ShipDelog from '../components/ShipDelog.vue'
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
        WedLove,
        FrequentlyAsked,
        NewsLetter,
        FootBar
    }
}
</script>