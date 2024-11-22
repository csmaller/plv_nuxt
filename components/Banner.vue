<script setup lang="ts">
const { data: bannerQuery } = await useAsyncData('banners', () => {
  return queryContent('banners')
    .where({ title: { $eq: 'banner' } })
    .find();
});

const isInDateRange = (start: string, end: string) => {
  const today = new Date();
  const bannerStart = new Date(start);
  const bannerEnd = new Date(end);

  return bannerStart <= today && bannerEnd >= today ? true : false;
};
</script>

<template>
  <div
    v-if="bannerQuery"
    v-for="banner in bannerQuery"
    :key="banner.start"
    class="w-full flex justify-content-center my-5 px-5"
  >
    <img :src="banner.image" v-if="isInDateRange(banner.start, banner.end)" />
  </div>
</template>

<style scoped lang="scss">
img {
  padding: 6px;
  margin-bottom: 5px;
}
</style>
