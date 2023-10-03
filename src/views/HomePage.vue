<template>
    <NavBar />
    <Landing />
    <FrequentlyAsked />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Landing from '../components/Landing.vue'
import FrequentlyAsked from '../components/FrequentlyAsked.vue'
import FootBar from '../components/FootBar.vue'

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        Landing,
        FrequentlyAsked,
        FootBar
    }
}
</script>