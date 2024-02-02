<script setup lang="ts">
const { data: faqsQuery } = await useAsyncData('faqs', () => {
  return queryContent('contact')
    .where({ title: { $eq: 'faqs' } })
    .findOne();
});
</script>

<template>
  <div v-if="faqsQuery" class="faq">
    <LayoutContainer :image="faqsQuery?.image" :position="faqsQuery?.image_position" :header="faqsQuery?.header">
      <ContentRenderer :value="faqsQuery">
        <ContentRendererMarkdown :value="faqsQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style lang="scss">
.faq {
  p {
    font-family: var(--font-candara);
    font-size: 11px;
    text-align: left;

    @media (max-width: 760px) {
      font-size: 14px;
    }
  }
}
</style>
