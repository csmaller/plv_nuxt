<script setup lang="ts">
const { data: orchardQuery } = await useAsyncData('orchard', () => {
  return queryContent('home')
    .where({ title: { $eq: 'orchard' } })
    .findOne();
});
</script>

<template>
  <div v-if="orchardQuery">
    <LayoutContainer
      :image="orchardQuery?.image"
      :position="orchardQuery?.image_position"
      :header="orchardQuery?.header"
    >
      <ContentRenderer :value="orchardQuery">
        <ContentRendererMarkdown :value="orchardQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
