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
    detail: detail.value.trim(),
  });
  title.value = '';
  detail.value = '';
}
</script>

<template>
  <div class="flex gap-3 items-center">
    <input
      v-model="title"
      id="title"
      type="text"
      placeholder="Type Title Of Task"
      class="h-12 w-64 rounded-lg border border-silver-gray bg-input p-4 text-sm placeholder:text-silver-gray outline-none"
      @keydown.enter="create"
    />
    <input
      v-model="detail"
      id="detail"
      type="text"
      placeholder="Detail Of Your Task"
      class="h-12 flex-1 rounded-lg border border-silver-gray bg-input px-4 text-sm placeholder:text-silver-gray outline-none"
      @keydown.enter="create"
    />
    <button
      class="h-12 w-12 p-4 flex items-center justify-center rounded-lg bg-green-sage text-white font-bold text-xl shadow-lg"
      @click="create"
      title="Add Task"
    >
      +
    </button>
  </div>
</template>
