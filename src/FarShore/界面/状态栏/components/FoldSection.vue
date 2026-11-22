<template>
  <section class="fold">
    <button type="button" class="fold__head" :aria-expanded="open" @click="open = !open">
      <span class="fold__caret">{{ open ? '－' : '＋' }}</span>
      <span class="fold__title">{{ title }}</span>
      <span class="fold__summary">{{ summary }}</span>
    </button>
    <div v-if="open" class="fold__body">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const props = defineProps<{
  title: string;
  summary: string;
  storageKey: string;
}>();

const open = useLocalStorage(`status_bar:${props.storageKey}`, false);
</script>

<style lang="scss" scoped>
.fold {
  border-top: 1px solid var(--c-border);
}

.fold__head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  width: 100%;
  padding: 7px 12px;
  background: none;
  border: 0;
  color: var(--c-text);
  font-family: var(--font-readout);
  font-size: 12px;
  text-align: left;
  cursor: pointer;
}

.fold__head:hover .fold__title {
  color: var(--c-primary);
}

.fold__caret {
  color: var(--c-text-muted);
  font-size: 11px;
}

.fold__title {
  letter-spacing: 0.08em;
}

.fold__summary {
  margin-left: auto;
  color: var(--c-text-muted);
  font-size: 11px;
}

.fold__body {
  padding: 2px 12px 10px;
}
</style>
