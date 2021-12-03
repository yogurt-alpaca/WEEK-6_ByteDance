<template>
  <div class="box">
    <a href="####"
      ><img :src="imgPath" />
      <div  data-aos="fade-up" 
      data-aos-anchor-placement="top-bottom"
      class="name">{{ productName }}</div>

    </a>
  </div>
</template>

<script>
export default {
  name: "productLogo",
  props: {
    imgPath: String,
    productName: String,
  },
};
</script>

<style scoped>
.box {
  display: inline-block;
  width: 70px;
}
img {
  border-radius: 6px;
  width: 70px;
  height: 70px;
  transition: 0.2s;
  border-radius: 16px;
}
.name {
  width: 70px;
  padding-top: 16px;
  text-align: center;
}
a {
  display: inline-block;
}
a:hover img {
  width: 84px;
  height: 84px;
  /* 以中心为基准放大 */
  margin: -14px 0 0 -7px;
  box-shadow: 0 6px 20px 0 rgb(31 35 41 / 15%);
  border-radius: 21px;
}

a:hover {
  color: #3370ff;
}
</style>