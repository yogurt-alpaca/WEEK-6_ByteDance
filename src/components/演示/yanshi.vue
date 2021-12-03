<template>
  <div>
    <!-- @ == v-on 事件类型为click  scroll为自己定义的事件名字 -->
    <button @click="scroll">按钮</button>
  </div>
</template>

<script>
export default {
  name: "yanshi",
  methods: {
    // 没有参数 故括号里为空
    scroll() {
      window.scrollTo({
        // 滚动到距离顶部800px（代码中不需要写明单位）
        top: 800,
        // 滚动方式是平滑滚动 默认是auto 即instant 直接跳到目标位置  不常用
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
</style>