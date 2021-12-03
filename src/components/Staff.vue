<template>
    <a href="####">
      <div class="contentBox">
        <div class="portraitBox">
          <img :src="PortraitPath" alt="" class="portraitImg" />
        </div>
        <h4 data-aos="fade-up" data-aos-anchor-placement="top-bottom">{{ Tittle }}</h4>
        <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">{{ Subtittle }}</h5>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">{{ Text }}</p>
        <div class="arrowbox" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <img :src="arrow_rightPath" alt="" class="arrowimg" />
        </div>
      </div>
    </a>

</template>

<script>
export default {
  name: "Staff",
  props: {
    PortraitPath: String,
    Tittle: String,
    Subtittle: String,
    Text: String,
    arrow_rightPath: String,
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  width: 384px;
  margin: 0 20px;
}
a:hover {
  border-radius: 10px;
  box-shadow: 0 10px 30px 0 rgb(136 150 171 / 15%);
}
/* a:hover .arrowimg{
  filter: hue-rotate(70deg);
} */
.contentBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 480px;
  text-align: center;
  padding: 20px 60px;
  padding-top: 40px;

}
.portraitBox {
  padding-bottom: 32px;
}
.portraitImg {
  width: 216px;
  height: 216px;
}
h4{
    color: #1f2129;
    font-size: 22px;
    font-weight: normal;
}
h5{
  color: #1f2129;
  font-size: 14px;
  font-weight: normal;
}
p{
    text-align: left;
    color: #646173;
    font-size: 14px;
}
.arrowbox{
  padding-top: 10px;
}
.arrowimg{
  width: 27px;
  height: 27px;
  border: 1px solid #e2e3e4;
  border-radius: 20px;
}
</style>