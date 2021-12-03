
<template>
  <div class="ByteProduct">
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
     class="tittle">Inspire creativity, enrich life</div>
    <div data-aos="fade-up" 
    data-aos-anchor-placement="top-bottom"
    class="subtittle">
      截至目前，字节跳动产品已覆盖超过 150 个国家和地区
    </div>
    <div class="productList">
      <li class="productLi1">
        <product-logo :imgPath="FaceuPath" :productName="Faceu"></product-logo>
      </li>
      <li class="productLi2">
        <product-logo
          :imgPath="FanqiePath"
          :productName="Fanqie"
        ></product-logo>
      </li>
      <li class="productLi3">
        <product-logo
          :imgPath="DongchediPath"
          :productName="Dongchedi"
        ></product-logo>
      </li>
      <li class="productLi4">
        <product-logo :imgPath="XiguaPath" :productName="Xigua"></product-logo>
      </li>
      <li class="productLi5">
        <product-logo
          :imgPath="FeishuPath"
          :productName="Feishu"
        ></product-logo>
      </li>
      <li class="productLi6">
        <product-logo
          :imgPath="TikTokPath"
          :productName="TikTok"
        ></product-logo>
      </li>
      <li class="productLi7">
        <product-logo
          :imgPath="HeadlinesPath"
          :productName="Headlines"
        ></product-logo>
      </li>
      <li class="productLi8">
        <product-logo
          :imgPath="TikTokHotPath"
          :productName="TikTokHot"
        ></product-logo>
      </li>
      <li class="productLi9">
        <product-logo
          :imgPath="XingfuliPath"
          :productName="Xingfuli"
        ></product-logo>
      </li>
      <li class="productLi10">
        <product-logo
          :imgPath="XiaohePath"
          :productName="Xiaohe"
        ></product-logo>
      </li>
      <li class="productLi11">
        <product-logo
          :imgPath="PipixiaPath"
          :productName="Pipixia"
        ></product-logo>
      </li>
      <li class="productLi12">
        <product-logo
          :imgPath="QingyanPath"
          :productName="Qingyan"
        ></product-logo>
      </li>
      <li class="productLi13">
        <product-logo
          :imgPath="ZhuxiaobangPath"
          :productName="Zhuxiaobang"
        ></product-logo>
      </li>
    </div>
    <div>
      <transition
        appear
        enter-active-class="animate__animated animate__fadeInUp"
        ><a href="####" class="more" v-if="fade">了解更多</a></transition
      >
    </div>
  </div>
</template>

<script>
import productLogo from "./productLogo.vue";

export default {
  name: "ByteProduct",
  components: {
    productLogo,
  },
  data() {
    return {
      FaceuPath: require("../assets/Faceu.png"),
      Faceu: "Faceu激萌",
      FanqiePath: require("../assets/Fanqie.png"),
      Fanqie: "番茄小说",
      DongchediPath: require("../assets/Dongchedi.png"),
      Dongchedi: "懂车帝",
      XiguaPath: require("../assets/Xigua.png"),
      Xigua: "西瓜视频",
      FeishuPath: require("../assets/Feishu.png"),
      Feishu: "飞书",
      TikTokPath: require("../assets/TikTok.png"),
      TikTok: "抖音",
      HeadlinesPath: require("../assets/Headlines.png"),
      Headlines: "今日头条",
      TikTokHotPath: require("../assets/TikTokHot.png"),
      TikTokHot: "抖音火山版",
      XingfuliPath: require("../assets/Xingfuli.png"),
      Xingfuli: "幸福里",
      XiaohePath: require("../assets/Xiaohe.png"),
      Xiaohe: "小荷健康",
      PipixiaPath: require("../assets/Pipixia.png"),
      Pipixia: "皮皮虾",
      QingyanPath: require("../assets/Qingyan.png"),
      Qingyan: "轻颜相机",
      ZhuxiaobangPath: require("../assets/Zhuxiaobang.png"),
      Zhuxiaobang: "住小帮",
    };
  },
};
</script>

<style scoped>
.ByteProduct {
  height: 750px;
  text-align: center;
  background-image: url("../assets/ProductBGIMG.png");
  background-size: 100%;
  background-repeat: no-repeat;
  /* 将背景图片在最底部展示 */
  background-position-y: 423px;
}
.tittle {
  color: #1f2329;
  font-size: 32px;
  margin-top: 100px;
  font-weight: 700;
}
.subtittle {
  font-size: 16px;
  color: #646a73;
  margin-top: 30px;
}
.productList {
  display: flex;
  justify-content: center;
  height: 251px;
  margin-top: 120px;
}
.productList li {
  margin: 0 13px;
}
.productList .productLi6,
.productList .productLi8 {
  margin-top: 20px;
}
.productList .productLi5,
.productList .productLi9 {
  margin-top: 40px;
}
.productList .productLi4,
.productList .productLi10 {
  margin-top: 60px;
}
.productList .productLi3,
.productList .productLi11 {
  margin-top: 80px;
}
.productList .productLi2,
.productList .productLi12 {
  margin-top: 100px;
}
.productList .productLi1,
.productList .productLi13 {
  margin-top: 120px;
}
.more {
  display: inline-block;
  width: 136px;
  height: 54px;
  background-color: #3370ff;
  margin-top: 48px;
  border-radius: 27px;
  line-height: 54px;
  font-size: 18px;
  color: #fff;
}
.more:hover {
  opacity: 0.6;
}
.animate__fadeInUp {
  transition: all 0.2s;
}
</style>