<template>
  <div class="wrapper">
    <div class="wrapper__items">
      <span v-for="key in clickedSquares" :key="key">
        {{ key }}
      </span>
    </div>
    <div class="sidebar__actions">
      <button @click="removeLastClickedSquare">Remove last</button>
      <button @click="resetClickedSquares">Clean all</button>
    </div>
    <div class="sidebar__theme">
      <button @click="changeTheme('brown-green')">Default</button>
      <button @click="changeTheme('blue-red')">blue-red</button>
      <button @click="changeTheme('purple-yellow')">purple-yellow</button>
      <button @click="changeTheme('green-blue')">green-blue</button>

    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useChessStore } from '../stores/chess'

const store = useChessStore()

const { clickedSquares } = storeToRefs(store)
const { resetClickedSquares, removeLastClickedSquare } = store

const changeTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value)
}
</script>

<style scoped>
.wrapper {
  background: var(--boardBackgroundUIColor);
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
  margin: 40px 0;
}

.wrapper__items span {
  background-color: var(--boardBackgroundColor);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
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
