<script setup>
defineOptions({
  name: 'Header',
});
</script>

<template>
  <header class="bg-custom-light px-11 py-5 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-3 font-island text-6xl">
        <div class="relative h-28 w-28 mr-4">
          <div
            class="absolute -left-3 -top-3 h-full w-full rounded-full bg-salmon-pink-50"
          ></div>

          <div
            class="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-salmon-pink"
          >
            <span class="font-black text-black">V</span>
          </div>
        </div>
        <span class="text-gray-800">Vista Lab</span>
      </div>

      <div class="flex items-center">
        <img
          src="/profile.png"
          alt="User Profile"
          class="h-28 w-28 rounded-full object-cover shadow-sm cursor-pointer"
        />
      </div>
    </div>
  </header>
</template>
