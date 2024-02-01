<script setup lang="ts">
// import { GoogleMap, Marker } from "vue3-google-map";

const center = ref({ lat: 41.6652334, lng: -70.8638948 });

const { data: directionsQuery } = await useAsyncData('directions', () => {
  return queryContent('contact')
    .where({ title: { $eq: 'directions' } })
    .findOne();
});
</script>

<template>
  <div v-if="directionsQuery">
    <LayoutContainer
      :image="directionsQuery?.image"
      :position="directionsQuery?.image_position"
      :header="directionsQuery?.header"
    >
      <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap> -->
      <ContentRenderer :value="directionsQuery">
        <ContentRendererMarkdown :value="directionsQuery" />
      </ContentRenderer>
    </LayoutContainer>
  </div>
</template>
