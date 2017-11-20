import HomeComponent from '../component/home/home.vue';
import NewsList from '../component/news/news_list.vue';
import NewsDetail from '../component/news/news_detail.vue';

export default {
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: HomeComponent},
        {name: 'nl', path: '/news/list', component: NewsList},
        {name: 'nd', path: '/news/detail/:id', component: NewsDetail},
    ]
}