<script lang="ts" setup>
import { ref } from 'vue';
import { links } from '@/utils/links';
const show = ref<boolean>(false);

const toggleMenu = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="flex sm:flex md:hidden">
    <label id="hamburger-menu" @click="toggleMenu">
      <nav id="sidebar-menu" :class="show ? `show-menu` : null">
        <ul>
          <li><NavDropdown header="HOME" :links="links.home" url="/" :is-mobile="true" /></li>
          <li><NavDropdown header="VISIT" :links="links.visit" url="/visit#tasting" :is-mobile="true" /></li>
          <li><NavDropdown header="EVENTS" :links="links.events" url="/events#calendar" :is-mobile="true" /></li>
          <li><NavDropdown header="CONTACT" :links="links.contact" url="/contact#contact_us" :is-mobile="true" /></li>
        </ul>
      </nav>
    </label>

    <div class="overlay"></div>
  </div>
</template>

<style lang="scss">
#hamburger-menu {
  width: 75px;
  cursor: pointer;
  height: 75px;
  display: block;
  border: none;
  padding: 0px;
  margin: 23px;
  background: linear-gradient(
    to bottom,
    gray,
    gray 20%,
    white 20%,
    white 40%,
    gray 40%,
    gray 60%,
    white 60%,
    white 80%,
    gray 80%,
    gray 100%
  );
}

#hamburger-menu #sidebar-menu {
  position: fixed;
  top: 0;
  overflow-y: scroll;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 100vh;
  background-color: white;
  padding: 0px 10px;
  transition: 0.3s;
  z-index: 1001;
  visibility: hidden;

  ul {
    margin-top: 40px;
    list-style: none;
    background-color: white;

    li {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  a {
    color: black;
  }
}

.show-menu {
  visibility: visible !important;
}

#hamburger-input:checked ~ .overlay {
  visibility: visible;
  opacity: 0.4;
}
</style>
