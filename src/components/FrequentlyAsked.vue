<template>
  <div class="border-4 border-red-500 w-[100%] h-[auto]">
    <div class="border border-blue-300 w-[100%] h-[auto] p-6">
        <h1 class="font-bold text-3xl text-center">FREQUENTLY ASKED QUESTIONS</h1>
        <p class="text-center pt-4">Everything you need to know about the product and billing.</p>
    </div>
    <div class="border-4 border-green-400 w-[100%] h-[auto] text-center mt-8">
        <div class="border-4 flex flex-row justify-around flex-nowrap">
            <p class="inline-block font-bold text-md px-4 py-2 border">STANDARD SHIPPING</p>
            <p class="inline-block font-bold text-md px-4 py-2 border">DELOG PLUS</p>
        </div>
        <div class="border-4 border-red-400 w-[100%] h-[auto] mt-4 py-4">
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question1" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues1 ? '-' : '+'">
                </p>
                <p v-show="showQues1" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question2" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues2 ? '-' : '+'"></p>
                <p v-show="showQues2" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question3" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues3 ? '-' : '+'"></p>
                <p v-show="showQues3" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question4" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues4 ? '-' : '+'"></p>
                <p v-show="showQues4" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question5" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues5 ? '-' : '+'"></p>
                <p v-show="showQues5" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
            <div class="border border-green-400 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]">
                <p class="font-bold inline-block">Is there a free trial available?</p>
                <p @click="question6" class="border border-blue-500 font-bold text-2xl relative bottom-2 float-right inline-block" v-text="showQues6 ? '-' : '+'"></p>
                <p v-show="showQues6" class="border">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil doloremque fugit?</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'FrequentlyAsked',
    setup() {
        const showQues1 = ref(false)
        const showQues2 = ref(false)
        const showQues3 = ref(false)
        const showQues4 = ref(false)
        const showQues5 = ref(false)
        const showQues6 = ref(false)
        const question1 = () => {
            showQues1.value = !showQues1.value
        }
        const question2 = () => {
            showQues2.value = !showQues2.value
        }
        const question3 = () => {
            showQues3.value = !showQues3.value
        }
        const question4 = () => {
            showQues4.value = !showQues4.value
        }
        const question5 = () => {
            showQues5.value = !showQues5.value
        }
        const question6 = () => {
            showQues6.value = !showQues6.value
        }
        return {
            showQues1,
            question1,
            showQues2,
            question2,
            showQues3,
            question3,
            showQues4,
            question4,
            showQues5,
            question5,
            showQues6,
            question6
        }
    }

}
</script>

<style>

</style>