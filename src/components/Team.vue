<template>
  <div class="border-2 border-green-400 w-[2500px] h-[100%] flex flex-row justify-between md:flex-wrap md:w-[100%]">
    <div class="border-2 border-red-400 rounded-md w-[250px] h-[auto] p-4 md:my-6" v-for="member in team" :key="member.id">
        <div class="border-4 w-[70px] h-[70px] mx-[auto] rounded-full">
            <img :src="member.imageUrl" alt="flight-travel" class="w-[100%] h-[100%] rounded-full object-cover" />
        </div>
        <h2 class="font-bold mt-3 text-center">{{ member.name }}</h2>
        <p class="text-center text-blue-400">{{ member.position }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'Team',
    setup() {

    },
    props: {
        team: Array
    }

}
</script>

<style>

</style>