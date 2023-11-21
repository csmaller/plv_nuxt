<script setup lang="ts">
const img = '/img/nasketucket_bud.jpeg';
const position = 'right';
const header = "FAIRHAVEN'S FIRST VINEYARD";
const blurb =
  'NASKETUCKET BAY VINEYARD is Fairhaven’s first vineyard and winery, opening in the Spring of 2024. The rustic barn setting and relaxed farm vibe, serving delicious wines and drink options makes this vineyard stand out from the rest. Wine tastings, wine by the glass, spritzers, sangrias and bottles are available for purchase toenjoy as you relax in our comfortable, stunning barn and patio area. Food trucks and live acoustic music canbe expected weekly as well as regularly scheduled public events throughout the year. Check out our events calendar for the full line up! Small and intimate private events can also be arranged to celebrate your...';

const { data: testQuery } = await useAsyncData('test', () => {
  return queryContent('home')
    .where({ title: { $eq: 'About' } })
    .findOne();
});
</script>

<template>
  <div v-if="testQuery">
    <LayoutContainer :image="testQuery?.image" :position="testQuery?.image_position" :header="testQuery?.header">
      <ContentRenderer :value="testQuery">
        <ContentRendererMarkdown :value="testQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>

<style scoped lang="scss"></style>
