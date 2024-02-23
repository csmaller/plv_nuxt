<script setup lang="ts">
const name = 'wines';

const { data: wines } = await useAsyncData(name, () => {
  return queryContent('home')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="wines" class="wine-list">
    <LayoutContainer :image="wines?.image" :position="wines?.image_position" :header="wines?.header">
      <ContentRenderer :value="wines">
        <ContentRendererMarkdown :value="wines" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss">
.wine-list {
  padding-bottom: 16px;
  :deep(p) {
    margin-top: 4px;
    line-height: 16px;
  }
  :deep(h3) {
    margin-top: 23px;
  }
}
</style>
