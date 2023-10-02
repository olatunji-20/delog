<template>
    <NavBar />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from '../components/FootBar.vue'

export default {
    name: 'HomePage',
    setup() {
        
    },
    components: {
        NavBar,
        FootBar
    }
}
</script>