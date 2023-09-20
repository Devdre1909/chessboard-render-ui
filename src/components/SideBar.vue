<template>
  <div class="wrapper">
    <div class="wrapper__items">
      <span v-for="key in boardClicked" :key="key">
        {{ key }}
      </span>
    </div>
    <div>
      <button @click="removeLastClicked">Remove last</button>
      <button @click="resetBoardClicked">Clean all</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useChessStore } from '../stores/chess'

const store = useChessStore()

const { boardClicked } = storeToRefs(store)
const { resetBoardClicked, removeLastClicked } = store
</script>

<style scoped>
.wrapper {
  background: #eee;
  padding: 1rem;
  width: 100%;
  height: 100%;
}

.wrapper__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
