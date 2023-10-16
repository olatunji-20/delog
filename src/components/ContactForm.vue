<template>
  <div class="border-2 border-gray-100 shadow-lg w-[100%] h-[auto]">
    <form class="px-2 py-8">
      <label class="font-bold">First name</label>
      <input
        class="border w-[100%] py-3 indent-4 mt-3 mb-8 block rounded-md"
        placeholder="First name"
        type="text"
      />
      <label class="font-bold">Last name</label>
      <input
        class="border w-[100%] py-3 indent-4 mt-3 mb-8 rounded-md"
        placeholder="Last name"
        type="text"
      />
      <label class="font-bold block">Email</label>
      <input
        class="border w-[100%] py-3 indent-4 mt-3 mb-8 rounded-md"
        placeholder="you@company.com"
        type="email"
      />
      <label class="font-bold">Phone number</label>
      <input
        class="border w-[100%] py-3 indent-4 mt-3 mb-8 rounded-md"
        placeholder="+1 (555) 000 0000"
        type="tel"
      />
      <label class="font-bold">Message</label>
      <textarea
        class="border w-[100%] h-[7.5rem] indent-4 mt-3 mb-8 rounded-md"
        placeholder="Leave us a message..."
      ></textarea>
      <input class="border mt-6 mb-8 inline rounded-md" type="checkbox" />
      <p class="inline ml-3 text-sm">
        You agree to our friendly privacy policy
      </p>
      <button
        class="w-[100%] bg-blue-400 py-3 rounded-md text-white hover:bg-[#0063f7]"
      >
        Send message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  setup() {},
};
</script>

<style>
</style>