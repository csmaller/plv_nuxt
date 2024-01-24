<script setup lang="ts">
const name = 'tours';

const { data: toursQuery } = await useAsyncData(name, () => {
  return queryContent('visit')
    .where({ title: { $eq: name } })
    .findOne();
});
</script>

<template>
  <div v-if="toursQuery">
    <LayoutContainer :image="toursQuery?.image" :position="toursQuery?.image_position" :header="toursQuery?.header">
      <ContentRenderer :value="toursQuery">
        <ContentRendererMarkdown :value="toursQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
