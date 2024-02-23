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
  :deep(p) {
    margin-top: 8px;
    margin-bottom: 10px;
    line-height: 18px;

    strong {
      margin-top: 12px;
    }
  }
}
</style>
