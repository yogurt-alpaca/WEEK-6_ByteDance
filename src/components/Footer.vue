<template>
  <div class="footerBox">
    <div class="logobox">
      <img src="../assets/ByteDance.png" alt="" />
      <h3>2021-2020北京字节跳动科技有限公司</h3>
      <h3>京公网安备 11000002002023号|京ICP备12025439号-3</h3>
    </div>
    <div class="guanwang">
      <h3>企业官网</h3>
      <h4><a href="####">字节跳动</a></h4>
    </div>
    <div class="qrbox">
      <h3>实时动态与招聘信息，关注我们</h3>
      <div class="imgbox">
        <div>
          <div class="wechat_qr_box qr_box" v-show="show">
            <img src="../assets/Wechat_qr1.jpeg" class="wechatqr" />
            <p>关注官方招聘公众号</p>
          </div>
          <a href="####"
            ><img
              src="../assets/WeChat.png"
              class="Wechat logo"
              @mouseenter="mouseEnter"
              @mouseleave="mouseLeave"
          /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/TikTokLogo.png" class="TikTok logo"
          /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/HeadlinesLogo.png" class="Headlines logo"
          /></a>
        </div>
        <div>
          <a href="####"><img src="../assets/Linying.png" class="in logo" /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/Bilibili.png" class="Bilibili logo"
          /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/Xiaohongshu.png" class="Xiaohongshu logo"
          /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/MicroBlog.png" class="Microblog logo"
          /></a>
        </div>
        <div>
          <a href="####"
            ><img src="../assets/Zhihu.png" class="Zhihu logo"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    mouseEnter() {
      this.show = true;
    },
    mouseLeave(){
      this.show = false;
    }
  },
};
</script>

<style scoped>
.footerBox {
  display: flex;
  justify-content: space-between;
}
.logobox {
  margin: 0 50px 0 96px;
}
.logobox img {
  width: 132px;
  height: 34px;
  margin-bottom: 9px;
}
h3 {
  color: #7b7e81;
  font-size: 14px;
  font-weight: normal;
  margin: 4px 0;
}
.guanwang {
  display: inline-block;
  width: 202px;
  text-align: center;
  border-left: solid 1px #34373b;
  border-right: solid 1px #34373b;
}
h4 {
  margin-top: 20px;
}
h4 a {
  color: #d2d3d4;
  font-size: 14px;
  font-weight: normal;
  transition: 0.3s;
}
h4 a:hover {
  color: #7b7e81;
}
.qrbox {
  width: 651px;
  padding-left: 73px;
}
.qrbox h3 {
  margin-bottom: 25px;
}
.imgbox {
  display: flex;
  position: relative;
}
.imgbox .logo {
  width: 32px;
  height: 32px;
  padding-right: 15px;
  transition: 0.1s;
}
.imgbox .logo:hover {
  opacity: 0.6;
}

.qr_box {
  position: absolute;
  left: -65px;
  bottom: 45px;
  text-align: center;
  padding: 16px;
  background-color: #fff;
  color: #1f2329;
  font-size: 14px;
  box-shadow: 0 10px 30px 0 rgb(136 150 171 / 15%);
  /* transition: all 0.3s; */
}
.qr_box img {
  width: 120px;
  height: 120px;
}
.Wechat:hover .wechat_qr_box {
  display: block;
}
</style>