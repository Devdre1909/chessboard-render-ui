<script setup>
import ChessBoard from './components/ChessBoard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <div class="layout__chess">
      <ChessBoard />
    </div>
    <div class="layout__sidebar">

      <Sidebar />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 2fr 300px;
  grid-gap: 1rem;
  background: #222;
}

.layout__chess {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}

.layout__sidebar {
  display: flex;
  justify-content: center;
  align-items: center
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
