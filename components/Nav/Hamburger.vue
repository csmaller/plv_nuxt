<script lang="ts" setup>
import { ref } from 'vue';

const show = ref<boolean>(false);

const toggleMenu = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="sm:flex md:hidden">
    <label id="hamburger-menu" @click="toggleMenu">
      <nav id="sidebar-menu" :class="show ? `show-menu` : null">
        <ul>
          <li><RouterLink to="/" v-text="`Home`" /></li>
          <li><RouterLink to="/about" v-text="`About`" /></li>
          <li><RouterLink to="/contact" v-text="`Contact`" /></li>
        </ul>
      </nav>
    </label>

    <div class="overlay"></div>
  </div>
</template>

<style lang="scss">
#hamburger-menu {
  width: 50px;
  cursor: pointer;
  height: 50px;
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

  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 100%;
  background-color: gray;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 1001;
  visibility: hidden;

  ul {
    margin-top: 30px;
    list-style: none;
    line-height: 55px;
    border: 1px solid red;
  }

  a {
    color: white;
    margin-right: 20px;
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
