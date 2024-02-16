<script setup lang="ts">
const { data: historyQuery } = await useAsyncData('history', () => {
  return queryContent('home')
    .where({ title: { $eq: 'history' } })
    .findOne();
});
</script>

<template>
  <div v-if="historyQuery">
    <LayoutContainer
      :is-slider="true"
      :image="historyQuery?.image"
      :position="historyQuery?.image_position"
      :header="historyQuery?.header"
    >
      <ContentRenderer :value="historyQuery">
        <ContentRendererMarkdown :value="historyQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
