<template>
  <div class="box">
    <h2 data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    >{{ tittle }}</h2>
    <div class="contentBox">
      <h3 data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ subtittle1 }}</h3>
      <p data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ text1 }}</p>
      <h3 data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ subtittle2 }}</h3>
      <p data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ text2 }}</p>
      <h3 data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ subtittle3 }}</h3>
      <p data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ text3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ByteLifeText",
  props: {
    tittle: String,
    subtittle1: String,
    text1: String,
    subtittle2: String,
    text2: String,
    subtittle3: String,
    text3: String,
  },
};
</script>

<style scoped>
.box {
  width: 360px;
  padding-right: 98px;
}
h2 {
  font-size: 28px;
  color: #1f2329;
  padding-bottom: 40px;
  width: 250px;
}
.contentBox {
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
</style>