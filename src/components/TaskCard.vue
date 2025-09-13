<script setup lang="ts">
import type { Task } from '@/types';

const props = defineProps<{ task: Task }>();
const emit = defineEmits<{
  (e: 'toggle', id: number): void;
  (e: 'edit', id: number): void;
  (e: 'remove', id: number): void;
}>();
</script>

<template>
  <div class="rounded-2xl bg-amber-200/70 p-4 shadow">
    <div class="flex items-start justify-between">
      <div>
        <div class="text-base font-extrabold text-zinc-800">
          {{ props.task.title }}
        </div>
        <p class="mt-1 text-sm text-zinc-700">
          {{ props.task.detail }}
        </p>
        <div class="mt-3 text-sm">
          <span class="font-semibold">Start date :</span>
          <span class="tabular-nums">{{ props.task.start }}</span>
        </div>
      </div>

      <div class="flex gap-2">
        <button
          class="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-white/70"
          title="Toggle"
          @click="emit('toggle', props.task.id)"
        >
          ✔
        </button>
        <button
          class="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-white/70"
          title="Edit"
          @click="emit('edit', props.task.id)"
        >
          ✎
        </button>
        <button
          class="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-white/70"
          title="Delete"
          @click="emit('remove', props.task.id)"
        >
          🗑
        </button>
      </div>
    </div>
  </div>
</template>
