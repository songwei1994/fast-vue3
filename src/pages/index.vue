<script setup lang="ts">
// import { version } from '../../package.json';
// import SvgIcon from '/@/components/SvgIcon/index.vue';
// import { useAppStore } from '/@/store/modules/app';
// import { framework } from './data';
import Header from '/@/components/Header/index.vue';
import leftSide1 from '/@/components/side/leftside1.vue'
import leftSide2 from '/@/components/side/leftside2.vue'

import { getState, getfaultState } from '/@/api/data'
// const appStore = useAppStore();
const stateList = ref<[]>([]);
const titleList = reactive(['皮带机状态', '堆取料机状态', '装船机状态', '卸船机状态']);
const isActive = ref(0);

const changeTab = async (index) => {
  if (index == isActive.value) return;
  else isActive.value = index
  if (index == 0) {
    stateList.value = await getState()

  } else {
    stateList.value = await getfaultState()

  }
  // stateList.value = await getfaultState()
  // stateList.value = faultStates
}

onMounted(async () => {
  stateList.value = await getState()
})


</script>
<template>
  <div class="w-full h-full dark:text-slate-400 dark:bg-slate-900">
    <div class="flex flex-col h-full">
      <Header />
      <div class="w-1/4 h-full">
        <div class=" bg-blue-400 bg-opacity-40 h-2/3 to-transparent rounded-xl overflow-hidden">
          <div class="flex text-center text-xl text-light-300 ">
            <div class="w-1/2 hover:bg-blue-400 title-btn" :class="isActive == 0 ? 'acitve' : ''" @click="changeTab(0)">设备状态
            </div>
            <div class="w-1/2 hover:bg-blue-400  title-btn" :class="isActive == 1 ? 'acitve' : ''" @click="changeTab(1)">
              异常状态</div>
          </div>
          <leftSide1 v-for="(item, index) in stateList" :key="index" :state="item" :title="titleList[index]"></leftSide1>
        </div>
        <div class="w-full h-1/3">
          <leftSide2></leftSide2>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.version {
  display: inline-block;
  padding: 6px;
  margin-left: 6px;
  border-radius: 10px;
}

.acitve {
  background-color: #0984e3;
}</style>
