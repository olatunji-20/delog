<template>
  <div class="w-[100%] bg-[#d8ddef] h-[auto] py-12 mb-20" data-aos="slide-up">
    <h1 class="font-bold text-3xl text-center">SIGN UP FOR OUR NEWSLETTER</h1>
    <p class="text-center pt-4">Be the first to know about releases, industry news and insights.</p>
    <div class="my-6 mx-auto w-[18.75rem] h-[auto] md:w-[31.25rem] md:h-[auto]">
        <input class="border border-gray-400 w-[100%] h-[2.5rem] rounded-md indent-3 mb-4 focus:outline-2 outline-gray-300 md:inline-block md:w-[75%] md:mb-0" placeholder="Enter your email" />
        <button class="bg-[#0063f7] block mx-[auto] w-[18.75rem] h-[2.5rem] rounded-md text-white md:inline-block float-right duration-150 hover:bg-white hover:text-[#0063f7] hover:border-2 border-[#0063f7] md:w-[20%]">Subscribe</button>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000
});
export default {

}
</script>

<style>

</style>