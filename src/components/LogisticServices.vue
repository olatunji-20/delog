<template>
  <div class="border-4 border-green-500 w-[100%] h-[auto] py-16">
    <h1 class="font-bold text-3xl text-center">LOGISTIC SERVICES</h1>
    <p class="text-center pt-4">No money, no problem. Untitled is a next-generation financial technology company in the process.</p>
    <div class="border-2 border-red-400 w-[100%] h-[auto] p-4 mt-12 justify-around flex flex-col flex-wrap md:flex-row md:px-20">
        <div class="border-2 border-green-400 w-[100%] h-[400px] my-2 md:w-[30rem] md:h-[360px]">
            <div class="border border-blue-500 w-[70px] h-[70px] mb-4 rounded-full p-4">
                <img src="/img/ship.svg" class="w-[100%] h-[100%] object-cover" />
            </div>
            <h2 class="font-bold text-2xl leading-12">Sea Shipments</h2>
            <p>measure what matters with untitled's easy-to-use reports. You can filter, export and drilldown on data in a couple clicks.</p>
            <div class="border border-red-400 bg-blue-100 w-[100%] mt-4 py-2 pl-3">
                <div class="border inline-block relative mr-2">
                    <img src="/img/bars.svg" class="w-[100%] h-[100%] object-cover" />
                </div>
                <p class="inline-block">Full Container Loading</p>
            </div>
            <div class="border border-red-400 bg-blue-100 w-[100%] mt-4 py-2 pl-3">
                <div class="border inline-block relative top-1 mr-2">
                    <img src="/img/box.svg" class="w-[100%] h-[100%] object-cover" />
                </div>
                <p class="inline-block">Less Container Loading</p>
            </div>
            <div class="border-2 border-blue-400 w-[100%] mt-6 py-3 text-center rounded-md">
                <router-link to="/sea-shipments"><p class="text-blue-400">Read More</p></router-link>
            </div>
        </div>
        <div class="border-2 border-green-400 w-[100%] h-[350px] my-2 md:w-[28rem] overflow-hidden">
            <img src="/img/sea.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
        </div>
        <div class="border-2 border-green-400 w-[100%] h-[350px] my-2 md:w-[28rem] overflow-hidden">
            <img src="/img/flight.png" alt="flight-travel" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
        </div>
        <div class="border-2 border-green-400 w-[100%] h-[350px] my-2 md:w-[30rem]">
            <div class="border border-blue-500 w-[70px] h-[70px] mb-4 rounded-full p-4">
                <img src="/img/plane.svg" class="w-[100%] h-[100%] object-cover" />
            </div>
            <h2 class="font-bold text-2xl leading-12">Air Shipments</h2>
            <p>measure what matters with untitled's easy-to-use reports. You can filter, export and drilldown on data in a couple clicks.</p>
            
            <div class="border-2 border-blue-400 w-[100%] mt-8 py-3 text-center rounded-md">
                <router-link to="/air-shipments"><p class="text-blue-400">Read More</p></router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>