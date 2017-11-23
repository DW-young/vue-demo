<template>
    <article>
        <!-- 使用mui的列表布局 -->
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <router-link v-bind:to="{ name: 'pl',params: {id: 0}}">全部</router-link>
                </li>
                <li v-for="item in photoCategoryList" :key="item.id" class="mui-table-view-cell"><router-link v-bind:to="{ name: 'pl', params: {id: item.id}}">{{ item.title }}</router-link></li>
        </ul>

        <!-- 使用mui的卡片列表布局 -->
        <div class="mui-card" v-for="item in photoList" v-bind:key="item.id">
            <router-link v-bind:to="{name: 'pd', params: {id: item.id}}">
                <div class="mui-card-header mui-card-media" v-bind="{ style: `height:40vw;background-image:url(${item.img_url})`}"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>{{ item.title }}</p>
                        <p style="color: #333;">{{ item.zhaiyao }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
        photoCategoryList: [],
        photoList: []
        };
    },
    methods: {
        getPhotoCL() {
            this.axios.get(this.api.getImgCg)
                .then(resp => this.photoCategoryList = resp.data.message);
        },
        getPhoto() {
            this.axios.get(this.api.getImg+this.$route.params.id)
                .then(resp => this.photoList = resp.data.message);
        }
    },
    created() {
        this.getPhotoCL();
        this.getPhoto();
    },
    watch: {
        $route() {
            this.getPhoto();
        }
    }
};
</script>

<style lang="less" scoped>
.mui-table-view {
    overflow: hidden;
    li {
        float: left;
        color: deepskyblue;
    }
}
.mui-card-header, .mui-card-footer {
    display: block;
}
</style>

