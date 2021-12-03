<template>
  <img :src="ByteLifePath" alt="">
</template>

<script>
export default {
name: 'ByteLifeImg',
props:{
    ByteLifePath:String,
}
}
</script>

<style scoped>
img{
    width: 783px;
    height: 448px;
    margin-right: 98px;
    border-radius: 10px;
}
</style>