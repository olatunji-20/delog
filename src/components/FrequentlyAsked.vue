<template>
  <div class="w-[100%] h-[auto] mb-20">
    <div class="bg-[#161f33] text-white w-[100%] h-[auto] p-6 md:py-16">
      <h1 class="font-bold text-3xl text-center">FREQUENTLY ASKED QUESTIONS</h1>
      <p class="text-center pt-4">
        Everything you need to know about the product and billing.
      </p>
    </div>
    <div
      class="w-[100%] h-[auto] bg-[#edeff8] text-center pt-8 overflow-hidden"
    >
      <div class="border-2 flex flex-row justify-around flex-nowrap">
        <p
          v-on:click="standard"
          :class="showThis === 'shipping' ? 'active' : 'non-active'"
          class="cursor-pointer inline-block font-bold text-md px-4 py-2 border"
        >
          STANDARD SHIPPING
        </p>
        <p
          v-on:click="delogPlus"
          :class="showThis === 'delogplus' ? 'active' : 'non-active'"
          class="cursor-pointer inline-block font-bold text-md px-4 py-2 border"
        >
          DELOG PLUS
        </p>
      </div>
      <div class="w-[auto] h-[18.75rem] overflow-hidden mt-4 py-4">
        <transition
          enter-active-class="transition duration-[1500ms]"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-[1500ms]"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <StandardShipping v-if="showThis === 'shipping'" />
        </transition>
        <transition
          enter-active-class="transition duration-[1500ms]"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-[1500ms]"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <DelogPlus v-if="showThis === 'delogplus'" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import StandardShipping from "./StandardShipping.vue";
import DelogPlus from "./DelogPlus.vue";
import { ref } from "vue";

export default {
  name: "FrequentlyAsked",
  setup() {
    const showThis = ref("shipping");
    const active = ref("active");

    const delogPlus = () => {
      showThis.value = "delogplus";
    };
    const standard = () => {
      showThis.value = "shipping";
    };
    return {
      showThis,
      delogPlus,
      standard,
    };
  },
  components: {
    StandardShipping,
    DelogPlus,
  },
};
</script>

<style>
.active {
  border-bottom: 3px solid grey;
}
.non-active {
  border-top: 3px solid darkblue;
}
</style>