<script lang="ts" setup>
interface LinksInterface {
  label: string;
  url: string;
  children?: LinksInterface[];
}

interface PropsInterface {
  links?: LinksInterface[];
  header: string;
  url: string;
}

const props = defineProps<PropsInterface>();
const { header, links, url } = toRefs(props);

const showMenu = ref(false);
</script>

<template>
  <div class="nav align-content-center p-0" @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <NuxtLink class="nav-header flex w-full justify-content-center" :to="url">{{ header }}</NuxtLink>
    <div v-if="showMenu" class="dropdown-menu flex flex-column z-100">
      <div class="link-container justify-content-end text-center" v-for="link in links" :key="link.label">
        <NuxtLink class="w-full h-full" :to="link.url">{{ link.label }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  min-width: 100%;
  .nav-header {
    color: black;
    font-family: var(--font-baskerville);
    font-size: 18px;
  }
  .dropdown-menu {
    background: white;
    a {
      color: gray;
      font-family: var(--font-comic);
      font-size: 10px;
    }
  }
}
</style>
