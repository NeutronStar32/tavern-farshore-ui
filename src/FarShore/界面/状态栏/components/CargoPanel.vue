<template>
  <div class="cargo">
    <p v-if="rows.length === 0" class="cargo__empty">货舱是空的</p>
    <div v-for="row in rows" :key="row.name" class="cargo__row">
      <span class="cargo__name">{{ row.name }}</span>
      <span class="cargo__count">×{{ row.count }}</span>
      <span class="cargo__value">{{ row.value }} cr</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const rows = computed(() =>
  Object.entries(store.data.货舱).map(([name, item]) => ({
    name,
    count: item.数量,
    value: Math.round(item.估值),
  })),
);
</script>

<style lang="scss" scoped>
.cargo {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: var(--font-readout);
  font-size: 12px;
}

.cargo__empty {
  color: var(--c-text-muted);
}

.cargo__row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  padding-bottom: 3px;
  border-bottom: 1px dotted var(--c-border);
}

.cargo__name {
  color: var(--c-text);
}

.cargo__count {
  color: var(--c-text-muted);
  font-variant-numeric: tabular-nums;
}

.cargo__value {
  min-width: 5.4em;
  text-align: right;
  color: var(--c-primary);
  font-variant-numeric: tabular-nums;
}
</style>
