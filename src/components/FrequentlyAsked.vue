<template>
  <div class="border-4 border-red-500 w-[100%] h-[auto]">
    <div class="border border-blue-300 w-[100%] h-[auto] p-6 md:py-16">
        <h1 class="font-bold text-3xl text-center">FREQUENTLY ASKED QUESTIONS</h1>
        <p class="text-center pt-4">Everything you need to know about the product and billing.</p>
    </div>
    <div class="border-4 border-green-400 w-[100%] h-[auto] text-center mt-8">
        <div class="border-4 flex flex-row justify-around flex-nowrap">
            <p v-on:click="standard" :class="showThis === 'shipping' ? 'active' : 'non-active'" class="cursor-pointer inline-block font-bold text-md px-4 py-2 border">STANDARD SHIPPING</p>
            <p v-on:click="delogPlus" :class="showThis === 'delogplus' ? 'active' : 'non-active'" class="cursor-pointer inline-block font-bold text-md px-4 py-2 border">DELOG PLUS</p>
        </div>
        <div class="border-4 border-red-400 w-[100%] h-[auto] mt-4 py-4">
            <StandardShipping v-if="showThis === 'shipping'" />
            <DelogPlus v-if="showThis === 'delogplus'" />
        </div>
    </div>
  </div>
</template>

<script>
import StandardShipping from './StandardShipping.vue';
import DelogPlus from './DelogPlus.vue';
import { ref } from 'vue'

export default {
    name: 'FrequentlyAsked',
    setup() {
        const showThis = ref("shipping");
        const active = ref("active")

        const delogPlus = () => {
            showThis.value = "delogplus"
        }
        const standard = () => {
            showThis.value = "shipping"
        }
        return {
            showThis,
            delogPlus,
            standard
        }
    },
    components: {
        StandardShipping,
        DelogPlus
    }

}
</script>

<style>
.active {
    border-bottom: 3px solid green;
}
.non-active {
  border-top: 2px solid blue;
}
</style>