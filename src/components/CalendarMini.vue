<script setup lang="ts">
const now = new Date();
const weekday = now.toLocaleString(undefined, { weekday: 'long' });
const monthName = now.toLocaleString(undefined, { month: 'long' });
const year = now.getFullYear();
const day = now.getDate();

const first = new Date(year, now.getMonth(), 1);
const start = (first.getDay() + 6) % 7; // Monday=0
const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
const cells = Array.from({ length: 42 }, (_, i) => {
  const v = i - start + 1;
  return v >= 1 && v <= daysInMonth ? v : null;
});
</script>

<template>
  <div class="rounded-3xl bg-white/70 p-6 shadow">
    <div class="font-serif text-3xl text-rose-400">Sunday</div>
    <div class="mt-1 text-2xl font-extrabold">
      {{ String(day).padStart(2, '0') }}, {{ monthName }} {{ year }}
    </div>

    <div class="mt-4 rounded-2xl bg-white p-4">
      <div class="mb-2 flex items-center justify-between text-sm text-zinc-600">
        <strong class="text-zinc-800">{{ monthName }}</strong
        ><span>{{ year }}</span>
      </div>

      <div class="grid grid-cols-7 gap-1 text-center text-[11px] text-zinc-500">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>

      <div class="mt-1 grid grid-cols-7 gap-1">
        <div
          v-for="(c, i) in cells"
          :key="i"
          :class="[
            'grid h-8 place-items-center rounded-lg text-sm',
            c === day ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-800',
            !c && 'opacity-40',
          ]"
        >
          {{ c ?? '' }}
        </div>
      </div>
    </div>
  </div>
</template>
