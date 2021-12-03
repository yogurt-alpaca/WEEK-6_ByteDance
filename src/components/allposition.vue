<template>
  <div class="position">
    <a href="####">
      <div class="imgBox"><img :src="imgPath"  class="logo" /></div>
      <div class="overlay">
        <p>全部职位</p>
        <div class="imgblock"><img src="../assets/arrow_right.png" alt=""></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "allposition",
  props: {
    imgPath: String,
    positionName: String,
  },
};
</script>

<style scoped>
.position {
  width: 216px;
  height: 388px;
}
.imgBox {
  position: absolute;
  width: 216px;
  height: 216px;
  border-radius: 108px;
  overflow: hidden;
}
.logo {
  width: 216px;
  height: 216px;
  transition: 0.2s;
}

a:hover .logo {
  transform: scale(1.08);
}
a:hover .imgBox {
  box-shadow: 0 6px 20px 0 rgb(31 35 41 / 30%);
}
.overlay {
  float: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 176px;
  height: 176px;
  padding: 20px;
  background-color: #373c43b3;
  border-radius: 108px;
  overflow: hidden;
}
p{
color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}
.overlay img{
    width: 40px;
    height: 38px;
}
.imgblock{
    margin-top: 10px;
    text-align: center;
}
</style>