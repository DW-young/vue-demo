const domain = 'http://vue.studyit.io/api';

export default  {
    getLB: `${domain}/getlunbo`,
    getNL: `${domain}/getnewslist`,
    getND: `${domain}/getnew/`,

    getImg: `${domain}/getimages/`,
    getImgCg: `${domain}/getimgcategory`,
    getThImg: `${domain}/getthumimages/`,
    getImgInfo: `${domain}/getimageInfo/`,

    goodsL: `${domain}/getgoods/`,          // 该接口后面需要一个页码: /getgoods/?pageindex=number
    goodsD: `${domain}/goods/getdesc/`,     // 该接口后面需要一个商品id
    goodsT: `${domain}/getthumimages/`,     // 该接口后面需要一个商品id
    goodsP: `${domain}/goods/getinfo/`,           // 该接口后面需要一个商品id

    shopCL: `${domain}/goods/getshopcarlist/`,  // 需要一串id
    commentL: `${domain}/getcomments/`,
    commentS: `${domain}/postcomment/`
};