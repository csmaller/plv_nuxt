<script lang="ts" setup>
interface Image {
  image: string;
}

interface PropsInterface {
  position: string;
  image?: string;
  header?: string;
  isSlider?: boolean;
  images?: Image[];
  backgroundSize?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), { backgroundSize: '65% 90%' });
const { position, image, header, isSlider, images } = toRefs(props);
const order = computed(() => (position.value === 'left' ? 2 : 1));
const imgOrder = computed(() => (position.value === 'left' ? 1 : 2));
const backgroundImagePosition = computed(() => (position.value === 'left' ? 'right' : 'left'));
</script>
<template>
  <div id="wrapper" class="w-full h-full overflow-hidden px-0 sm:px-0 lg:px-6 text-center">
    <div class="content mt-3 flex flex-wrap justify-content-center">
      <div class="blurb p-6 col-12 md:col-6">
        <div v-if="header" class="layout-header" v-text="header" />
        <slot />
      </div>
      <div class="img-container col-12 md:col-6">
        <img v-if="!isSlider" :src="image" class="img" />
        <ImageCarousel v-else-if="images" :images="images" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#wrapper {
  .content {
    background-image: url(/img/bg-green.png);
    background-size: v-bind(backgroundSize);
    background-position: v-bind(backgroundImagePosition);
    background-repeat: no-repeat;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    /* optional */
    -webkit-box-align: start;
    -moz-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;

    .blurb {
      margin-top: 20px;
      -webkit-box-ordinal-group: v-bind(order);
      -moz-box-ordinal-group: v-bind(order);
      -ms-flex-order: v-bind(order);
      -webkit-order: v-bind(order);
      order: v-bind(order);
      width: 50%;
      font-family: var(--font-candara);
      font-size: 18px;

      .layout-header {
        font-weight: light;
        text-align: center;
        font-size: 24px;
        font-family: var(--font-baskerville);
      }
      p {
        color: black;
      }
    }
    .img-container {
      margin-top: 40px;
      -webkit-box-ordinal-group: v-bind(imgOrder);
      -moz-box-ordinal-group: v-bind(imgOrder);
      -ms-flex-order: v-bind(imgOrder);
      -webkit-order: v-bind(imgOrder);
      order: v-bind(imgOrder);
      max-height: 450px;
      max-width: 900px;
    }

    @media (max-width: 767px) {
      background: var(--color-green);

      .blurb {
        width: 100%;
        padding: 6px !important;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1;
      }

      .img-container {
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2;
      }
    }
  }
}
</style>
