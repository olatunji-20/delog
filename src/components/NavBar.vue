<template>
    <div class="border-2 border-red-400 w-[100%] h-[5rem] flex justify-between py-4 px-6 md:px-12">
        <div class="border border-green-400 w-[150px] h-[50px]"></div>
        <div class="border border-yellow-400 w-[auto] h-[35px] mt-2 hidden md:inline">
            <ul>
                <li class="inline-block px-2 mx-4">Home</li>
                <li class="inline-block px-2 mx-4">Services</li>
                <li class="inline-block px-2 mx-4">Company</li>
                <li class="inline-block px-2 mx-4">News</li>
                <li class="inline-block px-2 mx-4">Blog</li>
            </ul>
        </div>
        <div class="border border-red-400 w-[50px] h-[50px] md:hidden"></div>
        <div class="border border-blue-400 w-[180px] h-[50px] hidden md:flex justify-between ">
            <div class="border border-red-400 w-[auto] h-[auto]">
                <p class="py-2 px-6">Contact</p>
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