<script lang="ts" setup>
const links = {
  home: [
    { label: 'ABOUT', url: '/#about' },
    { label: 'HISTORY', url: '/#history' },
    { label: 'WINES', url: '/#wines' },
    { label: 'ORCHARD', url: '/#orchard' },
    { label: 'STORE', url: '/#store' },
  ],
  visit: [
    { label: 'TASTING ROOM', url: '/visit#tasting' },
    { label: 'VINEYARD TOURS', url: '/visit#tours' },
    { label: 'PICNIC IN THE VINES', url: '/visit#picnic' },
    { label: 'PROPOSAL PACKAGE', url: '/visit#proposal' },
    { label: 'PRIVATE FIRE PITS', url: '/visit#firepit' },
  ],
  events: [
    { label: 'ABOUT', url: '/about' },
    { label: 'HISTORY', url: '/history' },
    { label: 'WINES', url: '/wines' },
    { label: 'ORCHARD', url: '/orchard' },
  ],
  contact: [
    { label: 'ABOUT', url: '/about' },
    { label: 'HISTORY', url: '/history' },
    { label: 'WINES', url: '/wines' },
    { label: 'ORCHARD', url: '/orchard' },
  ],
};
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
        <NavDropdown header="EVENTS" :links="links.events" url="/events" />
      </div>
      <div class="col-2 nav-dropdown">
        <NavDropdown header="CONTACT" :links="links.contact" url="/contact" />
      </div>
      <div class="col"></div>
    </div>
    <div
      class="sm-header w-full px-3 logo-container sm:flex md:hidden logo mt-0 align-items-center justify-content-between"
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
