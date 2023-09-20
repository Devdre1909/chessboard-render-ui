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
      :isSelected="isBoardClicked(square.squareName)"
      @click="addBoardClicked(square.squareName)"
    ></ChessSquare>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ChessSquare from './ChessSquare.vue'
import { useChessStore } from '../stores/chess'
import { storeToRefs } from 'pinia'

const BOARD_SIZE = 8

const store = useChessStore()

const { addBoardClicked } = store
const { boardClicked } = storeToRefs(store)

const squares = ref([])
const gridTemplateColumns = `repeat(${BOARD_SIZE}, 1fr)`

const isBoardClicked = (squareName) => {
  return boardClicked.value.includes(squareName)
}

const calcSquaresSize = () => {
  const deviceWidth = window.innerWidth
  const deviceHeight = window.innerHeight
  const squareWidth = Math.min(deviceWidth, deviceHeight) / BOARD_SIZE
  return `${squareWidth}px`
}

const calcBoardPossibleMaxSize = () => {
  const deviceWidth = window.innerWidth
  const deviceHeight = window.innerHeight
  const squareWidth = Math.min(deviceWidth, deviceHeight)
  return `${squareWidth}px`
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
  background-color: #000;
  width: 100%;
  height: 100%;
  max-width: v-bind('boardMaxSize');
}
</style>
