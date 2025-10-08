<script lang="ts" setup>
import type { CalendarRootEmits, CalendarRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { CalendarRoot, useForwardPropsEmits } from 'reka-ui';
import { cn } from '@/lib/utils';
import { isWeekend, formatDateForComparison } from '@/lib/calendar';
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from '.';

interface Props extends CalendarRootProps {
  class?: HTMLAttributes['class'];
  datesWithTasks?: Set<string>;
}

const props = defineProps<Props>();
const emits = defineEmits<CalendarRootEmits>();

const delegatedProps = reactiveOmit(props, 'class', 'datesWithTasks');

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// Helper function to check if a date has tasks
function hasTasksOnDate(date: any): boolean {
  if (!props.datesWithTasks || !date) return false;
  const dateStr = formatDateForComparison(date.year, date.month - 1, date.day);
  return props.datesWithTasks.has(dateStr);
}

// Helper function to check if a weekday index is weekend
function isWeekendDay(dayIndex: number): boolean {
  // dayIndex: 0=Sunday, 1=Monday, ..., 6=Saturday
  return dayIndex === 0 || dayIndex === 6;
}
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    data-slot="calendar"
    :class="cn('p-3 max-w-max', props.class)"
    v-bind="forwarded"
  >
    <CalendarHeader>
      <CalendarHeading />

      <div class="flex items-center gap-1">
        <CalendarPrevButton />
        <CalendarNextButton />
      </div>
    </CalendarHeader>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CalendarGrid v-for="month in grid" :key="month.value.toString()">
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="(day, index) in weekDays"
              :key="day"
              :is-weekend="isWeekendDay(index)"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody>
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                :has-notes="hasTasksOnDate(weekDate)"
                :is-weekend="
                  isWeekend(
                    new Date(weekDate.year, weekDate.month - 1, weekDate.day)
                  )
                "
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
