<script setup lang="ts">
import { ref } from "vue";
import FoodCard from "./FoodCard.vue";
import type { IMenu } from "@/interfaces";
const props = defineProps<{
  category: IMenu;
}>();

const isPizzaElement = props.category.name === "Pizza";
const isOpen = ref(isPizzaElement);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="category">
    <button @click="toggleOpen">
      {{ category.name }} <span>{{ isOpen ? "▼" : "▲" }}</span>
    </button>
    <div v-if="isOpen" class="food-list">
      <FoodCard v-for="food in category.items" :key="food.name" :food="food" />
    </div>
  </div>
</template>

<style scoped>
.category {
  margin-bottom: 20px;
}
.food-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
</style>
