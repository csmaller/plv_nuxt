<script lang="ts" setup>
interface PropsInterface {
  url: string;
  src: string;
}

const props = defineProps<PropsInterface>();
const { url, src } = toRefs(props);
</script>

<template>
  <div class="relative">
    <a :href="url"><img :src="src" /></a>
    <slot />
  </div>
</template>

<style scoped lang="scss">
img {
  padding: 6px;
  margin-bottom: 5px;
  border: 1px solid white;
  box-shadow: 0px 0px 5px 2px rgba(4, 5, 4, 0.08);
}
img:hover {
  box-shadow: 0px 0px 5px 2px rgba(4, 5, 4, 0.38);
}
</style>
