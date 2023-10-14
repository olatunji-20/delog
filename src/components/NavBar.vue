<template>
    <div class="border-gray-300 w-[100%] h-[6rem] shadow-lg border-b-2 bg-[#edeff8] flex justify-between py-5 px-6 md:px-12">
        <router-link to="/">
            <div class="w-[9.375rem] h-[3.125rem]">
                <img src="/img/delog-logo.svg" />
            </div>
        </router-link>
        <div class="w-[auto] h-[auto] mt-2 hidden md:inline">
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
        <div @click="showMenu" class="w-[3.125rem] h-[3.125rem] rounded-lg md:hidden">
            <img src="/img/button.svg" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="w-[11.25rem] h-[3.125rem] hidden md:flex justify-between ">
            <div class="border border-[#0063f7] w-[auto] h-[auto] rounded-md text-[#0063f7] cursor-pointer duration-200 hover:bg-[#0063f7] hover:text-white">
                <router-link to="/contact-us"><p class="py-2 px-6">Contact</p></router-link>
            </div>
            <div class="border border-gray-400 w-[2.8125rem] h-[3.125rem] p-1">            
                <img src="/img/group.svg" alt="flag" class="w-[100%] h-[100%] rounded-full object-cover" />
            </div>

        </div>
    </div>
    <div v-show="menu" class="border-2 border-gray-400 w-[250px] h-[350px] py-4 absolute bg-gray-200 right-0 z-10 md:hidden">
        <ul class="text-xl">
            <li class="leading-8 hover:bg-gray-100"><router-link to="/">Home</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/sea-shipments">Sea Shipments</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/air-shipments">Air Shipments</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/blog-post">Blog</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/company">Company</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/values">Values</router-link></li>
            <li class="leading-8 hover:bg-gray-100"><router-link to="/contact-us">Contact</router-link></li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'NavBar',
    setup() {
        const menu = ref(false);

        const showMenu = () => {
            menu.value = !menu.value;
        }

        return {
            menu,
            showMenu
        }
    }
}
</script>

<style scoped>
</style>