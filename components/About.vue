<script setup lang="ts">
const { data: testQuery } = await useAsyncData('test', () => {
  return queryContent('home')
    .where({ title: { $eq: 'About' } })
    .findOne();
});
</script>

<template>
  <div v-if="testQuery">
    <LayoutContainer
      :is-slider="false"
      :position="testQuery?.image_position"
      :header="testQuery?.header"
      :image="testQuery?.image"
    >
      <ContentRenderer :value="testQuery">
        <ContentRendererMarkdown :value="testQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>
