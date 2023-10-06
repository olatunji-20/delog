<template>
  <NavBar />
  <div class="border-4 border-red-400 w-[100%] h-[600px]"></div>
  <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'Company',
    setup: {

    },
    components: {
        NavBar,
        FootBar
    }
}
</script>

<style>

</style>