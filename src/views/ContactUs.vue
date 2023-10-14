<template>
    <NavBar />
    <div class="w-[100%] h-[auto] py-12 px-4 md:px-20 md:py-16">
        <h1 class="font-bold text-4xl">CONTACT US</h1>
        <p class="pt-2">Our friendly team would love to hear from you.</p>
        
        <div class="w-[100%] h-[auto] mt-4 mx-[auto] flex flex-col justify-between md:flex-row-reverse">
            <div class="w-[100%] h-[31.25rem] mt-4 mx-[auto] md:w-[41%] md:h-[34.375rem]">
                <img src="/img/apple.png" alt="sea-travel" class="w-[100%] h-[100%] object-cover" />
            </div>
            <div class="w-[100%] h-[auto] mt-4 mx-[auto] md:w-[45%]">
                <ContactForm />
            </div>
        </div>

    </div>
    <WedLove />
    <NewsLetter />
    <FootBar />  
</template>

<script>
import NavBar from '../components/NavBar.vue';
import ContactForm from '../components/ContactForm.vue';
import WedLove from '../components/WedLove.vue';
import NewsLetter from '../components/NewsLetter.vue';
import FootBar from '../components/FootBar.vue';

export default {
    name: 'ContactUs',
    setup() {

    },
    components: {
        NavBar,
        ContactForm,
        WedLove,
        NewsLetter,
        FootBar
    }

}
</script>

<style>

</style>