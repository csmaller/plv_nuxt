<script setup lang="ts">
const name = 'picnic';

const { data: picnicQuery } = await useAsyncData(name, () => {
  return queryContent('visit')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="picnicQuery">
    <LayoutContainer :image="picnicQuery?.image" :position="picnicQuery?.image_position" :header="picnicQuery?.header">
      <ContentRenderer :value="picnicQuery">
        <ContentRendererMarkdown :value="picnicQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
