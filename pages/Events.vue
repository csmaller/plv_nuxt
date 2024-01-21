<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import events from '@/content/json/events.json';
console.log(events.events);
onBeforeMount(() => {
  calendarOptions.value.events = events.events;
});
const handleDateClick = (arg: any) => {
  console.log(arg.event.id + ' ' + arg.event.title + ':' + arg.event.description);
};

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dateClick: handleDateClick,
  eventClick: handleDateClick,
  weekends: true,
  events: [],
});
</script>

<template>
  <div class="w-full p-6">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped lang="scss"></style>
