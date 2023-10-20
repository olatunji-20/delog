<template>
  <div
    class="overflow-hidden w-[100%] h-[auto] py-12 flex flex-col flex-wrap md:flex-row justify-between md:px-4"
  >
    <div
      class="shadow-md w-[100%] h-[auto] px-4 pt-8 md:w-[51%]"
      data-aos="slide-left"
    >
      <h1 class="font-bold text-3xl text-center md:text-left">
        OUR WAREHOUSES
      </h1>
      <p class="text-center pt-4 md:text-left">
        No money, no problem. Untitled is a next-generation financial technology
        company in the process.
      </p>
      <div
        class="shadow-sm w-[100%] h-[15.625rem] mt-16 md:h-[15.625rem] md:mt-8"
      >
        <img
          src="/img/ware.png"
          alt="warehouse"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
    <div class="w-[100%] h-[auto] md:w-[42%]" data-aos="slide-right">
      <div
        class="border border-gray-300 rounded-md shadow-md w-[100%] h-[7.5rem] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-[#0063f7] hover:text-white hover:shadow-lg"
      >
        <div class="w-[2.5rem] h-[2.5rem] p-1">
          <img src="/img/location.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="w-[15.625rem] mr-2 h-[100%] md:mr-20">
          <h6 class="font-bold text-xl">Qingdao</h6>
          <p class="text-sm pt-3">
            Mo He Lu, Huang Dao Qu, Qing Dao Shi, Shan Dong
          </p>
        </div>
        <div class="w-[2.5rem] h-[2.5rem] relative top-6 p-2">
          <img src="/img/link.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
      <div
        class="border border-gray-300 rounded-md shadow-md w-[100%] h-[7.5rem] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-[#0063f7] hover:text-white hover:shadow-lg"
      >
        <div class="w-[2.5rem] h-[2.5rem] p-1">
          <img src="/img/location.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="w-[15.625rem] mr-2 h-[100%] md:mr-20">
          <h6 class="font-bold text-xl">Shanghai</h6>
          <p class="text-sm pt-3">
            No. 1860, Shaochuan Road, Baoshan District, Shanghai
          </p>
        </div>
        <div class="w-[2.5rem] h-[2.5rem] relative top-6 p-2">
          <img src="/img/link.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
      <div
        class="border border-gray-300 rounded-md shadow-md w-[100%] h-[7.5rem] p-4 my-4 flex flex-row flex-nowrap justify-between cursor-pointer duration-150 hover:bg-[#0063f7] hover:text-white hover:shadow-lg"
      >
        <div class="w-[2.5rem] h-[2.5rem] p-1">
          <img src="/img/location.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="w-[15.625rem] mr-2 h-[100%] md:mr-20">
          <h6 class="font-bold text-xl">Shenzhen</h6>
          <p class="text-sm pt-3">
            Meiyihang Sihang Warehouse, G5 Warehouse, Chiwan
          </p>
        </div>
        <div class="w-[2.5rem] h-[2.5rem] relative top-6 p-2">
          <img src="/img/link.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
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
  name: "OurWare",
  setup() {},
};
</script>

<style>
</style>