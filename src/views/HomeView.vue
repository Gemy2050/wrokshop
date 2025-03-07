<script setup lang="ts">
import MenuList from "@/components/food/MenuList.vue";
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <main class="container">
    <Header />
    <MenuList />
  </main>
</template>

<style scoped>
.container {
  background-color: #fff;
  padding-bottom: 15px;
}
</style>
