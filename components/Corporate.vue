<script setup lang="ts">
const { data: corporateQuery } = await useAsyncData('corporate', () => {
  return queryContent('events')
    .where({ title: { $eq: 'corporate' } })
    .findOne();
});
</script>

<template>
  <div v-if="corporateQuery">
    <LayoutContainer
      :image="corporateQuery?.image"
      :position="corporateQuery?.image_position"
      :header="corporateQuery?.header"
    >
      <ContentRenderer :value="corporateQuery">
        <ContentRendererMarkdown :value="corporateQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
