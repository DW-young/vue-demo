<template>
  <article class="goods-detail">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">                 
        <mt-swipe-item v-for="item in lunbos" v-bind:key="item.src">
            <img v-bind:src="item.src" alt="">
        </mt-swipe-item>
    </mt-swipe>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{ goodsPrice.title }}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{ goodsPrice.market_price }}</s> <span>销售价: </span> <em>￥{{ goodsPrice.sell_price }}</em> </div>

        <div> <span>购买数量：</span>

          <!--数字输入框 -->
          <app-numbox v-bind:initVal="buyCount" v-on:change="getTotal"></app-numbox>

        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addShopcart">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		    <mt-navbar v-model="navBarChange">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="introduce">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		    <mt-tab-container v-model="navBarChange">
                <mt-tab-container-item id="comment">
                    <p>123123123</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="introduce">
                    <app-intro v-bind:id="id"></app-intro>
                </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
    import GoodsIntro from './son/intro.vue';
    import storage from '../../js/storage.js';
export default {
    data() {
        return {
            goodsPrice: {},
            lunbos: [],
            id: this.$route.params.id,
            navBarChange: 'comment',
            buyCount: (storage.get('goodsBuyData') || {})[this.$route.params.id]
        };
    },
    methods: {
        getGoodsPrice() {
            this.axios.get(this.api.goodsP+this.id)
                .then(resp => this.goodsPrice = resp.data.message[0]);
        },
        getGoodsThumList() {
            this.axios.get(this.api.goodsT+this.id)
                .then(resp => this.lunbos = resp.data.message);
        },
        getTotal(total) {
            this.buyCount = total;
        },
        addShopcart() {
            /* var oldBuyCount = storage.get('goodsBuyData') || {};
            oldBuyCount[this.id] = this.buyCount + (oldBuyCount[this.id] || 0);
            storage.set('goodsBuyData',oldBuyCount); */

            this.$store.commit('updateBuyGoodsTotal',{id: this.id, total: this.buyCount});
        }
    },
    created() {
        this.getGoodsThumList();
        this.getGoodsPrice();
    },
    components: {
        'app-intro': GoodsIntro
    }
}
</script>


<style lang="less">
    .mint-swipe {
        height: 260px;
        background-color: #fff;
        img {
            display: block;
            margin: 0 auto;
            // max-width: 100%;
            height: 260px;
        }
    }
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>