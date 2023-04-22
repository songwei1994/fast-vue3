<script setup lang="ts">
import * as echarts from 'echarts'
// import { reactive } from 'vue';
import {getlineData } from '/@/api/data'
const lineChart = ref<HTMLDivElement>()
const linechartList = ref<any>();
onMounted(async() => {
  linechartList.value = await getlineData()
  initChart()
})
const initChart = () => {
  let mychart = echarts.init(lineChart.value as HTMLDivElement);
  let option = {
    title: {
      text: '月度故障率'
    },
    legend: {
      data: ['皮带机', '堆取料机', '装船机', '卸船机']
    },
    grid: {
      left: '10%',
      // right: '5%',
      top:'20%',
      bottom: '15%',
      // containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: linechartList.value.time
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '皮带机',
        type: 'line',
        data: linechartList.value.pidai,
      },
      {
        name: '堆取料机',
        type: 'line',
        data: linechartList.value.duiqu,
      },
      {
        name: '装船机',
        type: 'line',
        data: linechartList.value.zhuangchuan,
      },
      {
        name: '卸船机',
        type: 'line',
        data: linechartList.value.xiechuan,
      },
    ]
  };
  mychart.setOption(option)
}
</script>
<template>
  <div class="m-1 w-full h-full">
    <div class="line-chart" id="left-line-chart" ref="lineChart"></div>
  </div>
</template>
<style lang="less" scoped>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
