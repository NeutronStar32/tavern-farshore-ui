<template>
  <div class="contact">
    <p v-if="rows.length === 0" class="contact__empty">没跟谁打过照面</p>
    <div v-for="row in rows" :key="row.name" class="contact__row">
      <span class="contact__name">{{ row.name }}</span>
      <span class="contact__track">
        <span v-for="cell in cells" :key="cell" class="contact__cell" :class="{ 'contact__cell--on': cell <= row.filled }"></span>
      </span>
      <span class="contact__value">{{ row.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const cells = 16;

const rows = computed(() =>
  Object.entries(store.data.接触度).map(([name, value]) => ({
    name,
    value,
    filled: Math.round((Math.min(Math.max(value, 0), 100) / 100) * cells),
  })),
);
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-readout);
  font-size: 12px;
}

.contact__empty {
  color: var(--c-text-muted);
}

.contact__row {
  display: grid;
  grid-template-columns: 5.4em 1fr 2.2em;
  align-items: center;
  gap: 8px;
}

.contact__name {
  color: var(--c-text-muted);
}

.contact__track {
  display: flex;
  gap: 2px;
  height: 7px;
}

.contact__cell {
  flex: 1;
  background: #20252b;
}

.contact__cell--on {
  background: var(--c-primary);
}

.contact__value {
  text-align: right;
  color: var(--c-text-muted);
  font-variant-numeric: tabular-nums;
}
</style>
