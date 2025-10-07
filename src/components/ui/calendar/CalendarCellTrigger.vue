<script lang="ts" setup>
import type { CalendarCellTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { CalendarCellTrigger, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface Props extends CalendarCellTriggerProps {
  class?: HTMLAttributes['class'];
  hasNotes?: boolean;
  isWeekend?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});

const delegatedProps = reactiveOmit(props, 'class', 'hasNotes', 'isWeekend');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarCellTrigger
    data-slot="calendar-cell-trigger"
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'size-8 p-0 font-normal aria-selected:opacity-100 cursor-default',
        // Today
        '[&[data-today]:not([data-selected])]:bg-salmon-pink [&[data-today]:not([data-selected])]:text-accent-foreground',
        // Selected
        'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
        // Disabled
        'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-muted-foreground',
        // Weekend styling
        props.isWeekend && !props.hasNotes ? 'text-red-500' : '',
        // Notes indicator - black background with white text
        props.hasNotes ? 'bg-black text-white hover:bg-gray-800' : '',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
