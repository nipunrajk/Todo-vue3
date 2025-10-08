<script setup lang="ts">
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
    case 'high': return 'bg-red-100 border-red-200';
    case 'normal': return 'bg-amber-100 border-amber-200';
    case 'low': return 'bg-green-100 border-green-200';
    default: return 'bg-gray-100 border-gray-200';
  }
}

// Get category icon
function getCategoryIcon(category: string) {
  switch (category) {
    case 'learning': return '📚';
    case 'work': return '💼';
    case 'personal': return '👤';
    default: return '📋';
  }
}
</script>

<template>
  <div :class="[
    'rounded-2xl p-4 shadow-sm border transition-all hover:shadow-md',
    getPriorityColor(props.task.priority),
    props.task.completed ? 'opacity-75' : ''
  ]">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-lg">{{ getCategoryIcon(props.task.category) }}</span>
          <div :class="[
            'text-base font-bold text-zinc-800',
            props.task.completed ? 'line-through text-zinc-500' : ''
          ]">
            {{ props.task.title }}
          </div>
        </div>
        
        <p class="text-sm text-zinc-700 mb-3 leading-relaxed">
          {{ props.task.detail }}
        </p>
        
        <div class="flex items-center gap-4 text-xs text-zinc-600">
          <div class="flex items-center gap-1">
            <span class="font-semibold">Start date:</span>
            <span class="tabular-nums bg-white px-2 py-1 rounded-md">{{ props.task.start }}</span>
          </div>
          <div :class="[
            'px-2 py-1 rounded-full text-xs font-medium',
            props.task.priority === 'high' ? 'bg-red-200 text-red-800' :
            props.task.priority === 'normal' ? 'bg-amber-200 text-amber-800' :
            'bg-green-200 text-green-800'
          ]">
            {{ props.task.priority }}
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 ml-4">
        <button
          :class="[
            'flex h-8 w-8 items-center justify-center rounded-lg border text-sm transition-all',
            props.task.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 bg-white/80 hover:bg-green-50 hover:border-green-300'
          ]"
          title="Toggle Complete"
          @click="emit('toggle', props.task.id)"
        >
          {{ props.task.completed ? '✓' : '○' }}
        </button>
        
        <button
          class="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white/80 hover:bg-blue-50 hover:border-blue-300 text-sm transition-all"
          title="Edit Task"
          @click="emit('edit', props.task.id)"
        >
          ✎
        </button>
        
        <button
          class="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white/80 hover:bg-red-50 hover:border-red-300 text-sm transition-all"
          title="Delete Task"
          @click="emit('remove', props.task.id)"
        >
          🗑
        </button>
      </div>
    </div>
  </div>
</template>