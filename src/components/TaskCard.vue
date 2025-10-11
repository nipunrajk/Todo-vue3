<script setup lang="ts">
import Checked from '@/assets/icons/Checked.vue';
import Edit from '@/assets/icons/Edit.vue';
import Delete from '@/assets/icons/Delete.vue';
import type { Task } from '@/types';

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
  <div
    class="rounded-md p-4 shadow-sm border transition-all hover:shadow-md bg-linen"
  >
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <div
            :class="[
              'text-base font-bold text-zinc-800',
              props.task.completed ? 'line-through text-zinc-500' : '',
            ]"
          >
            {{ props.task.title }}
          </div>
        </div>

        <p class="text-sm text-zinc-700 mb-3 leading-relaxed">
          {{ props.task.detail }}
        </p>

        <div class="flex items-center gap-4 text-xs text-zinc-600">
          <div class="flex items-center gap-1">
            <span class="font-semibold">Start date:</span>
            <span class="px-2 py-1 rounded-md">{{ props.task.start }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 ml-4">
        <button title="Toggle Complete" @click="emit('toggle', props.task.id)">
          <Checked :width="60" :height="40" />
        </button>

        <button title="Edit Task" @click="emit('edit', props.task.id)">
          <Edit :height="20" :width="24" />
        </button>

        <button title="Delete Task" @click="emit('remove', props.task.id)">
          <Delete :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>
