<template>
    <section>
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsIntro.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="goodsIntro.content">
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            goodsIntro: {}
        };
    },
    methods: {
        getGoodsIntro() {
            this.axios.get(this.api.goodsD+this.id)
                .then(resp => this.goodsIntro = resp.data.message[0]);
        }
    },
    created() {
        this.getGoodsIntro();
    }
}
</script>

<style>
.mui-card img {
    width: 100%;
    height: auto;

    vertical-align:top;
}
p {
    margin-bottom: 0;
}
</style>
