<script setup>
defineProps({
  isEven: Boolean,
  size: String,
  keyName: String,
  isSelected: Boolean,
  onclick: Function
})
</script>

<template>
  <button
    :class="{
      [$style.chessSquare]: true,
      [$style.isSelected]: isSelected,
      [$style.isEven]: isEven,
      [$style.isOdd]: !isEven
    }"
    :style="{
      width: size,
      height: size
    }"
    @click="onclick"
  >
    <span>{{ keyName }}</span>
  </button>
</template>

<style module>
.isOdd {
  background-color: var(--squareColorOne);
}
.isEven {
  background-color: var(--squareColorTwo);
}

.isSelected {
  background-color: yellow;
  color: black;
}

.chessSquare {
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  z-index: 0;
}

.chessSquare:hover {
  filter: brightness(1.2);
}

.chessSquare span {
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
</style>
