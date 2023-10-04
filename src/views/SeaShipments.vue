<template>
    <NavBar />
    <div class="bprder-8 border-red-600 w-[100%] h-[400px] py-12">
        <div class="border-2 border-green-500 w-[60px] h-[60px] my-4 mx-[auto] rounded-full md:h-[80px] md:w-[80px]"></div>
        <h1 class="font-bold text-3xl text-center">SEA SHIPMENTS</h1>
        <p class="text-center pt-4">Measure what matters with Untitled's easy-to use reports. You can filter, export and drilldown on the data in a couple clicks.</p>
    </div>
    <WedLove />
    <ShipDelog />
    <FootBar />  
</template>

<script>
import NavBar from '../components/NavBar.vue'
import WedLove from '../components/WedLove.vue'
import ShipDelog from '../components/ShipDelog.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'SeaShipments',
    setup() {

    },
    components: {
        NavBar,
        WedLove,
        ShipDelog,
        FootBar
    }

}
</script>

<style>

</style>