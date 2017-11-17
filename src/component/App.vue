<template>
    <main>
        <p>{{ msg }}</p>
    </main>
</template>

<script>
export default {
    data() {
        return {
            msg: '测试vue是否可用'
        };
    }
}
</script>

<style scoped>
    p {
        font-size: 30px;
        color: yellowgreen;
    }
</style>
