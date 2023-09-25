<template>
  <div class="wrapper">
    <div class="wrapper__items">
      {{
        Array.from(selectedSquares).length === 0
          ? 'No selection'
          : Array.from(selectedSquares).join(', ')
      }}
    </div>
    <div class="sidebar__actions">
      <button @click="removeLastSelectedSquare" :disabled="selectedSquares.length === 0">
        Remove last
      </button>
      <button @click="resetSelectedSquares" :disabled="selectedSquares.length === 0">
        Clean all
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useChessStore } from '../stores/chess'

const { selectedSquares } = storeToRefs(useChessStore())
const { resetSelectedSquares, removeLastSelectedSquare } = useChessStore()
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
  max-width: 260px;
  width: 260px;
}

@media (max-width: 768px) {
  .wrapper {
    max-width: 100%;
    width: 100%;
  }
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
  border: 1px solid transparent;
}

.sidebar__actions button:hover {
  background: var(--buttonHoverBgColor);
  border: 1px solid #fff;
  color: #fff;
}

.sidebar__actions button:hover:disabled {
  background: var(--buttonBgColor);
}

.sidebar__actions button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
