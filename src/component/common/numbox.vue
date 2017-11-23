<template>
    <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click="sub()">-</button>
          	<input class="mui-input-numbox" type="number" v-model="val">
          	<button class="mui-btn mui-btn-numbox-plus" @click="add()">+</button>
        </div>
</template>
<script>
export default {
    props: ['initVal'],
    data() {
        return {
            val: this.initVal || 0
        };
    },
    methods: {
        sub() {
            this.val > 0 && this.val--;
        },
        add() {
            this.val++;
        }
    },
    watch: {
        val() {
            this.$emit('change',this.val);
        }
    }
}
</script>
<style scoped>

</style>

