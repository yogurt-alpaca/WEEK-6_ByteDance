<template>
  <div class="position">
    <a href="####">
      <div class="imgBox"><img :src="imgPath" /></div>
      
        <h3 data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        >{{ positionName }}</h3>
      
    </a>
  </div>
</template>

<script>
export default {
  name: "position",
  props: {
    imgPath: String,
    positionName: String,
  },
  data() {
    return {
      fade: true,
    };
  },
};
</script>

<style scoped>
.position {
  width: 216px;
  height: 388px;
}
.imgBox {
  width: 216px;
  height: 216px;
  border-radius: 108px;
  overflow: hidden;
}
img {
  width: 216px;
  height: 216px;
  transition: 0.2s;
}
h3 {
  text-align: center;
  font-size: 24px;
  height: 32px;
  line-height: 32px;
  margin-top: 40px;
  font-weight: normal;
  transition-duration: 0.2s;
}
a:hover img {
  transform: scale(1.08);
}
a:hover .imgBox {
  box-shadow: 0 6px 20px 0 rgb(31 35 41 / 30%);
}
a:hover h3 {
  color: #3370ff;
}
</style>