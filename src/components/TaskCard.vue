<script setup lang="ts">
import type { Task } from '@/types';

import { CircleCheck, Trash2, SquarePen } from 'lucide-vue-next';

const props = defineProps<{ task: Task }>();
const emit = defineEmits<{
  (e: 'toggle', id: number): void;
  (e: 'edit', id: number): void;
  (e: 'remove', id: number): void;
}>();

// Get priority color
function getPriorityColor(priority: string) {
  switch (priority) {
    case 'high':
      return 'bg-red-100 border-red-200';
    case 'normal':
      return 'bg-amber-100 border-amber-200';
    case 'low':
      return 'bg-green-100 border-green-200';
    default:
      return 'bg-gray-100 border-gray-200';
  }
}
</script>

<template>
  <div class="rounded-md p-4 shadow-sm hover:shadow-md bg-linen">
    <div class="flex items-start justify-between">
      <div class="flex-1 font-inter flex flex-col">
        <div class="flex items-center gap-2 mb-2">
          <div
            :class="[
              'font-bold text-lg  text-charcoal',
              props.task.completed ? 'line-through' : '',
            ]"
          >
            {{ props.task.title }}
          </div>
        </div>

        <p
          class="text-base w-6/12 font-jost text-gray-700 mb-4 font-normal min-h-[3rem] flex-1"
        >
          {{ props.task.detail }}
        </p>

        <div class="flex items-center gap-1 text-charcoal font-bold mt-auto">
          <span class="font-bold">Start date:</span>
          <span class="px-2 py-1 rounded-md">{{ props.task.start }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-3 ml-4">
        <button
          class="p-1 transition-all hover:scale-110 cursor-pointer"
          title="Toggle Complete"
          @click="emit('toggle', props.task.id)"
        >
          <CircleCheck :color="'var(--color-task-text)'" />
        </button>

        <button
          class="p-1 transition-all hover:scale-110 cursor-pointer"
          title="Edit Task"
          @click="emit('edit', props.task.id)"
        >
          <SquarePen :color="'var(--color-task-text)'" />
        </button>

        <button
          class="p-1 transition-all hover:scale-110 cursor-pointer"
          title="Delete Task"
          @click="emit('remove', props.task.id)"
        >
          <Trash2 :color="'var(--color-task-text)'" />
        </button>
      </div>
    </div>
  </div>
</template>
