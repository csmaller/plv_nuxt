<script lang="ts" setup>
import { links } from '@/utils/links';
</script>
<template>
  <div class="header grid align-items-start">
    <div class="w-full hidden md:flex">
      <div class="col"></div>
      <div class="col-2 nav-dropdown">
        <NavDropdown header="HOME" :links="links.home" url="/" />
      </div>
      <div class="col-2 nav-dropdown">
        <NavDropdown header="VISIT" :links="links.visit" url="/visit#tasting" />
      </div>
      <div class="col-2 logo-container flex justify-content-center">
        <a href="/"><img src="/img/new_logo.png" class="flex logo mt-0" /></a>
      </div>
      <div class="col-2 nav-dropdown">
        <NavDropdown header="EVENTS" :links="links.events" url="/events#calendar" />
      </div>
      <div class="col-2 nav-dropdown">
        <!--       
        <NavDropdown header="CONTACT" :links="links.contact" url="/contact#contact_us" /> -->
      </div>
      <div class="col"></div>
    </div>
    <div
      class="sm-header w-full px-3 logo-container flex sm:flex md:hidden logo mt-0 align-items-center justify-content-between"
    >
      <a href="/"><img src="/img/new_logo.png" /></a>
      <Hamburger />
    </div>
  </div>
</template>
<style lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  max-height: 160px;
  height: 160px;

  background-color: white;
  z-index: 10000;
  .nav-dropdown {
    padding-top: 64px !important;
    display: flex;
    justify-content: center;
  }
}

.sm-header {
  img {
    width: 180px;
    max-width: inherit !important;
    height: inherit !important;
  }
}
</style>
