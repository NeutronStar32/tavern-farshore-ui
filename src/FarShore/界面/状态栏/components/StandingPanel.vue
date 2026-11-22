<template>
  <div class="standing">
    <p v-if="rows.length === 0" class="standing__empty">还没有人认识你</p>
    <div v-for="row in rows" :key="row.name" class="standing__row">
      <span class="standing__name">{{ row.name }}</span>
      <span class="standing__track">
        <span class="standing__axis"></span>
        <span class="standing__fill" :class="`standing__fill--${row.polarity}`" :style="row.style"></span>
      </span>
      <span class="standing__value" :class="`standing__value--${row.polarity}`">{{ row.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const rows = computed(() =>
  Object.entries(store.data.声望).map(([name, value]) => {
    const width = `${(Math.min(Math.abs(value), 100) / 100) * 50}%`;
    return {
      name,
      value,
      polarity: value > 0 ? 'positive' : value < 0 ? 'negative' : 'flat',
      style: value > 0 ? { left: '50%', width } : { right: '50%', width },
      text: value > 0 ? `+${value}` : `${value}`,
    };
  }),
);
</script>

<style lang="scss" scoped>
.standing {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-readout);
  font-size: 12px;
}

.standing__empty {
  color: var(--c-text-muted);
}

.standing__row {
  display: grid;
  grid-template-columns: 5.4em 1fr 2.6em;
  align-items: center;
  gap: 8px;
}

.standing__name {
  color: var(--c-text-muted);
}

.standing__track {
  position: relative;
  height: 8px;
  background: #14171a;
  border: 1px solid var(--c-border);
}

.standing__axis {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: #4a545f;
}

.standing__fill {
  position: absolute;
  top: 0;
  bottom: 0;
}

.standing__fill--positive {
  background: var(--c-calm);
}

.standing__fill--negative {
  background: var(--c-hostile);
}

.standing__fill--flat {
  background: var(--c-text-muted);
}

.standing__value {
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--c-text);
}

.standing__value--positive {
  color: var(--c-calm);
}

.standing__value--negative {
  color: var(--c-hostile);
}
</style>
