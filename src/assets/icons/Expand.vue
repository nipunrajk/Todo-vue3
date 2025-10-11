<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      d="M1.08765 3.21597H4.04724C4.31335 3.21597 4.44641 3.51059 4.25863 3.68236L2.77884 5.03602C2.66195 5.14295 2.47293 5.14295 2.35729 5.03602L0.876247 3.68236C0.688475 3.51059 0.821532 3.21597 1.08765 3.21597ZM4.25863 2.02157L2.77884 0.667903C2.66195 0.560976 2.47293 0.560976 2.35729 0.667903L0.876247 2.02157C0.688475 2.19333 0.821532 2.48795 1.08765 2.48795H4.04724C4.31335 2.48795 4.44641 2.19333 4.25863 2.02157Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number;
  height?: string | number;
  color?: string;
  fill?: string;
  viewBox?: string;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: 5,
  color: '#4B332F',
  fill: 'none',
  viewBox: '0 0 5 6',
  className: '',
});
</script>
