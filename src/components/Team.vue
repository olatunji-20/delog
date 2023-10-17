<template>
  <div
    class="w-[156rem] h-[100%] flex flex-row justify-between md:flex-wrap md:w-[100%] mx-[auto]"
  >
    <div
      class="border border-gray-100 rounded-md w-[15.265rem] h-[auto] p-4 md:my-6 duration-150 cursor-pointer hover:scale-105 hover:shadow-lg"
      v-for="member in team"
      :key="member.id"
    >
      <div
        class="border-4 w-[4.375rem] h-[4.375rem] mx-[auto] rounded-full"
        data-aos="slide-down"
      >
        <img
          :src="member.imageUrl"
          alt="flight-travel"
          class="w-[100%] h-[100%] rounded-full object-cover"
        />
      </div>
      <h2 class="font-bold mt-3 text-center">{{ member.name }}</h2>
      <p class="text-center text-blue-400">{{ member.position }}</p>
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
  name: "Team",
  setup() {},
  props: {
    team: Array,
  },
};
</script>

<style>
</style>