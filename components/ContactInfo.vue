<script setup lang="ts">
const name = 'info';

const { data: infoQuery } = await useAsyncData('info', () => {
  return queryContent('info')
    .where({ header: { $eq: 'CONTACT US' } })
    .findOne();
});
</script>

<template>
  <div v-if="infoQuery" class="contact-info text-center w-full pt-6">
    <h4>{{ infoQuery.header }}</h4>
    <Address
      :address_name="infoQuery.address_name"
      :address_number="infoQuery.address_number"
      :city_state="infoQuery.city_state"
      :email="infoQuery.email"
      :phone="infoQuery.phone"
    />
    <h4>HOURS</h4>

    <ContentRenderer :value="infoQuery">
      <ContentRendererMarkdown :value="infoQuery" />
    </ContentRenderer>
  </div>
</template>
<style lang="scss">
.contact-info {
  position: sticky;
  top: 147px;

  h4 {
    margin-bottom: 10px;
  }
  p {
    font-size: 14px !important;
  }
}
</style>
