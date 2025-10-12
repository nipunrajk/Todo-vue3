<script setup lang="ts">
import { ref } from 'vue';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const emit = defineEmits<{
  (e: 'create', payload: { title: string; detail: string }): void;
}>();

const isOpen = ref(false);
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
  isOpen.value = false;
}

function createFromDialog() {
  create();
}

function cancel() {
  title.value = '';
  detail.value = '';
  isOpen.value = false;
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
    <Dialog v-model:open="isOpen">
      <DialogTrigger as-child>
        <button
          class="h-12 w-12 p-4 flex items-center justify-center rounded-lg bg-green-sage text-white font-bold text-xl shadow-lg"
          title="Add Task"
        >
          +
        </button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task by filling in the details below.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid gap-2">
            <label for="dialog-title" class="text-sm font-medium">Title</label>
            <input
              v-model="title"
              id="dialog-title"
              type="text"
              placeholder="Type Title Of Task"
              class="h-10 rounded-lg border border-silver-gray bg-input px-3 text-sm placeholder:text-silver-gray outline-none"
              @keydown.enter="create"
            />
          </div>
          <div class="grid gap-2">
            <label for="dialog-detail" class="text-sm font-medium"
              >Detail</label
            >
            <input
              v-model="detail"
              id="dialog-detail"
              type="text"
              placeholder="Detail Of Your Task"
              class="h-10 rounded-lg border border-silver-gray bg-input px-3 text-sm placeholder:text-silver-gray outline-none"
              @keydown.enter="create"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            type="button"
            @click="cancel"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            @click="createFromDialog"
            class="px-4 py-2 text-sm font-medium text-white bg-green-sage rounded-lg hover:bg-green-sage/90 transition-colors"
          >
            Add Task
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
