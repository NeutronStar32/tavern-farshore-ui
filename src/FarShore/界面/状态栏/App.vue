<template>
  <main class="console">
    <TopBar />

    <div class="gauges">
      <ScaleBar label="燃料" :value="store.data.船.燃料" :max="100" unit="%" :tone="toneOf(数据.燃料)" />
      <ScaleBar label="物资" :value="store.data.船.生活物资" :max="547" unit=" 天" :tone="toneOf(数据.物资)" :mark="数据.物资 < 60" />
      <ScaleBar label="船体" :value="store.data.船.船体" :max="100" unit="%" :tone="toneOf(数据.船体)" />
      <ScaleBar label="护盾" :value="store.data.船.护盾" :max="100" unit="%" :tone="toneOf(数据.护盾)" />
    </div>

    <div class="points">
      <StatusDot label="炮台" :state="store.data.船.炮台" :tone="炮台tone" />
      <StatusDot label="冬眠舱" :state="冬眠text" :tone="store.data.船.冬眠舱占用 > 0 ? 'primary' : 'muted'" />
    </div>

    <FoldSection title="货舱" :summary="货舱摘要" storage-key="cargo">
      <CargoPanel />
    </FoldSection>

    <FoldSection title="声望" :summary="声望摘要" storage-key="standing">
      <StandingPanel />
    </FoldSection>

    <FoldSection title="接触度" :summary="接触摘要" storage-key="contact">
      <ContactPanel />
    </FoldSection>

    <div v-if="警示" class="alert">{{ 警示 }}</div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CargoPanel from './components/CargoPanel.vue';
import ContactPanel from './components/ContactPanel.vue';
import FoldSection from './components/FoldSection.vue';
import ScaleBar from './components/ScaleBar.vue';
import StandingPanel from './components/StandingPanel.vue';
import StatusDot from './components/StatusDot.vue';
import TopBar from './components/TopBar.vue';
import { useDataStore } from './store';

const store = useDataStore();

// 阈值写在界面这一层：条目里只写数值怎么变，界面只负责把数字翻成颜色
const 数据 = computed(() => ({
  燃料: store.data.船.燃料,
  物资: store.data.船.生活物资,
  船体: store.data.船.船体,
  护盾: store.data.船.护盾,
}));

function toneOf(kind: '燃料' | '物资' | '船体' | '护盾') {
  const value = 数据.value[kind];
  if (kind === '燃料') {
    return value < 15 ? 'danger' : value < 30 ? 'warn' : 'primary';
  }
  if (kind === '物资') {
    return value < 60 ? 'warn' : 'primary';
  }
  if (kind === '船体') {
    return value < 30 ? 'danger' : value < 60 ? 'warn' : 'primary';
  }
  return value < 10 ? 'danger' : value < 30 ? 'warn' : 'primary';
}

const 炮台tone = computed(() => (store.data.船.炮台 === '正常' ? 'calm' : store.data.船.炮台 === '受损' ? 'warn' : 'danger'));
const 冬眠text = computed(() => `${store.data.船.冬眠舱占用}／6`);

const 货舱摘要 = computed(() => {
  const rows = Object.values(store.data.货舱);
  return rows.length === 0 ? '空' : `${rows.length} 项`;
});

const 声望摘要 = computed(() => `${Object.keys(store.data.声望).length} 处`);
const 接触摘要 = computed(() => `${Object.keys(store.data.接触度).length} 族`);

// 情境层只报数值，不写建议：看不看得懂，玩家自己判断
const 警示 = computed(() => {
  const parts: string[] = [];
  if (store.data.船.燃料 < 15) {
    parts.push(`燃料 ${Math.round(store.data.船.燃料)}%`);
  }
  if (store.data.船.船体 < 30) {
    parts.push(`船体 ${Math.round(store.data.船.船体)}%`);
  }
  return parts.join(' · ');
});
</script>

<style lang="scss" scoped>
.console {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  box-shadow: inset 0 0 0 1px #0f1113;
  font-family: var(--font-body);
  overflow: hidden;
}

.gauges {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 12px;
}

.points {
  display: flex;
  gap: 16px;
  padding: 0 12px 9px;
}

.alert {
  padding: 6px 12px;
  border-top: 1px solid var(--c-danger);
  background: #2a1c1b;
  color: var(--c-danger);
  font-family: var(--font-readout);
  font-size: 12px;
  letter-spacing: 0.08em;
}
</style>
