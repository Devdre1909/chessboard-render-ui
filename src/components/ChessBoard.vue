<template>
  <div
    class="chess-board"
    :style="{
      gridTemplateColumns: gridTemplateColumns,
      maxWidth: boardMaxSize,
      maxHeight: boardMaxSize
    }"
  >
    <ChessSquare
      v-for="square in squares"
      :key="square.squareName"
      :isEven="square.isEven"
      :square="square"
      :size="square.size"
      :keyName="square.squareName"
      :isSelected="lastSelectedSquare === square.squareName"
      @click="addSelectedSquare(square.squareName)"
    ></ChessSquare>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ChessSquare from './ChessSquare.vue'
import { useChessStore } from '../stores/chess'

const BOARD_SIZE = 8
const BOARD_PADDING = 20

const store = useChessStore()

const { addSelectedSquare } = store
const lastSelectedSquare = computed(() => store.lastSelectedSquare)

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

  const rows = Array.from({ length: BOARD_SIZE })
    .map((_, index) => index + 1)
    .reverse()
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
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
