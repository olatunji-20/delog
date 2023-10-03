<template>
    <NavBar />
    <Landing />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Landing from '../components/Landing.vue'
import FootBar from '../components/FootBar.vue'

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        Landing,
        FootBar
    }
}
</script>