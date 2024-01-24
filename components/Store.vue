<script setup lang="ts">
const name = 'store';

const { data: store } = await useAsyncData(name, () => {
  return queryContent('home')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="store">
    <LayoutContainer :image="store?.image" :position="store?.image_position" :header="store?.header">
      <ContentRenderer :value="store">
        <ContentRendererMarkdown :value="store" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
