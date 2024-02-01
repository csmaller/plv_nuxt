<script setup lang="ts">
const { data: faqsQuery } = await useAsyncData('faqs', () => {
  return queryContent('contact')
    .where({ title: { $eq: 'faqs' } })
    .findOne();
});
</script>

<template>
  <div v-if="faqsQuery">
    <LayoutContainer :image="faqsQuery?.image" :position="faqsQuery?.image_position" :header="faqsQuery?.header">
      <ContentRenderer :value="faqsQuery">
        <ContentRendererMarkdown :value="faqsQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>
