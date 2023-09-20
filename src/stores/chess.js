import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChessStore = defineStore('chess', () => {
  const clickedSquares = ref(new Set())

  const addClickedSquare = (value) => {
    clickedSquares.value.add(value)
  }

  const removeLastClickedSquare = () => {
    const lastClicked = [...clickedSquares.value].pop()
    clickedSquares.value.delete(lastClicked)
  }

  const resetClickedSquares = () => {
    clickedSquares.value.clear()
  }

  const isSquareClicked = computed(() => (square) => {
    return clickedSquares.value.has(square)
  })

  return {
    clickedSquares,
    addClickedSquare,
    removeLastClickedSquare,
    resetClickedSquares,
    isSquareClicked
  }
})
