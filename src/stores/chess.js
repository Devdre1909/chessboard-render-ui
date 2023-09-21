import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChessStore = defineStore('chess', () => {
  const selectedSquares = ref([])

  const lastSelectedSquare = computed(() => {
    return selectedSquares.value[selectedSquares.value.length - 1]
  })

  const addSelectedSquare = (value) => {
    if (lastSelectedSquare.value === value) return
    selectedSquares.value.push(value)
  }

  const removeLastSelectedSquare = () => {
    selectedSquares.value.pop()
  }

  const resetSelectedSquares = () => {
    selectedSquares.value = []
  }

  const isSquareSelected = (value) => {
    return selectedSquares.value.includes(value)
  }

  return {
    selectedSquares,
    lastSelectedSquare,
    addSelectedSquare,
    removeLastSelectedSquare,
    resetSelectedSquares,
    isSquareSelected
  }
})
