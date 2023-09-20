<template>
  <div
    class="chess-board"
    :style="{
      gridTemplateColumns: gridTemplateColumns
    }"
  >
    <ChessSquare
      v-for="(square, index) in squares"
      :key="index"
      :isEven="square.isEven"
      :square="square"
      :size="square.size"
      :keyName="square.squareName"
      :isSelected="isSquareClicked(square.squareName)"
      @click="addClickedSquare(square.squareName)"
    ></ChessSquare>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ChessSquare from './ChessSquare.vue'
import { useChessStore } from '../stores/chess'

const BOARD_SIZE = 8
const BOARD_PADDING = 20

const store = useChessStore()

const { addClickedSquare, isSquareClicked } = store

const squares = ref([])
const gridTemplateColumns = `repeat(${BOARD_SIZE}, 1fr)`

const calcSquaresSize = () => {
  const size = calcBoardPossibleMaxSize()
  return `calc(${size} / ${BOARD_SIZE})`
}

const calcBoardPossibleMaxSize = () => {
  const deviceWidth = window.innerWidth
  const deviceHeight = window.innerHeight
  const squareWidth = Math.min(deviceWidth, deviceHeight)
  return `${squareWidth - BOARD_PADDING * 2}px`
}

const boardMaxSize = ref(calcBoardPossibleMaxSize())

const initializeBoard = () => {
  const size = calcSquaresSize()
  boardMaxSize.value = calcBoardPossibleMaxSize()

  const rows = Array.from({ length: BOARD_SIZE }).map((_, index) => index + 1)
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  squares.value = Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
    const row = Math.floor(index / BOARD_SIZE)
    const column = index % BOARD_SIZE
    const isEven = (row + column) % 2 === 0
    const squareName = columns[column] + rows[row]
    return {
      row,
      column,
      isEven,
      size,
      squareName
    }
  })
}

onMounted(() => {
  initializeBoard()
  window.addEventListener('resize', initializeBoard)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', initializeBoard)
})
</script>

<style scoped>
.chess-board {
  display: grid;
  background-color: var(--boardBackgroundColor);
  width: 100%;
  height: 100%;
  max-width: v-bind('boardMaxSize');
  max-height: v-bind('boardMaxSize');
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
