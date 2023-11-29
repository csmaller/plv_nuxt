<script setup lang="ts">
const name = 'fire-pit';

const { data: firePitQuery } = await useAsyncData(name, () => {
  return queryContent('visit')
    .where({ title: { $eq: name } })
    .findOne();
});

useHead({
  // Can be static or computed
  title: name,
  meta: [
    {
      name: `description`,
      content: firePitQuery?.value?.description,
    },
  ],
});
</script>

<template>
  <div v-if="firePitQuery">
    <LayoutContainer
      :image="firePitQuery?.image"
      :position="firePitQuery?.image_position"
      :header="firePitQuery?.header"
    >
      <ContentRenderer :value="firePitQuery">
        <ContentRendererMarkdown :value="firePitQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
