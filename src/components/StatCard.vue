<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
  tone?: 'tan' | 'brown';
}>();
</script>

<template>
  <div
    :class="[
      'rounded-2xl p-8 shadow text-charcoal font-inter',
      tone === 'brown' ? 'bg-ash-rose' : 'bg-linen',
    ]"
  >
    <div class="text-base font-bold uppercase tracking-wide opacity-80">
      {{ label }}
    </div>
    <div class="mt-1 font-black text-5xl">{{ value }}</div>
  </div>
</template>
