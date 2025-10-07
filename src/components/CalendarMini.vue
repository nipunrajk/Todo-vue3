<script setup lang="ts">
import { ref, computed } from 'vue';

// types
import type { Ref } from 'vue';
import type { DateValue } from '@internationalized/date';
import type { Task } from '@/types';
import { getLocalTimeZone, today } from '@internationalized/date';

// components
import { Calendar } from '@/components/ui/calendar';
import { generateCalendarData, getDatesWithTasks } from '@/lib/calendar';

// Props
interface Props {
  tasks?: Task[];
}

const props = withDefaults(defineProps<Props>(), {
  tasks: () => [],
});

const calendarData = generateCalendarData();
const { weekday, monthName, year, day } = calendarData;

// Get dates that have tasks/notes
const datesWithTasks = computed(() => getDatesWithTasks(props.tasks));

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <div class="rounded-3xl bg-card p-6 shadow">
    <div class="font-island font-normal text-6xl text-salmon-pink">Sunday</div>
    <div class="mt-1 text-5xl font-abhaya font-extrabold">
      {{ String(day).padStart(2, '0') }}, {{ monthName }} {{ year }}
    </div>
    <Calendar
      v-model="value"
      :weekday-format="'short'"
      :dates-with-tasks="datesWithTasks"
      class="rounded-md border"
    />
  </div>
</template>
