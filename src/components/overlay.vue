<template>
  <div class="overlay">
    <video preload="auto" loop muted autoplay  poster="../assets/overlay.png"  class="video">
      <source src="../assets/video.mp4" type="video/mp4">
    </video>
    <div class="nav">
      <a href="#"><img src="../assets/ByteDance.png" alt="" /></a>
      <ul>
        <li><a href="#">主页</a></li>
        <li><a href="#">职位</a></li>
        <li><a href="#">产品与服务</a></li>
        <li><a href="#">校园招聘</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
    <div class="overlayContent">
      <div class="sloganTittle">和优秀的人&nbsp;&nbsp;做有挑战的事</div>
      <div class="sloganSubtittle">
        ———— J O I N &nbsp;B Y T E D A N C E ————
      </div>
      <div class="search">
        <input type="text" placeholder="输入城市或职位进行搜索" /><button>
          <img src="../assets/search.png" alt="" class="searchImg" />
        </button>
      </div>
    </div>
    <a href="####" @click="nextPage"
      ><img
        src="../assets/arrow_down.png"
        title="翻动到下一页"
        class="arrow_down"
    /></a>
  </div>
</template>

<script>

export default {
  name: "overlay",
  methods:{
    nextPage(){
      window.scrollTo({
        top:804,
        behavior:"smooth",
      })
    }
  }

};
</script>

<style scoped>
.video{
/* 解视频边框问题 */
  object-fit: cover;
}
.nav {
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 1254px;
  margin: 0 auto;
}
.nav img {
  width: 132px;
  height: 34px;
  padding: 15px 0;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 420px;
  font-size: 14px;
  line-height: 64px;
}
li a {
  padding-bottom: 4px;
  color: #fff;
}
li a:hover {
  border-bottom: 2.5px solid #fff;
  opacity: 0.6;
  transition: opacity 0.5s;
}
video{
  width: 100%;
  height: 804px;
  position: absolute;
  z-index: -1;
}
.overlay {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #3370ff33;
  width: 100%;
  height: 804px;
  background-size: cover;
}
.overlayContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.overlayContent .sloganTittle {
  font-size: 54px;
  font-family: "Gilroy Semi Bold";
  font-weight: 700;
}
.overlayContent .sloganSubtittle {
  padding-top: 10px;
  padding-bottom: 50px;
  font-size: 14px;
  word-spacing: 20px;
}
.search {
  position: relative;
}
input {
  /* 清除边框 */
  outline: 0;
  width: 360px;
  height: 56px;
  border-radius: 28px;
  border: #fff;
  padding: 0 30px;
  font-size: 16px;
}
button {
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: #3370ff;
  /* 鼠标经过变成小手 */
  cursor: pointer;
  /* 清除按钮边框 */
  border: none;
  width: 47px;
  height: 47px;
  border-radius: 25px;
}
button:hover {
  opacity: 0.6;
}
.searchImg {
  padding: 15px;
  width: 17px;
  height: 17px;
}
/* 修改palaceholder样式 */
::-webkit-input-placeholder {
  color: #bdc1c6;
}
.arrow_down {
  width: 40px;
  height: 40px;
  transform: transform 0.5s;
  padding-bottom: 10px;
}
.arrow_down:hover {
  transform: translateY(3px);
}
</style>