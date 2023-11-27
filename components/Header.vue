<script lang="ts" setup>
const links = {
  home: [
    { label: 'ABOUT', url: '/about' },
    { label: 'HISTORY', url: '/history' },
    { label: 'WINES', url: '/wines' },
    { label: 'ORCHARD', url: '/orchard' },
  ],
  visit: [
    { label: 'ABOUT', url: '/about' },
    { label: 'HISTORY', url: '/history' },
    { label: 'WINES', url: '/wines' },
    { label: 'ORCHARD', url: '/orchard' },
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
  <div class="header grid align-items-start z-100">
    <div class="col"></div>
    <div class="col-2 nav-dropdown z-100">
      <NavDropdown header="HOME" :links="links.home" url="/" />
    </div>
    <div class="col-2 nav-dropdown">
      <NavDropdown header="VISIT" :links="links.visit" url="/visit" />
    </div>
    <div class="col-2">
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
</template>
<style lang="scss">
.header {
  max-height: 170px;
  .nav-dropdown {
    padding-top: 74px !important;
  }
}
</style>
