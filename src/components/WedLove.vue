<template>
  <div class="w-[100%] bg-[#edeff8] h-[auto] py-16">    
    <h1 class="font-bold text-3xl text-center px-6">WE'D LOVE TO HEAR FROM YOU</h1>
    <p class="text-center pt-4">Chat to our friendly team.</p>
    <div class="w-[100%] h-[auto] mt-12 flex flex-col md:flex-row justify-between md:px-12">
        <div class="rounded-md w-[95%] h-[250px] bg-white mx-[auto] relative my-4 p-4 cursor-pointer bottom-0 duration-200 hover:bottom-2 hover:shadow-lg md:w-[320px]">
          <div class="border border-gray-400 w-[80px] h-[80px] p-4 rounded-full">
            <img src="/img/sms.svg" class="w-[100%] h-[100%] object-cover" />
          </div>
          <div class="w-[90%] h-[auto] absolute bottom-0">
            <h3 class="font-bold">Email</h3>
            <p class="leading-8">Speak to our friendly team.</p>
            <h4 class="font-bold leading-10 text-blue-500">sales@untitledui.com</h4>
          </div>
        </div>
        <div class="rounded-md w-[95%] h-[250px] bg-white mx-[auto] relative my-4 p-4 cursor-pointer bottom-0 duration-200 hover:bottom-2 hover:shadow-lg md:w-[320px]">
          <div class="border border-gray-400 w-[80px] h-[80px] p-4 rounded-full">
            <img src="/img/location.svg" class="w-[100%] h-[100%] object-cover" />
          </div>
          <div class="w-[90%] h-[auto] absolute bottom-0">
            <h3 class="font-bold">Office</h3>
            <p class="leading-8">Visit our office HQ.</p>
            <h4 class="font-bold leading-10 text-blue-500">100 Smith Street Collingwood, VIC</h4>
          </div>
        </div>
        <div class="rounded-md w-[95%] h-[250px] bg-white mx-[auto] relative my-4 p-4 cursor-pointer bottom-0 duration-200 hover:bottom-2 hover:shadow-lg md:w-[320px]">
          <div class="border border-gray-400 bg-gray-300 w-[80px] h-[80px] p-4 rounded-full">
            <img src="/img/phone.svg" class="w-[100%] h-[100%] object-cover" />
          </div>
          <div class="w-[90%] h-[auto] absolute bottom-0">
            <h3 class="font-bold">Phone</h3>
            <p class="leading-8">Mon-Fri from 8am to 5pm.</p>
            <h4 class="font-bold leading-10 text-blue-500">+1 (555) 000-0000</h4>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'WedLove'

}
</script>

<style>

</style>