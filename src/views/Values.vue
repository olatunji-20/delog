<template>
  <NavBar />
  <div class="w-[100%] h-[auto] py-12 px-4 md:p-16">
    <h1 class="font-bold text-3xl text-center">VALUES</h1>
    <p class="text-center pt-4 md:px-72">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups
    </p>

    <div class="w-[100%] h-[auto] mt-20">
      <div
        class="w-[100%] h-[auto] mb-4 flex flex-col justify-between md:flex-row md:mb-12 md:h-[25rem]"
      >
        <div
          class="w-[100%] h-[auto] px-2 py-8 md:py-2 md:w-[44%] md:h-[100%]"
          data-aos="fade-in"
        >
          <div
            class="bg-[#edeff8] p-2 w-[3.75rem] h-[3.75rem] rounded-full my-4"
          >
            <img
              src="/img/chart-breakout.svg"
              alt="flag"
              class="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h2 class="font-bold my-4 text-2xl">Responsibility</h2>
          <p class="text-sm">
            Responsibility - the ability of the subject (person, group of people
            or organization) to adequately respond to the result (by his own
            actions or inactions) that he was assigned or took upon himself.
          </p>
          <p class="pt-4 text-sm">
            "The word 'accident' was coined to cover up their own incompetence
            and avoid responsibility."
          </p>
          <ul class="list-disc relative left-4 top-4">
            <li class="font-bold text-sm">International experience</li>
            <li class="font-bold text-sm">Automation and flexibility</li>
            <li class="font-bold text-sm">Fulfillment of the agreed issue</li>
          </ul>
        </div>
        <div
          class="w-[100%] rounded-lg h-[18.75rem] md:w-[44%] md:h-[100%]"
          data-aos="fade-up"
        >
          <img
            src="/img/value3.png"
            alt="value3"
            class="w-[100%] h-[100%] rounded-lg object-cover"
          />
        </div>
      </div>
      <div
        class="w-[100%] h-[auto] mb-4 flex flex-col-reverse justify-between md:flex-row md:mb-12 md:h-[25rem]"
      >
        <div
          class="w-[100%] h-[18.75rem] rounded-lg md:w-[44%] md:h-[100%]"
          data-aos="fade-up"
        >
          <img
            src="/img/value1.png"
            alt="value1"
            class="w-[100%] h-[100%] rounded-lg object-cover"
          />
        </div>
        <div
          class="w-[100%] h-[auto] px-2 py-8 md:py-2 md:w-[44%] md:h-[100%]"
          data-aos="fade-in"
        >
          <div
            class="bg-[#edeff8] p-2 w-[3.75rem] h-[3.75rem] rounded-full my-4"
          >
            <img
              src="/img/zap-fast.svg"
              alt="flag"
              class="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h2 class="font-bold my-4 text-2xl">Sincerity</h2>
          <p class="text-sm">
            It is the moral quality of expressing truth, simplicity, honesty,
            without hypocrisy and ulteror motives.
          </p>
          <p class="pt-4 text-sm">"We only sell what we can be proud of"</p>
          <ul class="list-disc relative left-4 top-4">
            <li class="font-bold text-sm">Don't promise what you can't do</li>
            <li class="font-bold text-sm">
              We cooperate with clients for whom real
            </li>
            <li class="font-bold text-sm">
              In a business relationship, you should speak openly and honestly
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-[100%] h-[auto] mb-4 flex flex-col justify-between md:flex-row md:mb-12 md:h-[25rem]"
      >
        <div
          class="w-[100%] h-[auto] px-2 py-8 md:py-2 md:w-[44%] md:h-[100%]"
          data-aos="fade-in"
        >
          <div
            class="bg-[#edeff8] p-2 w-[3.75rem] h-[3.75rem] rounded-full my-4"
          >
            <img
              src="/img/message-chat.svg"
              alt="flag"
              class="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h2 class="font-bold my-4 text-2xl">Credibility and Reputation</h2>
          <p class="text-sm">
            The ability to fulfill obligations, (according to the agreement)
            reputation in relation to the brand, reliability.
          </p>
          <p class="pt-4 text-sm">
            In the information environment, decision-making is becoming more and
            more difficult, what is associated with the companyin the eyes of
            consumers dominates decision-making, our goal is for this
            association to be reliable which is formed on the basis of mutual
            respect and trust between counterparties, reputation is the basis of
            all successful business operations.
          </p>
          <ul class="list-disc relative left-4 top-4">
            <li class="font-bold text-sm">We have strict self-control</li>
            <li class="font-bold text-sm">
              We have experienced and reliable partners.
            </li>
          </ul>
        </div>
        <div
          class="w-[100%] h-[18.75rem] rounded-lg md:w-[44%] md:h-[100%]"
          data-aos="fade-up"
        >
          <img
            src="/img/value2.png"
            alt="value2"
            class="w-[100%] h-[100%] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <NewsLetter />
  <FootBar />
</template>
  
<script>
import NavBar from "../components/NavBar.vue";
import NewsLetter from "../components/NewsLetter.vue";
import FootBar from "../components/FootBar.vue";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});
export default {
  name: "Values",
  setup() {},
  components: {
    NavBar,
    NewsLetter,
    FootBar,
  },
};
</script>

<style>
</style>