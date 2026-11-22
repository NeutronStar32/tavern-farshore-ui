<template>
  <header class="top">
    <div class="top__line">
      <span class="top__ship">余烬号</span>
      <span class="top__date">{{ store.data.世界.当前日期 }}</span>
      <span class="top__period">{{ store.data.世界.时段 }}</span>
    </div>
    <div class="top__line top__line--sub">
      <span class="top__place">{{ store.data.世界.当前地点 }}</span>
      <span v-if="sailing" class="top__voyage">
        {{ store.data.世界.航行状态.状态 }} · {{ store.data.世界.航行状态.目的地 }} · 剩 {{ store.data.世界.航行状态.剩余天数 }} 天
      </span>
      <span v-else class="top__rest" title="停泊中"></span>
    </div>
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
  padding: 10px 12px 9px;
  background: var(--c-surface-raised);
  border-bottom: 1px solid var(--c-border);
}

.top__line {
  display: flex;
  align-items: baseline;
  gap: 10px;
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

.top__line--sub {
  margin-top: 4px;
}

.top__place {
  color: var(--c-text-muted);
  font-size: 11px;
  letter-spacing: 0.04em;
}

.top__voyage {
  margin-left: auto;
  color: var(--c-warn);
  font-size: 11px;
}

.top__rest {
  width: 6px;
  height: 6px;
  margin-left: auto;
  background: var(--c-calm);
}
</style>
