<template>
  <div>
      <!-- video标签为双标签，其中的source中写入属性 src 即视频地址 -->
      <!-- 1、preload 为预加载 默认auto 表示尽快加载
      2、loop 循环播放
      3、autoplay 自动播放
      4、poster 封面 未播放时显示的图片 引号里为地址
      5、muted 若视频长时间未加载 或者直接不播放 加这个属性 详情自行了解吧 (我还不懂这个 -->
      <video preload="auto" loop autoplay poster="xxx" muted>
          <!-- 后缀是mp4 type类型就为mp4 -->
          <source src="xxx" type="video/mp4">
      </video>
  </div>
</template>

<script>
export default {
name:'video',
}
</script>

<style scoped>
 video{
     /* 若视频两边与浏览器中有缝隙 将边距更改为零后仍无法解决 改一下下边的样式 */
     object-fit: cover;
 }
</style>