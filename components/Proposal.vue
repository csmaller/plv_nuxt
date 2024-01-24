<script setup lang="ts">
const name = 'proposal';

const { data: proposalQuery } = await useAsyncData(name, () => {
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
      content: proposalQuery?.value?.description,
    },
  ],
});
</script>

<template>
  <div v-if="proposalQuery">
    <LayoutContainer
      :image="proposalQuery?.image"
      :position="proposalQuery?.image_position"
      :header="proposalQuery?.header"
    >
      <ContentRenderer :value="proposalQuery">
        <ContentRendererMarkdown :value="proposalQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
