<template>
  <NavBar />
  <div class="w-[100%] h-[auto] py-12">
    <div
      class="w-[3.75rem] h-[3.75rem] bg-[#edeff8] my-4 mx-[auto] p-4 rounded-full md:h-[5rem] md:w-[5rem]"
    >
      <img src="/img/ship.svg" class="w-[100%] h-[100%] object-cover" />
    </div>
    <h1 class="font-bold text-3xl text-center">SEA SHIPMENTS</h1>
    <p class="text-center p-4">
      Measure what matters with Untitled's easy-to use reports. You can filter,
      export and drilldown on the data in a couple clicks.
    </p>
    <div
      class="w-[90%] h-[auto] flex flex-col flex-wrap justify-between mt-4 mx-[auto] md:flex-row md:w-[60%]"
    >
      <div
        class="border-2 border-[#0063f7] w-[100%] pl-3 py-3 rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white md:w-[40%]"
      >
        <div class="border inline-block relative mr-2">
          <img src="/img/bars.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <p class="inline-block">Full Container Loading</p>
      </div>
      <div
        class="border-2 border-[#0063f7] w-[100%] mt-6 pl-3 py-3 rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white md:w-[40%] md:mt-0"
      >
        <div class="border inline-block relative top-1 mr-2">
          <img src="/img/box.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <p class="inline-block indent-3">Less Container Loading</p>
      </div>
    </div>

    <div
      class="w-[100%] h-[auto] p-2 mt-12 flex flex-col justify-between flex-wrap md:p-16 md-20 md:flex-row-reverse"
    >
      <div
        class="border-2 border-gray-300 rounded-md w-[100%] h-[18.75rem] mx-[auto] md:w-[23.75rem] md:h-[23.75rem]"
      >
        <img
          src="/img/sea.png"
          alt="sea-travel"
          class="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div class="w-[100%] h-[auto] mx-[auto] py-4 md:w-[36.25rem] md:h-[auto]">
        <h3 class="font-bold text-xl pt-2">
          The following topics are studied:
        </h3>
        <p class="pt-3">
          Ocean freight (or sea freight) is the most common form of transform
          for importers and exporters, accounting for 90% of goods transported
          globally. Sea transport is used to cover large distances and is
          suitable for non-prishable goods: generally, in fact, it is the most
          economical type of transport, but it is slower. The weather can vary
          from a few days to months, depending on the distance and the services
          available. A positive aspect is that with this type of transport it is
          possible to move large quantities of materiala compared to competitors
          by land and air, which have much more limited possibilities.
        </p>
        <p class="pt-3">
          Increasing difficulties are instead given by finding, once the goods
          have arrived in the port, an adequate connection network with the
          hinterland. However, sea transport remains the ideal vehicle for long
          distances and large international loads, of course, if the company has
          a turnover that covers the costs of the service.
        </p>
        <h3 class="font-bold text-xl pt-6">
          Short list of our shipping services:
        </h3>
        <ul class="pl-6 list-disc">
          <li class="">
            Transportation from all countries of the world to Poti and Batumi
            ports, and inland transport within the Transcaucasia
          </li>
          <li class="">Bulk cargo shipment</li>
          <li class="">
            Direct representative activity in Poti and Batumi ports
          </li>
          <li class="">Port services provision</li>
          <li class="">Securing of cargo both on ship and vehicles</li>
          <li class="">Cargo description and reporting</li>
          <li class="">
            Providing further transportation with our own car park
          </li>
          <li class="">Ferry shipping</li>
          <li class="">Preparing all shipping documents.</li>
        </ul>
        <p class="pt-3">
          Alagi gives you a wide choice of shipping in containers such as LCL
          (set cargo), FTL(full containers), temperature cargo and many thers.
          Our multi-year partnership with the world's leading sea lines gives
          you the opportunity to get the best prices and transit times for sea
          shipping.
        </p>
      </div>
    </div>
  </div>
  <OurWare />
  <WedLove />
  <ShipDelog />
  <FootBar />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import OurWare from "../components/OurWare.vue";
import WedLove from "../components/WedLove.vue";
import ShipDelog from "../components/ShipDelog.vue";
import FootBar from "../components/FootBar.vue";
export default {
  name: "SeaShipments",
  setup() {},
  components: {
    NavBar,
    OurWare,
    WedLove,
    ShipDelog,
    FootBar,
  },
};
</script>

<style>
</style>