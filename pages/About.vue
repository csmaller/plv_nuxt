<script setup lang="ts">
useHead({
  // Can be static or computed
  title: 'About',
  meta: [
    {
      name: `description`,
      content:
        'Nasketucket Bay Vineyard is Fairhaven Massachusetts first vineyard and winery. We host events and sell wine',
    },
  ],
});

const { data: aboutQuery } = await useAsyncData('about', () => {
  return queryContent('about')
    .where({ title: { $eq: 'about' } })
    .findOne();
});
</script>

<template>
  <div class="about">
    <Profile name="Nasketucket Bay Vineyard" img="nasketucket_bud.jpeg">
      <div class="w-fullsm:p-1 px-4 mt-2 about-text align-items-center text-center lg:text-left">
        <div v-if="aboutQuery" class="mission w-full p-3 mb-4 font-bold text-center">
          <ContentRenderer :value="aboutQuery">
            <ContentRendererMarkdown :value="aboutQuery" />
          </ContentRenderer>
        </div>
      </div>
    </Profile>
  </div>
</template>

<style scoped lang="scss">
.about {
  min-height: 760px;
  .about-text {
    font-size: 16px;
  }
}
</style>
