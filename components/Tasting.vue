<script setup lang="ts">
const name = 'tasting-room';
import tasting from '@/content/json/tasting.json';

const { data: tastingQuery } = await useAsyncData(name, () => {
  return queryContent('visit')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="tastingQuery">
    <LayoutContainer
      :is-slider="true"
      :images="tasting.images"
      :position="tastingQuery?.image_position"
      :header="tastingQuery?.header"
    >
      <ContentRenderer :value="tastingQuery">
        <ContentRendererMarkdown :value="tastingQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
