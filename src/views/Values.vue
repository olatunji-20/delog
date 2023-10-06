<template>
    <NavBar />
    <div class="border-4 border-red-400 w-[100%] h-[auto] py-12 px-4 md:p-16">
        <h1 class="font-bold text-3xl text-center">VALUES</h1>
        <p class="text-center pt-4 md:px-72">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
            Trusted by over 4,000 startups</p>

        <div class="border-4 border-purple-500 w-[100%] h-[auto] mt-12">
            <div class="border-4 border-green-800 w-[100%] h-[650px] mb-4 flex flex-col justify-between md:flex-row md:mb-12 md:h-[400px]">
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]"></div>
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]">            
                    <img src="/img/value3.png" alt="value3" class="w-[100%] h-[100%] object-cover" />
                </div>
            </div>
            <div class="border-4 border-green-800 w-[100%] h-[650px] mb-4 flex flex-col-reverse justify-between md:flex-row md:mb-12 md:h-[400px]">
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]">            
                    <img src="/img/value1.png" alt="value1" class="w-[100%] h-[100%] object-cover" />
                </div>
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]"></div>
            </div>
            <div class="border-4 border-green-800 w-[100%] h-[650px] mb-4 flex flex-col justify-between md:flex-row md:mb-12 md:h-[400px]">
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]"></div>
                <div class="border-2 border-blue-400 w-[100%] h-[300px] md:w-[44%] md:h-[100%]">            
                    <img src="/img/value2.png" alt="value2" class="w-[100%] h-[100%] object-cover" />
                </div>
            </div>
        </div>
    </div>
    <NewsLetter />
    <FootBar />
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
import NewsLetter from '../components/NewsLetter.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'Values',
    setup() {

    },
    components: {
        NavBar,
        NewsLetter,
        FootBar
    }
}
</script>

<style>

</style>