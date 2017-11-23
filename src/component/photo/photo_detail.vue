<template>
    <article>
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{ photoDetail.title }}</h4>
                <p class='mui-ellipsis'>
                    <span>创建时间：{{ photoDetail.add_time | date }}</span>
                    <span>点击数：{{ photoDetail.click }}</span>
                </p>
            </div>

            <!-- 使用mui的图文表格布局 -->
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in photoThumList" v-bind:key="item.src">
                    <img class="mui-media-object" v-bind:src="item.src" v-preview:src="item.src">
                </li>
            </ul>

            <div class="mui-card-footer">{{ photoDetail.content }}</div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            // id: this.$route.params.id,
            photoDetail: {},
            photoThumList: []
        };
    },
    methods: {
        getPhotoDetail() {
            this.axios.get(this.api.getImgInfo + this.$route.params.id)
                    .then(resp => this.photoDetail = resp.data.message[0]);
        },
        getPhotoThumList() {
            this.axios.get(this.api.getThImg + this.$route.params.id)
                    .then(resp => this.photoThumList = resp.data.message);
        }
    },
    created() {
        this.getPhotoDetail();
        this.getPhotoThumList();
    }
}
</script>

<style scoped>
    .mui-card-header, .mui-card-footer {
        display: block;
}
</style>
