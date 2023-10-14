<template>
  <div class="border-2 border-blue-600 w-[100%] h-[auto] flex flex-wrap">
    <div class="border border-red-600 w-[100%] h-[100px] p-6 md:w-[20%]">
      <div class="border border-blue-500 w-[150px] h-[50px]">
        <img src="/img/delog-logo.svg" />
      </div>
    </div>
    <div class="border border-green-600 w-[100%] h-[auto] py-8 pl-6 md:w-[79%] pr-12">
      <ul class="md:float-right">
        <li class="leading-8 md:inline-block px-4 cursor-pointer relative left-0 duration-150 hover:left-2"><router-link to="/">Home</router-link></li>
        <li class="leading-8 md:inline-block px-4 cursor-pointer relative left-0 duration-150 hover:left-2"><router-link to="/sea-shipments">Services</router-link></li>
        <li class="leading-8 md:inline-block px-4 cursor-pointer relative left-0 duration-150 hover:left-2"><router-link to="/blog-post">Blog</router-link></li>
        <li class="leading-8 md:inline-block px-4 cursor-pointer relative left-0 duration-150 hover:left-2"><router-link to="/company">Company</router-link></li>
        <li class="leading-8 md:inline-block px-4 cursor-pointer relative left-0 duration-150 hover:left-2"><router-link to="/values">Values</router-link></li>
      </ul>
    </div>
    <div class="border-2 border-green-600 w-[100%] h-[auto] py-6">
      <p class="text-center">© 2023 DELOG. All rights reserved.</p>
      <div class="border border-yellow-300 w-[180px] h-[40px] flex justify-between my-4 mx-[auto]">
        <div class="border border-red-600 w-[40px] h-[40px] bg-gray-800 p-2 rounded-full cursor-pointer relative bottom-0 duration-150 hover:bottom-2">
          <img src="/img/twitter.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="border border-red-600 w-[40px] h-[40px] bg-gray-800 p-2 rounded-full cursor-pointer relative bottom-0 duration-150 hover:bottom-2">
          <img src="/img/linkedin.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="border border-red-600 w-[40px] h-[40px] bg-gray-800 p-2 rounded-full cursor-pointer relative bottom-0 duration-150 hover:bottom-2">
          <img src="/img/facebook.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>