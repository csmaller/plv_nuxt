<script setup lang="ts">
const { data: missionQuery } = await useAsyncData('equal', () => {
  return queryContent('/blog')
    .where({ title: { $eq: 'mission-statement' } })
    .findOne();
});
</script>

<template>
  <div>
    <div v-if="missionQuery" class="mission w-full p-3 mb-4 font-bold text-center">
      <ContentRenderer :value="missionQuery">
        <ContentRendererMarkdown :value="missionQuery" />
      </ContentRenderer>
    </div>
  </div>
</template>
<style scoped lang="scss">
.mission {
  font-size: 20px;
}
</style>
