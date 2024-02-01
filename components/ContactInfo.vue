<script setup lang="ts">
const name = 'info';

const { data: infoQuery } = await useAsyncData(name, () => {
  return queryContent(name).findOne();
});
</script>

<template>
  <div v-if="infoQuery">
    <Address />
    <h1>Hours</h1>
    <ContentRenderer :value="infoQuery">
      <ContentRendererMarkdown :value="infoQuery" />
    </ContentRenderer>
  </div>
</template>
