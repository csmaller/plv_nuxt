<script lang="ts" setup>
interface PropsInterface {
  header?: string;
}

const props = defineProps<PropsInterface>();
const { header } = toRefs(props);
</script>
<template>
  <div id="no_image_wrapper" class="w-full h-full overflow-hidden px-0 sm:px-0 lg:px-4 text-center">
    <div class="content mt-3 flex flex-wrap justify-content-center">
      <div class="blurb p-6 w-full">
        <div v-if="header" class="layout-header" v-text="header" />
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#no_image_wrapper {
  .content {
    background-image: url(/img/bg-green.png);
    background-size: 100% 100%;
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
      width: 100%;
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

    @media (max-width: 767px) {
      background: var(--color-green);

      .blurb {
        width: 100%;
        padding: 6px !important;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1;
      }
    }
  }
}
</style>
