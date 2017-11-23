import storage from '../js/storage.js';
import Vue from 'vue';

export default {
    state: {
        buyGoodsData: storage.get('goodsBuyData'),
    },

    getters: {
        // 获得购买商品的总数
        getBuyGoodsTotal(state) {
            // console.log(Object.values(state.buyGoodsData));
            return Object.values(state.buyGoodsData).reduce((sum,v) => sum + v,0);
        }
    },

    mutations: {
        // 修改单个商品的购买数量
        updateBuyGoodsTotal(state,params) {
            Vue.set(state.buyGoodsData, params.id, params.total);
            storage.set('goodsBuyData', state.buyGoodsData);
        },

        deleteBuyGoodsTotal(state,params) {
            Vue.delete(state.buyGoodsData,params.id);
            storage.set('goodsBuyData',state.buyGoodsData);
        }
    }
};