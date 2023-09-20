<template>
  <div class="wrapper">
    <div class="wrapper__items">
      {{
        Array.from(clickedSquares).length === 0
          ? 'No selection'
          : Array.from(clickedSquares).join(', ')
      }}
    </div>
    <div class="sidebar__actions">
      <button @click="removeLastClickedSquare">Remove last</button>
      <button @click="resetClickedSquares">Clean all</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useChessStore } from '../stores/chess'

const store = useChessStore()

const { clickedSquares } = storeToRefs(store)
const { resetClickedSquares, removeLastClickedSquare } = store
</script>

<style scoped>
.wrapper {
  background: var(--boardBackgroundUIColor);
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.wrapper__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 40px 0;
  color: #fff;
  font-weight: bold;
}

.sidebar__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.sidebar__actions button {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: var(--buttonBgColor);
  color: var(--buttonTextColor);
  border-radius: 0.1rem;
}

.sidebar__theme {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.sidebar__theme button {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: var(--buttonBgColor);
  color: var(--buttonTextColor);
  border-radius: 0.1rem;
}
</style>
