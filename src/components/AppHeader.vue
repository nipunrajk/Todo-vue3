<script setup>
defineOptions({
  name: 'Header',
});
</script>

<template>
  <header class="bg-custom-light px-15px py-3px shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div
          class="w-10 h-10 bg-red-300 bg-opacity-50 rounded-full flex items-center justify-center text-red-700 font-bold text-xl select-none"
        >
          r
        </div>
        <span class="text-gray-800 text-3xl font-script italic">Vista Lab</span>
      </div>

      <div class="flex items-center">
        <!-- <img
          src="@/assets/profile.png"
          alt="User Profile"
          class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm cursor-pointer"
        /> -->
      </div>
    </div>
  </header>
</template>
