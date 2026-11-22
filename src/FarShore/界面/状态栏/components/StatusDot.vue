<template>
  <span class="dot" :class="`dot--${tone}`">
    <span class="dot__mark"></span>
    <span class="dot__label">{{ label }}</span>
    <span class="dot__state">{{ state }}</span>
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    state: string;
    tone?: 'primary' | 'warn' | 'danger' | 'calm' | 'muted';
  }>(),
  { tone: 'calm' },
);
</script>

<style lang="scss" scoped>
.dot {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-readout);
  font-size: 12px;
}

.dot__mark {
  width: 7px;
  height: 7px;
  background: var(--c-calm);
}

.dot__label {
  color: var(--c-text-muted);
  letter-spacing: 0.06em;
}

.dot__state {
  color: var(--c-text);
}

.dot--warn .dot__mark {
  background: var(--c-warn);
}

.dot--warn .dot__state {
  color: var(--c-warn);
}

.dot--danger .dot__mark {
  background: var(--c-danger);
}

.dot--danger .dot__state {
  color: var(--c-danger);
}

.dot--primary .dot__mark {
  background: var(--c-primary);
}

.dot--muted .dot__mark {
  background: var(--c-text-muted);
}

.dot--muted .dot__state {
  color: var(--c-text-muted);
}
</style>
