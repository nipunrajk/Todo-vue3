<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'create', payload: { title: string; detail: string }): void;
}>();

const title = ref<string>('');
const detail = ref<string>('');

function create() {
  if (!title.value.trim()) return;
  emit('create', { 
    title: title.value.trim(), 
    detail: detail.value.trim() 
  });
  title.value = '';
  detail.value = '';
}
</script>

<template>
  <div class="flex gap-3 items-center">
    <input
      v-model="title"
      type="text"
      placeholder="Type Title Of Task"
      class="h-12 flex-1 rounded-xl border border-zinc-300/70 bg-blue-50/50 px-4 text-sm placeholder:text-zinc-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
      @keydown.enter="create"
    />
    <input
      v-model="detail"
      type="text"
      placeholder="Detail Of Your Task"
      class="h-12 flex-1 rounded-xl border border-zinc-300/70 bg-purple-50/50 px-4 text-sm placeholder:text-zinc-500 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
      @keydown.enter="create"
    />
    <button
      class="h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500 text-white font-bold text-xl hover:bg-emerald-600 transition-colors shadow-lg"
      @click="create"
      title="Add Task"
    >
      +
    </button>
  </div>
</template>