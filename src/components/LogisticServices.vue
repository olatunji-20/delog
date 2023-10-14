<template>
  <div class="w-[100%] h-[auto] py-16">
    <h1 class="font-bold text-3xl text-center">LOGISTIC SERVICES</h1>
    <p class="text-center pt-4">No money, no problem. Untitled is a next-generation financial technology company in the process.</p>
    <div class="w-[100%] h-[auto] p-4 mt-12 justify-between flex flex-col flex-wrap md:flex-row md:p-20">
        <div class="w-[100%] h-[25rem] my-2 md:w-[30rem] md:h-[22.5rem]">
            <div class="w-[4.375rem] bg-[#edeff8] h-[4.375rem] mb-4 rounded-full p-4">
                <img src="/img/ship.svg" class="w-[100%] h-[100%] object-cover" />
            </div>
            <h2 class="font-bold text-2xl leading-12">Sea Shipments</h2>
            <p>measure what matters with untitled's easy-to-use reports. You can filter, export and drilldown on data in a couple clicks.</p>
            <div class="rounded-md text-[#0063f7] bg-blue-100 w-[100%] mt-4 py-2 pl-3">
                <div class="border inline-block relative mr-2">
                    <img src="/img/bars.svg" class="w-[100%] h-[100%] object-cover" />
                </div>
                <p class="inline-block">Full Container Loading</p>
            </div>
            <div class="rounded-md text-[#0063f7] bg-blue-100 w-[100%] mt-4 py-2 pl-3">
                <div class="border inline-block relative top-1 mr-2">
                    <img src="/img/box.svg" class="w-[100%] h-[100%] object-cover" />
                </div>
                <p class="inline-block">Less Container Loading</p>
            </div>
            <div class="border-2 border-[#0063f7] w-[100%] mt-6 py-2 text-center rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white">
                <router-link to="/sea-shipments"><p>Read More</p></router-link>
            </div>
        </div>
        <div class="border-2 border-gray-200 rounded-md w-[100%] h-[21.875rem] my-2 md:w-[28rem] overflow-hidden">
            <img src="/img/sea.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
        </div>
        <div class="border-2 border-gray-200 rounded-md w-[100%] h-[21.875rem] my-2 md:w-[28rem] md:mt-28 overflow-hidden">
            <img src="/img/flight.png" alt="flight-travel" class="w-[100%] h-[100%] object-cover duration-150 hover:scale-105" />
        </div>
        <div class="w-[100%] h-[21.875rem] my-2 md:w-[30rem] md:mt-28">
            <div class="bg-[#edeff8] w-[4.375rem] h-[4.375rem] mb-4 rounded-full p-4">
                <img src="/img/plane.svg" class="w-[100%] h-[100%] object-cover" />
            </div>
            <h2 class="font-bold text-2xl leading-12">Air Shipments</h2>
            <p>measure what matters with untitled's easy-to-use reports. You can filter, export and drilldown on data in a couple clicks.</p>
            
            <div class="border-2 border-[#0063f7] w-[100%] mt-8 py-2 text-center rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white">
                <router-link to="/air-shipments"><p>Read More</p></router-link>
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