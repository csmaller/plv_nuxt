<script lang="ts" setup>
interface Props {
  link?: string;
}

const props = defineProps<Props>();
const { link } = toRefs(props);
</script>
<template>
  <div class="divider flex w-full align-content-end">
    <div :id="link"></div>
  </div>
</template>
<style lang="scss">
.divider {
  height: 160px;
  width: 100vw;
}
</style>
