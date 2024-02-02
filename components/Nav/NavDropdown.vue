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
  isMobile?: boolean;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  isMobile: false,
});

const { header, links, url, isMobile } = toRefs(props);

const toggleMenu = (shouldShowMenu: boolean) => {
  if (!isMobile.value) showMenu.value = shouldShowMenu;
};

const showMenu = ref(isMobile.value ? true : false);
</script>

<template>
  <div class="nav align-content-center p-0 pb-3" @mouseover="toggleMenu(true)" @mouseleave="toggleMenu(false)">
    <NuxtLink class="nav-header flex w-full justify-content-center" :to="url">{{ header }}</NuxtLink>
    <div v-if="showMenu" class="dropdown-menu flex flex-column z-100 pb-3">
      <div class="link-container justify-content-end text-center p-0" v-for="link in links" :key="link.label">
        <NuxtLink class="w-full h-full p-0" :to="link.url">{{ link.label }}</NuxtLink>
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
    background: white;
  }
  .dropdown-menu {
    background-color: white;
    .link-container {
      height: 18px;
      a {
        color: gray;
        font-family: var(--font-comic);
        font-size: 10px;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 770px) {
  .nav {
    .dropdown-menu {
      background-color: white;
      margin-top: 20px;
      margin-bottom: 20px;
      .link-container {
        height: 34px;
        align-content: center;
        a {
          color: gray;
          font-family: var(--font-comic);
          font-size: 12px;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
