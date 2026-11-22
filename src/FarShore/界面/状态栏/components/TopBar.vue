<template>
  <header class="top">
    <span class="top__ship">余烬号</span>
    <span class="top__date">{{ store.data.世界.当前日期 }}</span>
    <span class="top__period">{{ store.data.世界.时段 }}</span>
    <span v-if="!sailing" class="top__rest" title="停泊中"></span>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const sailing = computed(() => store.data.世界.航行状态.状态 !== '停泊');
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 10px 12px 9px;
  background: var(--c-surface-raised);
  border-bottom: 1px solid var(--c-border);
  font-family: var(--font-readout);
}

.top__ship {
  color: var(--c-primary);
  font-size: 15px;
  letter-spacing: 0.14em;
}

.top__date {
  color: var(--c-text);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.top__period {
  padding: 0 5px;
  border: 1px solid var(--c-border);
  color: var(--c-text-muted);
  font-size: 11px;
}

.top__rest {
  width: 6px;
  height: 6px;
  margin-left: auto;
  align-self: center;
  background: var(--c-calm);
}
</style>
