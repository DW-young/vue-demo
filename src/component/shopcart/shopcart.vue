<template>
  <article class="shopcart-list">

    <!-- 商品列表 -->
    <div class="goods" v-for="item in buyGoodsList" v-bind:key="item.id">
        <mt-switch class="switch" v-model="item.isSelected"></mt-switch> <img class="img" v-bind:src="item.thumb_path">
        <div class="inforight">
            <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
            <div class="bottom">
                <ul>
                    <li>￥{{ item.sell_price }}</li>
                    <li>
                        <app-numbox v-bind:initVal="$store.state.buyGoodsData[item.id]" v-on:change="modifyBuyCount(item.id,$event)"></app-numbox>
                    </li>
                    <li>
                        <a href="javascript:;" @click="delGoods(item.id)">删除</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 总价 -->
    <div class="total">
        <div class="total_val">
            <ul>
            <li>总计（不含运费）</li>
            <li>已勾选商品{{ selectedGoodsTotal }}件,总价:￥{{ priceTotal }}元</li>
            </ul>
        </div>
        <div class="total_btn">
            <mt-button type="primary">付 款</mt-button>
        </div>
    </div>

  </article>
</template>

<script>

export default {
    data() {
        return {
            buyGoodsList: [],
        };
    },
    methods: {
        getBuyGoodsList() {
            let scId = Object.keys(this.$store.state.buyGoodsData).join(',');
            if(!scId) { return; }
            this.axios.get(this.api.shopCL + scId)
                    .then( resp => {
                        resp.data.message.forEach(goods => goods.isSelected = true);
                        this.buyGoodsList = resp.data.message
                        }
                    );
        },

        // 修改购买数量
        modifyBuyCount(id,val) {
            this.$store.commit('updateBuyGoodsTotal',{
                id: id,
                total: val
            });
        },
        // 删除购物车商品
        delGoods(id) {
            this.$store.commit('deleteBuyGoodsTotal',{id: id});

            this.buyGoodsList = this.buyGoodsList.filter(v => v.id != id);
        }
    },
    created() {
        this.getBuyGoodsList();
    },
    computed: {
        // 已选商品的总数
        selectedGoodsTotal() {
            let sum = 0;
            this.buyGoodsList.forEach( goods => {
                if(goods.isSelected) {
                    sum += this.$store.state.buyGoodsData[goods.id];
                }
            });
            return sum;
        },
        // 总价格
        priceTotal() {
            return this.buyGoodsList.reduce((sum,goods) => {
                return goods.isSelected ? sum + this.$store.state.buyGoodsData[goods.id] * goods.sell_price : sum;
            },0);
        }
    }
}
</script>


<style lang="less">
.shopcart-list {
  .goods {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    height: 102px;
    display: flex;
    padding: 5px;
    .switch {
      flex: 0 0 52px;
    }
    .img {
      margin-left: 5px;
      height: 75px;
      width: 75px;
      flex: 0 0 85px;
    }
    .inforight {
      margin-left: 5px;
      flex: 1;
    }
    .inforight ul {
      padding-left: 0px;
    }
    .inforight li {
      list-style: none;
      display: inline-block;
    }
    .inforight h4 {
      color: #0094ff;
      font-size: 14px;
    }
    .bottom li:first-child {
      color: red;
      margin-right: 5px;
    }
    .bottom li:last-child {
      margin-left: 5px;
    }
  }
  .total {
    height: 84px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 5px 14px;
    ul {
      padding-left: 0px;
      margin: 14px 0;
      li {
        list-style: none;
        font-size: 14px;
      }
    }
    &_val {
      flex: 1;
    }
    &_btn {
      flex: 0 0 60px;
      margin: 18px 0 0 0;
    }
  }
}
</style>