import HomeComponent from '../component/home/home.vue';
import NewsList from '../component/news/news_list.vue';
import NewsDetail from '../component/news/news_detail.vue';
import PhotoList from '../component/photo/photo_list.vue';
import PhotoDetail from '../component/photo/photo_detail.vue';
import GoodsList from '../component/goods/goods_list.vue';
import GoodsDetail from '../component/goods/goods_detail.vue';
import ShopCart from '../component/shopcart/shopcart.vue';

export default {
    linkActiveClass: 'mui-active',
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: HomeComponent},
        
        // 新闻路由
        {name: 'nl', path: '/news/list', component: NewsList},
        {name: 'nd', path: '/news/detail/:id', component: NewsDetail},
        
        // 图文路由
        {name: 'pl', path: '/photo/list/:id', component: PhotoList},
        {name: 'pd', path: '/photo/detail/:id', component: PhotoDetail},

        {name: 'gl', path: '/goods/list/' , component: GoodsList},
        {name: 'gd', path: '/goods/detail/:id' , component: GoodsDetail},

        {name: 'sc', path: '/shopcart' , component: ShopCart},
    ]
}