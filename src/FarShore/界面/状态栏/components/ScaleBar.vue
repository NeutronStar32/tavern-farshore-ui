<template>
  <div class="gauge" :class="`gauge--${tone}`">
    <span class="gauge__label">{{ label }}</span>
    <span class="gauge__track" role="meter" :aria-valuenow="value" :aria-valuemin="0" :aria-valuemax="max">
      <span v-for="cell in cells" :key="cell" class="gauge__cell" :class="{ 'gauge__cell--on': cell <= filled }"></span>
      <span v-if="mark" class="gauge__mark" aria-hidden="true"></span>
    </span>
    <span class="gauge__value">{{ display }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    value: number;
    max: number;
    unit?: string;
    tone?: 'primary' | 'warn' | 'danger' | 'calm';
    digits?: number;
    // 条尾短横：数值偏低时给一个不起眼的标记，不写字
    mark?: boolean;
  }>(),
  { unit: '', tone: 'primary', digits: 0, mark: false },
);

const cells = 20;

const clamped = computed(() => Math.min(Math.max(props.value, 0), props.max));
const filled = computed(() => Math.round((clamped.value / props.max) * cells));
const display = computed(() => `${clamped.value.toFixed(props.digits)}${props.unit}`);
</script>

<style lang="scss" scoped>
.gauge {
  display: grid;
  grid-template-columns: 3.6em 1fr 4.6em;
  align-items: center;
  gap: 8px;
  font-family: var(--font-readout);
  font-size: 12px;
}

.gauge__label {
  color: var(--c-text-muted);
  letter-spacing: 0.06em;
}

.gauge__track {
  position: relative;
  display: flex;
  gap: 2px;
  height: 9px;
  padding: 2px;
  background: #14171a;
  border: 1px solid var(--c-border);
}

.gauge__cell {
  flex: 1;
  background: #20252b;
}

.gauge__cell--on {
  background: var(--c-primary);
}

.gauge__mark {
  position: absolute;
  top: -3px;
  right: -1px;
  width: 2px;
  height: 13px;
  background: var(--c-text-muted);
}

.gauge__value {
  text-align: right;
  color: var(--c-text);
  font-variant-numeric: tabular-nums;
}

.gauge--warn .gauge__cell--on {
  background: var(--c-warn);
}

.gauge--warn .gauge__value {
  color: var(--c-warn);
}

.gauge--danger .gauge__cell--on {
  background: var(--c-danger);
}

.gauge--danger .gauge__value {
  color: var(--c-danger);
}

.gauge--calm .gauge__cell--on {
  background: var(--c-calm);
}
</style>
