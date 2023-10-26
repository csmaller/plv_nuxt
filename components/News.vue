<script setup lang="ts">
const { data: newsQuery } = await useAsyncData('news', () => {
  return queryContent('news').where({ title: 'news' }).findOne();
});
</script>

<template>
  <div>
    <div v-if="newsQuery" class="news w-full p-3 mb-4 font-bold text-center">
      <ContentRenderer :value="newsQuery">
        <ContentRendererMarkdown :value="newsQuery" />
      </ContentRenderer>
    </div>
  </div>
</template>
<style scoped lang="scss">
.news {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);

  @media (max-width: 770px) {
    font-size: 0.8rem;
    position: relative;
    margin-top: 120px !important;
  }
}
</style>
