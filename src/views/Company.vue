<template>
  <NavBar />
  <div class="w-[100%] h-[auto] py-12 px-4 md:p-12">
    <h1 class="font-bold text-3xl text-center">WE'RE BUILT FOR SOFTWARE TEAMS</h1>
    <p class="text-center pt-4 md:px-80" data-aos="slide-left">Our mission is to ensure teams can do their best work, no matter their size or 
      budget. We focus on the details of everything we do.</p>

    <hr class="border border-gray-300 my-8 mx-[auto] w-[80%]" />

    <h1 class="font-bold text-3xl text-center mt-20" data-aos="fade-in">MEET OUR TEAM</h1>
    <p class="text-center pt-4 md:px-64" data-aos="slide-right">Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that
      empowers you to do your best work.</p>
    <div class="w-[100%] h-[auto] mx-auto mt-8 overflow-auto md:mt-12 md:p-2 md:w-[95%]">
      <Team :team="blogStore.teamMembers" />
    </div>
  </div>
  <!-- COMPLETED SECTION -->
  <div class="w-[100%] h-[auto] bg-[#d8ddef] mb-8 flex flex-col flex-wrap md:flex-row justify-center" data-aos="slide-up">
      <div class="border-gray-400 w-[100%] md:border-r h-[auto] text-center py-12 md:w-[21.875rem]">
          <h1 class="font-bold text-5xl">7413</h1>
          <p>Shipment completed</p>
      </div>
      <div class="border-gray-400 w-[100%] md:border-r h-[auto] text-center py-12 md:w-[21.875rem]">
          <h1 class="font-bold text-5xl">828</h1>
          <p>Satisfied customer</p>
      </div>
      <div class="border-gray-400 w-[100%] h-[auto] text-center py-12 md:w-[21.875rem]">
          <h1 class="font-bold text-5xl">3</h1>
          <p>Years on the market</p>
      </div>
  </div>
  <!-- COMPLETED SECTION -->
  <OurWare />
  <ShipDelog />
  <FootBar />
</template>

<script>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Team from '../components/Team.vue'
import OurWare from '../components/OurWare.vue'
import ShipDelog from '../components/ShipDelog.vue'
import FootBar from '../components/FootBar.vue'
import { useBlogStore } from '../stores/counter'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000
});
export default {
    name: 'Company',
    setup() {
      const blogStore = useBlogStore();
      blogStore.getTeamMembers();

        return {
          blogStore
        }
    },
    components: {
        NavBar,
        Team,
        OurWare,
        ShipDelog,
        FootBar
    }
}
</script>

<style>

</style>