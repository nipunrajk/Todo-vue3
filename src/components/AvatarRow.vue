<script setup lang="ts">
const users = [
  'https://i.pravatar.cc/64?img=12',
  'https://i.pravatar.cc/64?img=32',
  'https://i.pravatar.cc/64?img=5',
  'https://i.pravatar.cc/64?img=45',
];
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow"
  >
    <div>
      <div class="font-extrabold text-sky-600">25k+ Active Users</div>
      <div class="text-2xl font-extrabold">
        Tasks created <span class="text-sky-600 tabular-nums">1,500</span>
      </div>
    </div>
    <div class="flex -space-x-3">
      <img
        v-for="(u, i) in users"
        :key="i"
        :src="u"
        alt=""
        class="h-10 w-10 rounded-full border-2 border-white shadow"
      />
    </div>
  </div>
</template>
