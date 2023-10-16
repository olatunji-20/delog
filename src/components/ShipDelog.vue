<template>
  <div
    class="w-[100%] h-[auto] bg-[#d8ddef] py-16 px-6 mb-20"
    data-aos="slide-up"
  >
    <h1 class="font-bold text-3xl text-center">
      SHIP WITH <span class="text-blue-500">DELOG</span>
    </h1>
    <p class="text-center pt-4">
      Be the first to know about releases, industry news and insights.
    </p>
    <div class="w-[90%] h-[auto] mx-[auto] my-6 md:w-[45%]">
      <div
        class="border-2 border-[#0063f7] bg-white w-[100%] h-[auto] py-2 text-center rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white md:w-[40%] md:inline-block"
      >
        <p>Get the price</p>
      </div>
      <div
        class="border-2 border-[#0063f7] w-[100%] h-[auto] py-2 text-center mt-4 bg-blue-500 text-white rounded-md cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white md:w-[40%] md:float-right md:mt-0 md:inline-block"
      >
        <div class="inline-block relative top-1 mr-2">
          <img src="/img/phone.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <p class="inline-block">Consultation</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});
export default {
  name: "ShipDelog",
  setup() {},
};
</script>

<style>
</style>