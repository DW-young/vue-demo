<template>
    <section>
        <div class="newsList-back">
            <i class="mui-icon mui-icon mui-icon-arrowleft"></i>
            <router-link to="/index">
                返回
            </router-link> 
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newLists" v-bind:key="item.id">
                <router-link v-bind="{ to: `/news/detail/${item.id}`}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis'>{{ item.title }}</p>
                        <div class="setSize">
                            <div class="fl">发表时间：<span>{{ item.add_time | date }}</span></div>
                            <div class="fr">点击：<span>{{ item.click }}</span></div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            newLists: []
        };
    },
    methods: {
        getNewList() {
            this.axios.get(this.api.getNL)
                .then(reps => this.newLists = reps.data.message);
        }
    },
    created() {
        this.getNewList();
    }
};
</script>

<style lang="less" scoped>
.newsList-back {
    height: 30px;
    background-color: #f4f4f4;
    font-size: 16px;
    line-height: 30px;
    color: blue;
}
.setSize div {
    display: block;
    font-size: 12px;
    color: skyblue;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
ul {
    margin-bottom: 50px;
}
</style>
