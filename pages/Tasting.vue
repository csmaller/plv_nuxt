<script setup lang="ts">
const name = 'tasting-room';

const { data: tastingQuery } = await useAsyncData(name, () => {
  return queryContent('visit')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="tastingQuery">
    <LayoutContainer
      :image="tastingQuery?.image"
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
