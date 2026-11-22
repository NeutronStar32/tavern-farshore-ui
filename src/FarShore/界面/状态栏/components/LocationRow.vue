<template>
  <div class="loc">
    <span class="loc__label">位置</span>
    <span class="loc__place">{{ store.data.世界.当前地点 || '未记录' }}</span>
    <span v-if="sailing" class="loc__voyage">
      {{ store.data.世界.航行状态.状态 }} · {{ store.data.世界.航行状态.目的地 }} · 剩
      {{ store.data.世界.航行状态.剩余天数 }} 天
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const sailing = computed(() => store.data.世界.航行状态.状态 !== '停泊');
</script>

<style lang="scss" scoped>
.loc {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 7px 12px 6px;
  border-bottom: 1px solid var(--c-border);
  font-family: var(--font-readout);
}

.loc__label {
  flex: 0 0 34px;
  color: var(--c-text-muted);
  font-size: 11px;
  letter-spacing: 0.16em;
}

.loc__place {
  color: var(--c-text);
  font-size: 13px;
  letter-spacing: 0.04em;
}

.loc__voyage {
  margin-left: auto;
  color: var(--c-warn);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}
</style>
