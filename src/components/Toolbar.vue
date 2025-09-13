<script setup lang="ts">
const emit = defineEmits<{
  (e: 'create', payload: { title: string; detail: string }): void;
}>();

const title = $ref<string>('');
const detail = $ref<string>('');

function create() {
  if (!title.trim()) return;
  emit('create', { title: title.trim(), detail: detail.trim() });
  title = '';
  detail = '';
}
</script>

<template>
  <div class="flex gap-3 items-center">
    <input
      v-model="title"
      type="text"
      placeholder="Type Title Of Task"
      class="h-10 w-full max-w-md rounded-xl border border-zinc-300/70 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
    />
    <input
      v-model="detail"
      type="text"
      placeholder="Detail Of Your Task"
      class="h-10 w-full max-w-md rounded-xl border border-zinc-300/70 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
    />
    <button
      class="inline-flex h-10 items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-600 px-4 font-medium text-white shadow hover:bg-emerald-700"
      @click="create"
    >
      <span class="text-lg leading-none">＋</span> Add
    </button>
  </div>
</template>
