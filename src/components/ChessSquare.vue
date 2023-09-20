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
      [$style.isSelected]: isSelected,
      [$style.isEven]: isEven,
      [$style.isOdd]: !isEven
    }"
    class="chessSquare"
    onclick="onclick"
  >
    <span>{{ keyName }}</span>
  </button>
</template>

<style module>
.isOdd {
  background-color: #fff;
  color: black;
}
.isEven {
  background-color: #000;
  color: white;
}

.isSelected {
  background-color: yellow;
  color: black;
}
</style>

<style scoped>
.chessSquare {
  width: v-bind('size');
  height: v-bind('size');
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  border: 2px solid black;
  outline: none;
}

.chessSquare:hover {
  border: 2px solid red;
}

.chessSquare span {
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
</style>
