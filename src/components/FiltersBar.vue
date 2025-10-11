<script setup lang="ts">
import Expand from '@/assets/icons/Expand.vue';
import Search from '@/assets/icons/Search.vue';
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
  <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
    <div class="flex gap-3 items-center">
      <div class="relative">
        <select
          name="category"
          v-model="model.category"
          class="h-10 rounded-xs bg-linen px-3 pr-8 text-sm font-medium text-amber-900 outline-none appearance-none cursor-pointer"
        >
          <option value="">By category</option>
          <option value="learning">Learning</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        <div
          class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <Expand :size="12" />
        </div>
      </div>

      <div class="relative">
        <select
          name="priority"
          v-model="model.priority"
          class="h-10 p-2 rounded-xs border bg-linen px-3 pr-8 text-sm font-medium text-amber-900 outline-none appearance-none cursor-pointer"
        >
          <option value="">By priority</option>
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
        <div
          class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <Expand :size="12" />
        </div>
      </div>
    </div>

    <div class="relative">
      <input
        v-model="model.q"
        type="text"
        placeholder="Search by name"
        class="h-10 w-64 rounded-lg border-2 border-linen bg-white px-5 text-sm outline-non text-deep-teal focus:none"
      />
      <div class="absolute top-5 right-5 -translate-y-1/2">
        <Search size="20" />
      </div>
    </div>
  </div>
</template>
