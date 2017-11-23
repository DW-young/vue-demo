<template>
    <section>
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

</style>
