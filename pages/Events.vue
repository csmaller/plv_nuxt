<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const handleDateClick = (arg: any) => {
  console.log(arg.event.id + ' ' + arg.event.title + ':' + arg.event.description);
};

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dateClick: handleDateClick,
  eventClick: handleDateClick,
  weekends: true,
  events: [
    { title: 'event 1', date: '2024-01-05', id: '123', description: 'here is a description' },
    { title: 'event 2', date: '2024-01-06', id: '223', description: 'here is a description' },
  ],
};
</script>

<template>
  <div class="w-full p-6">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped lang="scss"></style>
