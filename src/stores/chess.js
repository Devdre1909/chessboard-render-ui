import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChessStore = defineStore('chess', () => {

  const boardClickedStack = ref([])
  const boardClicked = computed(() => boardClickedStack.value)

  const addBoardClicked = (value) => {
    if (boardClickedStack.value.includes(value)) return
    boardClickedStack.value.push(value)
  }

  const removeLastClicked = () => {
    boardClickedStack.value.pop()
  }

  const resetBoardClicked = () => {
    boardClickedStack.value = []
  }

  return {
    boardClicked,
    addBoardClicked,
    resetBoardClicked,
    removeLastClicked
  }
})
