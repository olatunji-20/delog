<template>
    <div class="border-2 border-red-400 w-[100%] h-[6rem] flex justify-between py-5 px-6 md:px-12">
        <router-link to="/">
            <div class="border border-green-400 w-[150px] h-[50px]">
                <img src="/img/delog-logo.svg" />
            </div>
        </router-link>
        <div class="border border-yellow-400 w-[auto] h-[auto] mt-2 hidden md:inline">
            <ul class="flex flex-row justify-between">
                <li class="mx-6 relative top-0 duration-150 cursor-pointer hover:top-1"><router-link to="/">Home</router-link></li>
                <li class="group mx-6 relative top-0 duration-150 cursor-pointer hover:top-1">Services s
                    <ul class="mt-3 bg-gray-100 invisible border shadow-md group-hover:visible">
                        <li class="py-1 text-sm hover:bg-gray-50"><router-link to="/sea-shipments">Sea Shipments</router-link></li>
                        <li class="py-1 text-sm hover:bg-gray-50"><router-link to="/air-shipments">Air Shipments</router-link></li>
                    </ul>
                </li>
                <li class="mr-6 relative top-0 duration-150 cursor-pointer hover:top-1"><router-link to="/blog-post">Blog</router-link></li>
                <li class="mx-6 relative top-0 duration-150 cursor-pointer hover:top-1"><router-link to="/company">Company</router-link></li>
                <li class="mx-6 relative top-0 duration-150 cursor-pointer hover:top-1"><router-link to="/values">Values</router-link></li>
            </ul>
        </div>
        <div class="border border-red-400 w-[50px] h-[50px] md:hidden"></div>
        <div class="border border-blue-400 w-[180px] h-[50px] hidden md:flex justify-between ">
            <div class="border border-red-400 w-[auto] h-[auto]">
                <router-link to="/contact-us"><p class="py-2 px-6">Contact</p></router-link>
            </div>
            <div class="border border-red-400 w-[45px] h-[50px]"></div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    setup() {

    }
}
</script>

<style scoped>
</style>