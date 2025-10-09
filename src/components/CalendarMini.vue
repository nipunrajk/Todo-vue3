<script setup lang="ts">
import { ref, computed } from 'vue';

// types
import type { Ref } from 'vue';
import type { DateValue } from '@internationalized/date';
import type { Task } from '@/types';
import { getLocalTimeZone, today } from '@internationalized/date';

// components
import { Calendar } from '@/components/ui/calendar';
import { generateCalendarData, getDatesWithTasks } from '@/lib/calendar';
import Toolbar from './Toolbar.vue';
import FiltersBar from './FiltersBar.vue';
import TaskCard from './TaskCard.vue';
import StatCard from './StatCard.vue';
import AvatarRow from './AvatarRow.vue';

// Props
interface Props {
  tasks?: Task[];
}

const props = withDefaults(defineProps<Props>(), {
  tasks: () => [],
});

// Emits for task management
const emit = defineEmits<{
  (e: 'create', payload: { title: string; detail: string }): void;
  (e: 'toggle', id: number): void;
  (e: 'edit', id: number): void;
  (e: 'remove', id: number): void;
}>();

const calendarData = generateCalendarData();
const { weekday, monthName, year, day } = calendarData;

// Get dates that have tasks/notes
const datesWithTasks = computed(() => getDatesWithTasks(props.tasks));

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;

// Filter state
const filters = ref({
  q: '',
  category: '' as '' | Task['category'],
  priority: '' as '' | Task['priority'],
});

// Filtered tasks
const filtered = computed(() =>
  props.tasks.filter((t) => {
    const q = filters.value.q.trim().toLowerCase();
    const byQ = !q || t.title.toLowerCase().includes(q);
    const byC =
      !filters.value.category || t.category === filters.value.category;
    const byP =
      !filters.value.priority || t.priority === filters.value.priority;
    return byQ && byC && byP;
  })
);

// Pagination
const page = ref(1);
const pageSize = 4;
const paged = computed(() => filtered.value.slice(0, page.value * pageSize));

function loadMore() {
  if (paged.value.length < filtered.value.length) page.value++;
}

const completedCount = computed(
  () => props.tasks.filter((t) => t.completed).length
);
const pendingCount = computed(
  () => props.tasks.filter((t) => !t.completed).length
);

// Event handlers
function handleCreate(payload: { title: string; detail: string }) {
  emit('create', payload);
}

function handleToggle(id: number) {
  emit('toggle', id);
}

function handleEdit(id: number) {
  emit('edit', id);
}

function handleRemove(id: number) {
  emit('remove', id);
}
</script>

<template>
  <div class="rounded-3xl bg-white p-4 shadow-lg">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
      <!-- Column 1: Date Header + Calendar (1 unit) -->
      <div class="lg:col-span-1 space-y-3">
        <div>
          <div class="font-island font-normal text-5xl text-red-400">
            {{ weekday }}
          </div>
          <div class="mt-1 text-3xl font-abhaya font-extrabold">
            {{ String(day).padStart(2, '0') }}, {{ monthName }} {{ year }}
          </div>
        </div>

        <!-- Calendar -->
        <div>
          <Calendar
            v-model="value"
            :weekday-format="'short'"
            :dates-with-tasks="datesWithTasks"
            class="rounded-md border"
          />
        </div>
      </div>

      <!-- Column 2: Task Management Controls (3 units) -->
      <div class="lg:col-span-3 space-y-3">
        <!-- Toolbar -->
        <div>
          <Toolbar @create="handleCreate" />
        </div>

        <!-- Filters -->
        <div>
          <FiltersBar v-model="filters" />
        </div>

        <!-- Task Cards -->
        <div>
          <div class="grid grid-cols-2 gap-3">
            <TaskCard
              v-for="t in paged"
              :key="t.id"
              :task="t"
              @toggle="handleToggle"
              @remove="handleRemove"
              @edit="handleEdit"
            />
          </div>

          <!-- Load More Button -->
          <button
            v-if="paged.length < filtered.length"
            class="mx-auto mt-3 block rounded-xl border-2 border-amber-400 px-4 py-2 font-medium text-amber-900 hover:bg-amber-50 transition-colors"
            @click="loadMore"
          >
            Load more
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Section Below -->
    <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
</template>
