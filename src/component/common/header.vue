<template>
    <header>
        <mt-header fixed title="mmb">
            <mt-button v-if="$route.path != '/index'" v-on:click="$router.go(-1)" icon="back" slot="left"></mt-button>
        </mt-header>
        <i></i>
    </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    i {
        display: block;
        height: 40px;
    }
</style>
