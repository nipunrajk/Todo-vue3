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
  <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
    <div class="flex gap-3 items-center">
      <select
        v-model="model.category"
        class="h-10 rounded-lg border border-amber-300 bg-amber-50 px-3 text-sm font-medium text-amber-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
      >
        <option value="">By category 📂</option>
        <option value="learning">📚 Learning</option>
        <option value="work">💼 Work</option>
        <option value="personal">👤 Personal</option>
      </select>
      
      <select
        v-model="model.priority"
        class="h-10 rounded-lg border border-amber-300 bg-amber-50 px-3 text-sm font-medium text-amber-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
      >
        <option value="">By priority 🎯</option>
        <option value="high">🔴 High</option>
        <option value="normal">🟡 Normal</option>
        <option value="low">🟢 Low</option>
      </select>
    </div>

    <div class="relative">
      <input
        v-model="model.q"
        type="text"
        placeholder="Search by name"
        class="h-10 w-64 rounded-lg border border-zinc-300/70 bg-white pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
      />
      <div class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
        🔍
      </div>
    </div>
  </div>
</template>