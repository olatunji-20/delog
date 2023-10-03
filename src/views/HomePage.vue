<template>
    <NavBar />
    <Landing />
    <WedLove />
    <FrequentlyAsked />
    <NewsLetter />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Landing from '../components/Landing.vue'
import WedLove from '../components/WedLove.vue'
import FrequentlyAsked from '../components/FrequentlyAsked.vue'
import NewsLetter from '../components/NewsLetter.vue'
import FootBar from '../components/FootBar.vue'

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        Landing,
        WedLove,
        FrequentlyAsked,
        NewsLetter,
        FootBar
    }
}
</script>