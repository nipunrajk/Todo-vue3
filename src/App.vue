<script setup lang="ts">
import { computed, ref } from 'vue';
import CalendarMini from './components/CalendarMini.vue';
import Toolbar from './components/Toolbar.vue';
import FiltersBar from './components/FiltersBar.vue';
import TaskCard from './components/TaskCard.vue';
import StatCard from './components/StatCard.vue';
import AvatarRow from './components/AvatarRow.vue';
import Header from './components/AppHeader.vue';
import type { Task } from '@/types';

const tasks = ref<Task[]>([
  {
    id: 1,
    title: 'Learn Javascript',
    detail: 'Master the language powering the modern web.',
    completed: false,
    start: '2023-07-07',
    category: 'learning',
    priority: 'normal',
  },
  {
    id: 2,
    title: 'Learn Vue 3',
    detail: 'Composition API & <script setup>.',
    completed: true,
    start: '2024-04-02',
    category: 'learning',
    priority: 'high',
  },
  {
    id: 3,
    title: 'Read Go Docs',
    detail: 'HTTP handlers, routers, JSON.',
    completed: false,
    start: '2024-04-03',
    category: 'learning',
    priority: 'normal',
  },
  {
    id: 4,
    title: 'Refactor CSS',
    detail: 'Extract tokens & shadows.',
    completed: false,
    start: '2024-04-03',
    category: 'work',
    priority: 'low',
  },
]);

const filters = ref({
  q: '',
  category: '' as '' | Task['category'],
  priority: '' as '' | Task['priority'],
});

const filtered = computed(() =>
  tasks.value.filter((t) => {
    const q = filters.value.q.trim().toLowerCase();
    const byQ = !q || t.title.toLowerCase().includes(q);
    const byC =
      !filters.value.category || t.category === filters.value.category;
    const byP =
      !filters.value.priority || t.priority === filters.value.priority;
    return byQ && byC && byP;
  })
);

const completedCount = computed(
  () => tasks.value.filter((t) => t.completed).length
);
const pendingCount = computed(
  () => tasks.value.filter((t) => !t.completed).length
);

function addTask(payload: { title: string; detail: string }) {
  tasks.value.unshift({
    id: Date.now(),
    title: payload.title,
    detail: payload.detail,
    completed: false,
    start: new Date().toISOString().slice(0, 10),
    category: 'learning',
    priority: 'normal',
  });
}

function toggle(id: number) {
  const t = tasks.value.find((x) => x.id === id);
  if (t) t.completed = !t.completed;
}
function removeTask(id: number) {
  tasks.value = tasks.value.filter((t) => t.id !== id);
}
function editTask(id: number) {
  const t = tasks.value.find((x) => x.id === id);
  if (!t) return;
  const next = prompt('Edit title', t.title);
  if (next && next.trim()) t.title = next.trim();
}

const page = ref(1);
const pageSize = 4;
const paged = computed(() => filtered.value.slice(0, page.value * pageSize));
function loadMore() {
  if (paged.value.length < filtered.value.length) page.value++;
}
</script>

<template>
  <Header />
  <div class="mx-5 py-6">
    <h1 class="mb-6 text-heading font-roboto font-semibold text-zinc-800">
      Hello, Aqeel,
      <span class="text-zinc-500">Start planning today</span>
    </h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-[320px,1fr]">
      <!-- Left: Calendar + Stats + Banner -->
      <div class="space-y-4">
        <CalendarMini :tasks="tasks" />
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="COMPLETED TASKS"
            :value="String(completedCount).padStart(2, '0')"
          />
          <StatCard
            label="PENDING TASKS"
            tone="brown"
            :value="String(pendingCount).padStart(2, '0')"
          />
          <div class="sm:col-span-1">
            <AvatarRow />
          </div>
        </div>
      </div>

      <!-- Right: Panel -->
      <div class="rounded-3xl bg-zinc-100 p-6 shadow">
        <Toolbar @create="addTask" />
        <FiltersBar v-model="filters" />

        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <TaskCard
            v-for="t in paged"
            :key="t.id"
            :task="t"
            @toggle="toggle"
            @remove="removeTask"
            @edit="editTask"
          />
        </div>

        <button
          v-if="paged.length < filtered.length"
          class="mx-auto mt-5 block rounded-xl border-2 border-amber-400 px-5 py-2 font-medium text-amber-900 hover:bg-amber-50"
          @click="loadMore"
        >
          Load more
        </button>
      </div>
    </div>
  </div>
</template>
