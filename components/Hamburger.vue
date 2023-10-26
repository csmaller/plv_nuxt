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
        <ul v-if="show">
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
    #a3b97d,
    #a3b97d 20%,
    white 20%,
    white 40%,
    #a3b97d 40%,
    #a3b97d 60%,
    white 60%,
    white 80%,
    #a3b97d 80%,
    #a3b97d 100%
  );
}

#hamburger-menu #sidebar-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 200px;
  height: 100%;
  background-color: #a3b97d;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 1001;

  ul {
    margin-top: 30px;
    list-style: none;
    line-height: 55px;
  }

  a {
    color: white;
    margin-right: 20px;
  }
}

.show-menu {
  visibility: visible;
  left: 0 !important;
}
#hamburger-input:checked ~ .overlay {
  visibility: visible;
  opacity: 0.4;
}
</style>
