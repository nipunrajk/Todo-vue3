<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.51856 5.50005C2.51868 3.96944 3.70704 2.65205 5.3569 2.35355C7.00675 2.05504 8.65859 2.85855 9.30223 4.27268C9.94586 5.68682 9.40203 7.31772 8.00332 8.16801C6.60461 9.0183 4.74057 8.85115 3.55117 7.7688C2.88994 7.16707 2.51849 6.35097 2.51856 5.50005Z"
      :stroke="color"
      stroke-width="0.66"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.28156 5.50008L5.45672 6.56937L7.80755 4.43079"
      :stroke="color"
      stroke-width="0.66"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  height?: number;
  width?: number;
  color?: string;
  fill?: string;
  viewBox?: string;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  height: 11,
  width: 13,
  color: '#4B332F',
  fill: 'none',
  viewBox: '0 0 13 11',
  className: '',
});
</script>
