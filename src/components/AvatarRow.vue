<script setup lang="ts">
const users = [
  { src: 'https://i.pravatar.cc/64?img=12', alt: 'User avatar 1' },
  { src: 'https://i.pravatar.cc/64?img=32', alt: 'User avatar 2' },
  { src: 'https://i.pravatar.cc/64?img=5', alt: 'User avatar 3' },
  { src: 'https://i.pravatar.cc/64?img=45', alt: 'User avatar 4' },
];
</script>

<template>
  <div
    class="flex items-center justify-between rounded-2xl bg-white p-8 shadow font-inter"
    role="region"
    aria-label="Project statistics"
  >
    <div class="flex flex-col">
      <h3 class="text-base font-normal text-cyan-blue mb-1">Tasks created</h3>
      <p class="font-black text-5xl text-black">1,500</p>
    </div>

    <div class="flex flex-col items-end">
      <h3 class="text-base font-normal text-black mb-1">
        <span class="text-sky-600">25k+</span> Active Users
      </h3>
      <div
        class="flex -space-x-3"
        role="group"
        aria-label="Active user avatars"
      >
        <img
          v-for="(user, i) in users"
          :key="i"
          :src="user.src"
          :alt="user.alt"
          class="h-11 w-11 rounded-full shadow-sm hover:z-10 transition-transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>
