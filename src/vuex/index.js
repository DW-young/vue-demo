import storage from '../js/storage.js';
export default {
    state: {
        buyGoodsData: storage.get('goodsBuyData'),
    },

    getters: {
        // 获得购买商品的总数
        getBuyGoodsTotal(state) {
            return Object.values(state.buyGoodsData).reduce((sum,v) => sum + v,0);
        }
    },

    mutations: {
        // 修改单个商品的购买数量
        updateBuyGoodsTotal(state,params) {
            state.buyGoodsData[params.id] = params.total;
            storage.set('goodsBuyData', state.buyGoodsData);
        },

        deleteBuyGoodsTotal() {

        }
    }
};