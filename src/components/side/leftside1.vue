<script setup lang="ts">
// import { reactive } from 'vue';

const props = defineProps<{
  title: string,
  state: any[]
}>()
</script>
<template>
  <div class="m-1">
    <div class="text-xl font-medium text-gray-100 ">{{ title }}</div>
    <div class="bg-gradient-to-r from-green-400 h-1 w-1/3 rounded-xl "></div>
    <div class="flex justify-evenly">
      <div class="text-center m-2" v-for="(item, index) in state" :key="index">
        <div class="text-4xl font-medium" :class="item.color">{{ item.count }}</div>
        <div class="text-base text-gray-100">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.state-all {
  color: #4bfaef;
}

.state-normal {
  color: #0ada41;
}

.state-alarm {
  color: #ffcc3c;
}

.state-fault {
  color: #ff0202;
}

.state-stop {
  color: #ffffff;
}
</style>
