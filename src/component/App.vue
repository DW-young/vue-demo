<template>
    <main>
        <app-header></app-header>
        <app-swipe></app-swipe>
        <app-footer></app-footer>
    </main>
</template>
<script>
    import HomeComponent from './home/home.vue';
    export default {
        components: {
            'app-swipe': HomeComponent
        }
    }
</script>
<style scoped>

</style>
