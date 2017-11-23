<template>
    <article>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">
	            <div class="mui-media-body">
		            <h3>{{ newsDetail.title }}</h3>
		            <p class="mui-ellipsis">
                    <span>创建时间: {{ newsDetail.add_time | date }}</span>
                    <span>点击数: {{ newsDetail.click }}</span>
                </p>
	            </div>
            </div>

            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer" v-html="newsDetail.content"></div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            newsDetail: {}
        };
    },
    methods: {
        getNewsDetail() {
            this.axios.get(this.api.getND + this.$route.params.id)
                    .then( reps => 
                    this.newsDetail = reps.data.message[0]);

        }
    },
    created() {
        this.getNewsDetail();
    }
};
</script>

<style scoped>

.mui-card-header, .mui-card-footer {
    display: block;
}
</style>
