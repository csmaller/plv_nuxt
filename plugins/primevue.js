import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
//crypto
import VueCryptojs from 'vue-cryptojs';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component('Dialog', Dialog);
  nuxtApp.vueApp.component('Toast', Toast);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Menubar', Menubar);
  nuxtApp.vueApp.component('Carousel', Carousel);
  //non primevue
  nuxtApp.vueApp.use(VueCryptojs);
  //other components that you need
});
