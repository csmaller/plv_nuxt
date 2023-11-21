<script lang="ts" setup>
interface PropsInterface {
  position: string;
  image?: string;
  header: string;
}

const props = defineProps<PropsInterface>();
const { position, image, header } = toRefs(props);
const order = computed(() => (position.value === 'left' ? 2 : 1));
const imgOrder = computed(() => (position.value === 'left' ? 1 : 2));
const backgroundImagePosition = computed(() => (position.value === 'left' ? 'right' : 'left'));
</script>
<template>
  <div id="wrapper" class="w-full h-full overflow-hidden px-6">
    <div class="content mt-3 flex justify-content-center">
      <div class="blurb p-6">
        <div class="layout-header" v-text="header" />
        <slot />
      </div>
      <img :src="image" class="img" />
    </div>
  </div>
</template>
<style lang="scss">
#wrapper {
  .content {
    background-image: url(/_nuxt/img/bg-green.png);
    background-size: 65% 90%;
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
      font-family: var(--p-font-family);
      font-size: 14px;

      .layout-header {
        font-weight: light;
        font-size: 24px;
        font-family: var(--title-font-family);
      }
      p {
        color: black;
      }
    }
    img {
      margin-top: 40px;
      -webkit-box-ordinal-group: v-bind(imgOrder);
      -moz-box-ordinal-group: v-bind(imgOrder);
      -ms-flex-order: v-bind(imgOrder);
      -webkit-order: v-bind(imgOrder);
      order: v-bind(imgOrder);
      max-height: 450px;
      max-width: 900px;
    }
  }
}
</style>
