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
      'rounded-2xl p-4 shadow',
      tone === 'brown' ? 'bg-rose-300/70 text-zinc-900' : 'bg-amber-300/70',
    ]"
  >
    <div class="text-xs font-bold uppercase tracking-wide opacity-80">
      {{ label }}
    </div>
    <div class="mt-1 text-3xl font-black tabular-nums">{{ value }}</div>
  </div>
</template>
