<template>
    <NavBar />
    <div class="bprder-8 border-red-600 w-[100%] h-[auto] py-12">
        <div class="border-2 border-green-500 w-[60px] h-[60px] my-4 mx-[auto] rounded-full md:h-[80px] md:w-[80px]"></div>
        <h1 class="font-bold text-3xl text-center">AIR SHIPMENTS</h1>
        <p class="text-center p-4">Measure what matters with Untitled's easy-to use reports. You can filter, export and drilldown on the data in a couple clicks.</p>
        

        <div class="border-4 border-green-800 w-[100%] h-[auto] p-2 mt-12 flex flex-col justify-between flex-wrap md:p-16 md-20 md:flex-row-reverse">
            <div class="border border-red-500 w-[100%] h-[300px] mx-[auto] md:w-[380px] md:h-[380px]">
                <img src="/img/flight.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover" />
            </div>
            <div class="border border-blue-500 w-[100%] h-[auto] mx-[auto] py-4 md:w-[580px] md:h-[auto]">
                <h3 class="font-bold text-xl pt-2">The following topics are studied:</h3>
                <p class="pt-2">Air shipment is a fast and convenient way of transporting goods over long distances. Air transport is irreplaceable if 
                    you need express delivery of urgent cargo, important documents, special purpose cargo, international air freight services are used when
                    transporting large volumes of cargo or equipment. Air cargo delivery is convenient in the case of trial batches of products, because the buyer
                    should first evaluate the feasibility of long-term cooperation with the supplier. Air freight was and remains the most expensive means of cargo transportation.
                    The advantages of air freight justify their cost.</p>
                <h3 class="font-bold text-xl pt-6">Maximum speed delivery</h3>
                <p class="pt-2">Through air shipment, cargo is transported faster than other means of transportation.</p>
                <h3 class="font-bold text-xl pt-6">Savings on packaging and customs fees</h3>
                <p class="pt-2">Even the simplest type of packaging is suitable for air freight, and the amount of tax can be calculated from the gross amount of freight, which
                    is much lower than sea freight.</p>
                <h3 class="font-bold text-xl pt-6">Broad geography of delivery</h3>
                <p class="pt-2">In the absence of road and rail connections, cargo can be transported to the most remote point of any country.</p>
                <h3 class="font-bold text-xl pt-6">Security and reliability of cargo transportation</h3>
                <p class="pt-2">Air transport is distinguished by a low frequency of incidents and accidents.</p>
                <h3 class="font-bold text-xl pt-6">Economy on warehousing services</h3>
                <p class="pt-2">For the most part, cargo is transported by air from the airport directly to the destination, which allows saving the cost neccesary for their storage.</p>
                <p class="pt-2">Based on systematic changes in air transport policies and regulations and dynamic service development, every company needs a reliable partner.
                    "Alagi" offers one of the most flexible range of cargo transportation on a global scale. Our company cooperates with more than 50 of the world's leading airlines 
                    in 30 countries, which allows us to provide our customers with the best services.</p>
                <p class="pt-2">Our growing list of partners and customers includes both market leaders and large, medium and small entrepreneurs.</p>
            </div>
        </div>
        
        <div class="border-4 border-red-500 w-[100%] h-[auto] py-12 flex flex-col flex-wrap md:flex-row justify-between">
            <div class="border-4 border-green-400 w-[100%] h-[auto] px-4 pt-8 md:w-[51%]">                   
                <h1 class="font-bold text-3xl text-center md:text-left">OUR WAREHOUSES</h1>
                <p class="text-center pt-4 md:text-left">No money, no problem. Untitled is a next-generation financial technology company in the process.</p>
                <div class="border-2 border-purple-400 w-[100%] h-[200px] mt-16 md:h-[220px] md:mt-8">image</div>
            </div>
            <div class="border-4 border-blue-400 w-[100%] h-[auto] md:w-[42%]">
                <div class="border border-red-400 w-[100%] h-[120px] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-blue-400 hover:text-white hover:shadow-lg">
                    <div class="border border-green-400 w-[30px] h-[40px]"></div>
                    <div class="border border-purple-400 w-[250px] mr-2 h-[100%] md:mr-20">
                        <h6 class="font-bold text-xl">Qingdao</h6>
                        <p class="text-sm pt-3">Mo He Lu, Huang Dao Qu, Qing Dao Shi, Shan Dong</p>
                    </div>
                    <div class="border border-blue-400 w-[40px] h-[40px] relative top-6"></div>
                </div>
                <div class="border border-red-400 w-[100%] h-[120px] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-blue-400 hover:text-white hover:shadow-lg">
                    <div class="border border-green-400 w-[30px] h-[40px]"></div>
                    <div class="border border-purple-400 w-[250px] mr-2 h-[100%] md:mr-20">
                        <h6 class="font-bold text-xl">Shanghai</h6>
                        <p class="text-sm pt-3">No. 1860, Shaochuan Road, Baoshan District, Shanghai</p>
                    </div>
                    <div class="border border-blue-400 w-[40px] h-[40px] relative top-6"></div>
                </div>
                <div class="border border-red-400 w-[100%] h-[120px] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-blue-400 hover:text-white hover:shadow-lg">
                    <div class="border border-green-400 w-[30px] h-[40px]"></div>
                    <div class="border border-purple-400 w-[250px] mr-2 h-[100%] md:mr-20">
                        <h6 class="font-bold text-xl">Shenzhen</h6>
                        <p class="text-sm pt-3">Meiyihang Sihang Warehouse, G5 Warehouse, Chiwan</p>
                    </div>
                    <div class="border border-blue-400 w-[40px] h-[40px] relative top-6"></div>
                </div>
            </div>
        </div>



    </div>
    <OurWarehouse />
    <WedLove />
    <ShipDelog />
    <FootBar />  
</template>

<script>
import NavBar from '../components/NavBar.vue'
import OurWarehouse from '../components/OurWarehouse.vue'
import WedLove from '../components/WedLove.vue'
import ShipDelog from '../components/ShipDelog.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'AirShipments',
    setup() {

    },
    components: {
        NavBar,
        OurWarehouse,
        WedLove,
        ShipDelog,
        FootBar
    }

}
</script>

<style>

</style>