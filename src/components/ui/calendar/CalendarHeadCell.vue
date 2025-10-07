<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { CalendarHeadCell, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';

interface Props extends CalendarHeadCellProps {
  class?: HTMLAttributes['class'];
  isWeekend?: boolean;
}

const props = defineProps<Props>();

const delegatedProps = reactiveOmit(props, 'class', 'isWeekend');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeadCell
    data-slot="calendar-head-cell"
    :class="
      cn(
        'rounded-md w-8 font-normal text-[0.8rem]',
        // Weekend styling (Saturday = 6, Sunday = 0)
        props.isWeekend ? 'text-red' : 'text-muted-foreground',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
