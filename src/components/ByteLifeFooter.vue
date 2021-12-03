<template>
  <div class="box">
    <div class="textbox">
      <h3 data-aos="fade-up" 
      data-aos-anchor-placement="top-bottom"
      >
        {{ Tittle }}
      </h3>
      <p data-aos="fade-up" 
      data-aos-anchor-placement="top-bottom"
      >
        {{ Text }}
      </p>
    </div>
    <div class="imgbox">
      <img :src="ImgPath_1" />
      <img :src="ImgPath_2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ByteLifeFooter",
  props: {
    Tittle: String,
    Text: String,
    ImgPath_1: String,
    ImgPath_2: String,
  },
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  transform: translateY(-115px);
}
.textbox {
  display: flex;
  flex-direction: column;
  width: 360px;
}
h3 {
  font-size: 20px;
  color: #1f2329;
  font-weight: bold;
  padding-top: 30px;
}
p {
  font-size: 14px;
  color: #646173;
  padding-top: 15px;
}
.imgbox {
  display: flex;
  justify-content: space-between;
  width: 783px;
  margin-right: 98px;
}
img {
  width: 379px;
  height: 215px;
}
</style>