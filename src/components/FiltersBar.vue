<script setup lang="ts">
import type { Category, Priority } from '@/types';

const model = defineModel<{
  q: string;
  category: '' | Category;
  priority: '' | Priority;
}>({
  default: { q: '', category: '', priority: '' },
});
</script>

<template>
  <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
    <div class="flex gap-3">
      <select
        v-model="model.category"
        class="h-10 rounded-lg border border-zinc-300/70 bg-white px-3 text-sm"
      >
        <option value="">By category</option>
        <option value="learning">Learning</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <select
        v-model="model.priority"
        class="h-10 rounded-lg border border-zinc-300/70 bg-white px-3 text-sm"
      >
        <option value="">By priority</option>
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      <span
        class="self-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-900"
      >
        Filters
      </span>
    </div>

    <div>
      <input
        v-model="model.q"
        type="text"
        placeholder="Search by name"
        class="h-10 w-56 rounded-lg border border-zinc-300/70 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>
  </div>
</template>
