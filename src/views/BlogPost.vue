<template>
    <NavBar />
    <div class="border-4 border-red-400 w-[100%] h-[600px]">
        <h1>BLOG POST O</h1>
    </div>
    <FootBar />
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  import FootBar from '../components/FootBar.vue'
  export default {
      name: 'BlogPost',
      setup: {
  
      },
      components: {
          NavBar,
          FootBar
      }
  }
  </script>
  
  <style>
  
  </style>