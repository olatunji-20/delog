<template>
  <div class="w-[100%] h-[auto]">
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">
        Is STANDARD there a free trial available?
      </p>
      <p
        @click="question1"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues1 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues1" class="border relative top-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">Is there a free trial available?</p>
      <p
        @click="question2"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues2 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues2" class="border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">Is there a free trial available?</p>
      <p
        @click="question3"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues3 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues3" class="border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">Is there a free trial available?</p>
      <p
        @click="question4"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues4 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues4" class="border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">Is there a free trial available?</p>
      <p
        @click="question5"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues5 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues5" class="border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
    <div
      class="border border-gray-200 w-[95%] h-[auto] mx-auto my-4 text-left md:w-[60%]"
    >
      <p class="font-bold inline-block">Is there a free trial available?</p>
      <p
        @click="question6"
        class="cursor-pointer font-bold text-2xl relative bottom-2 float-right inline-block"
        v-text="showQues6 ? '-' : '+'"
      ></p>
      <transition
        enter-active-class="transition duration-[1000ms]"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-1"
        leave-active-class="transition duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="-translate-y-full opacity-0"
      >
        <p v-show="showQues6" class="border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil
          doloremque fugit?
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "StandardShipping",
  setup() {
    const showQues1 = ref(false);
    const showQues2 = ref(false);
    const showQues3 = ref(false);
    const showQues4 = ref(false);
    const showQues5 = ref(false);
    const showQues6 = ref(false);
    const question1 = () => {
      showQues1.value = !showQues1.value;
    };
    const question2 = () => {
      showQues2.value = !showQues2.value;
    };
    const question3 = () => {
      showQues3.value = !showQues3.value;
    };
    const question4 = () => {
      showQues4.value = !showQues4.value;
    };
    const question5 = () => {
      showQues5.value = !showQues5.value;
    };
    const question6 = () => {
      showQues6.value = !showQues6.value;
    };
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
      question6,
    };
  },
};
</script>

<style>
</style>