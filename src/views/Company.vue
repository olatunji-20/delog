<template>
  <NavBar />
  <div class="border-4 border-red-400 w-[100%] h-[auto] py-12 px-4 md:p-12">
    <h1 class="font-bold text-3xl text-center">WE'RE BUILT FOR SOFTWARE TEAMS</h1>
    <p class="text-center pt-4 md:px-80">Our mission is to ensure teams can do their best work, no matter their size or 
      budget. We focus on the details of everything we do.</p>

    <hr class="border border-gray-300 my-8 mx-[auto] w-[80%]" />

    <h1 class="font-bold text-3xl text-center mt-20">MEET OUR TEAM</h1>
    <p class="text-center pt-4 md:px-64">Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that
      empowers you to do your best work.</p>
    <div class="border-4 border-purple-400 w-[100%] h-[auto] mx-auto mt-8 overflow-auto md:mt-12 md:p-4 md:w-[95%]">
      <Team :team="teamMembers" />
    </div>
  </div>
  <!-- COMPLETED SECTION -->
  <div class="border-2 border-green-500 w-[100%] h-[auto] mb-8 flex flex-col flex-wrap md:flex-row justify-center">
      <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
          <h1 class="font-bold text-5xl">7413</h1>
          <p>Shipment completed</p>
      </div>
      <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
          <h1 class="font-bold text-5xl">828</h1>
          <p>Satisfied customer</p>
      </div>
      <div class="border-2 border-blue-400 w-[100%] h-[auto] text-center py-12 md:w-[350px]">
          <h1 class="font-bold text-5xl">3</h1>
          <p>Years on the market</p>
      </div>
  </div>
  <!-- COMPLETED SECTION -->
  <OurWareHouse />
  <ShipDelog />
  <FootBar />
</template>

<script>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Team from '../components/Team.vue'
import OurWareHouse from '../components/OurWareHouse.vue'
import ShipDelog from '../components/ShipDelog.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'Company',
    setup() {
      const teamMembers = ref([
        {
          id: 1,
          name: "Olivia Rhye",
          position: "Founder & CEO",
          imageUrl: "/img/apple.png"
        },
        {
          id: 2,
          name: "Phoenix Baker",
          position: "Engineering Manager",
          imageUrl: "/img/apple.png"
        },
        {
          id: 3,
          name: "Lana Steiner",
          position: "Product Manager",
          imageUrl: "/img/apple.png"
        },
        {
          id: 4,
          name: "Demi Wilkinson",
          position: "Frontend Developer",
          imageUrl: "/img/apple.png"
        },
        {
          id: 5,
          name: "Candice Wu",
          position: "Backend Developer",
          imageUrl: "/img/apple.png"
        },
        {
          id: 6,
          name: "Natali Craig",
          position: "Product Designer",
          imageUrl: "/img/apple.png"
        },
        {
          id: 7,
          name: "Drew Cano",
          position: "UX Researcher",
          imageUrl: "/img/apple.png"
        },
        {
          id: 8,
          name: "Orlando Diggs",
          position: "Customer Success",
          imageUrl: "/img/apple.png"
        },
      ])
        return {
          teamMembers
        }
    },
    components: {
        NavBar,
        Team,
        OurWareHouse,
        ShipDelog,
        FootBar
    }
}
</script>

<style>

</style>