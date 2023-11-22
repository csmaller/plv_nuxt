<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  ],
});

useSeoMeta({
  title: 'PeaceLoveVino',
  description:
    'Nasketucket Bay Vineyard is Fairhavens first vineyard and winery, opening in the Spring of 2024. The rustic barn and relaxed farm vibe serving native, unfiltered, natural wines and drink options makes this vineyard stand out from the rest. Wine tastings, spritzers, sangrias and bottles are available for purchase to enjoy as you relax in our comfortable, stunning barn and patio area. Food trucks and live acoustic music can be expected weekly as well as regularly scheduled public events throughout the year like harvest parties, grape crushing, pick your own pumpkins, farmers markets, artisan & antique festivals, yoga retreats, viticulture tours and education, wine making classes, wreath making classes, paint nights, and much more! Small and intimate private events can also be arranged to celebrate your special occasion. Nasketucket Bay Vineyard is truly a unique place to spend the afternoon enjoying nature and loved ones in a magical setting. Peace, Love, Vino.',
  ogDescription:
    'Nasketucket Bay Vineyard is Fairhavens first vineyard and winery, opening in the Spring of 2024. The rustic barn and relaxed farm vibe serving native, unfiltered, natural wines and drink options makes this vineyard stand out from the rest. Wine tastings, spritzers, sangrias and bottles are available for purchase to enjoy as you relax in our comfortable, stunning barn and patio area. Food trucks and live acoustic music can be expected weekly as well as regularly scheduled public events throughout the year like harvest parties, grape crushing, pick your own pumpkins, farmers markets, artisan & antique festivals, yoga retreats, viticulture tours and education, wine making classes, wreath making classes, paint nights, and much more! Small and intimate private events can also be arranged to celebrate your special occasion. Nasketucket Bay Vineyard is truly a unique place to spend the afternoon enjoying nature and loved ones in a magical setting. Peace, Love, Vino.',
});

const colorMode = useColorMode();
colorMode.preference = 'light';
</script>
<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column">
        <Header />

        <div id="main-content">
          <div class="flex w-full">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
    <footer class="flex w-full text-center justify-content-center align-items-center pt-2">
      <Address />
    </footer>
  </div>
</template>

<style lang="scss">
@use 'primeflex/primeflex.css';
@use '~/style/main.scss';

.logo {
  width: 160px;
  height: 160px;

  @media (max-width: 770px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>
