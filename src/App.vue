<script setup>
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="layout">
    <div class="layout__chess">
      <ChessBoard />
    </div>
    <div class="layout__sidebar">
      <SideBar />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: var(--boardBackgroundColor);
  height: 100vh;
  width: 100%;
}

.layout__chess {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.layout__sidebar {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 400px;
  max-width: 300px;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .layout__sidebar {
    min-height: auto;
    width: 100%;
    max-width: 100%;
  }
}
</style>
