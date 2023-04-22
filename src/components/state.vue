<template>
  <div>
    <div :class="state.color">{{ state.name }}</div>
    <div :class="state.color">{{ state.count }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  state:any
}>()
console.log(props.state)
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-text-2);
  text-align: center;
}
.text-all{
  color:#ff7f50;
  font-size: 20px;
}
.text-stop{
  color:blue;
}
</style>
