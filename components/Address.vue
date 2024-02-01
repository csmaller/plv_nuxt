<script setup lang="ts">
interface PropsInterface {
  address_name: string;
  address_number: string;
  city_state: string;
  email?: string;
  phone?: string;
}
const props = defineProps<PropsInterface>();

const { address_name, address_number, city_state, email, phone } = toRefs(props);
</script>

<template>
  <div class="w-full flex flex-wrap justify-content-center text-center pb-6">
    <a
      href="https://www.google.com/maps/place/Nasketucket+Bay+Vineyard/@41.6652334,-70.8638948,15z/data=!4m2!3m1!1s0x0:0xc51725b8327f2bd2?sa=X&ved=2ahUKEwj0t5HcpIuEAxXlhu4BHT2-DDEQ_BJ6BAhrEAA"
      target="_blank"
    >
      <div class="line">{{ address_name }}</div>
      <div class="line">{{ address_number }}</div>
      <div class="line">{{ city_state }}</div>
    </a>
    <br />
    <div class="line">Phone:{{ phone }}</div>
    <div class="line">
      email:
      <a :href="`mailto:${email}`" target="_blank">
        {{ email }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line {
  margin: 0px;
  padding: 0;
  font-size: 14px;
  width: 100%;
}

a {
  color: black;
  text-decoration: underline;
}

a:hover {
  color: red;
}
</style>
