<template>
  <div class="bytestyle">
    <div class="tittle-block">
      <h3 data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >字节范</h3>
      <p data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >字节范是字节跳动企业文化的重要组成部分，是我们共同认可的行为准则</p>
    </div>
    <div class="img-text">
      <img src="../assets/ByteDanceStyle.png" alt="" />
      <div class="textbox">
        <div class="header-box">
          <h4 data-aos="fade-up" 
          data-aos-anchor-placement="top-bottom"
          class="header">追求极致</h4>
          <p data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          >不断提高要求，延迟满足感</p>
          <p data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          >在更大范围里找最优解，不放过问题，思考本质</p>
          <p data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          >持续学习和成长</p>
          <div class="a-box">
            <a href="####" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >务实敢为</a>
            <a href="####" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >开放谦逊</a>
            <a href="####" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >坦诚清晰</a>
            <a href="####" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >始终创业</a>
            <a href="####" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >多元兼容</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ByteStyle",
  data() {
    return {
      fade: true,
    };
  },
};
</script>

<style scoped>
.bytestyle {
  height: 630px;
  padding-bottom: 120px;
}
.tittle-block {
  padding-left: 96px;
}
.tittle-block h3 {
  font-size: 32px;
  color: #1f2329;
}
.tittle-block p {
  font-size: 16px;
  color: #646a73;
  margin-top: 30px;
}
.img-text {
  display: flex;
  margin-top: 90px;
}
.img-text img {
  width: 825px;
  height: 450px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.img-text .textbox {
  margin-left: 120px;
}
.header {
  margin: -20px 0 20px 0;
  font-size: 28px;
  color: #1f2329;
}
.header-box p {
  font-size: 16px;
  color: #646a73;
  padding: 3px 0;
}
.a-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  padding-top: 50px;
}
.a-box a {
  color: #646a73;
  font-size: 20px;
}
</style>