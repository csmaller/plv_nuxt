<script setup lang="ts">
const { data: privateQuery } = await useAsyncData('private', () => {
  return queryContent('events')
    .where({ title: { $eq: 'private' } })
    .findOne();
});
</script>

<template>
  <div v-if="privateQuery">
    <LayoutContainer
      :image="privateQuery?.image"
      :position="privateQuery?.image_position"
      :header="privateQuery?.header"
    >
      <ContentRenderer :value="privateQuery">
        <ContentRendererMarkdown :value="privateQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
