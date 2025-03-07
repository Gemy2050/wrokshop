<template>
  <div>
    <CategorySection v-for="category in menu" :key="category.name" :category="category" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CategorySection from "./CategorySection.vue";

import type { IFood, IMenuList } from "@/interfaces";
import { categoriesStore } from "@/store/categories";
import { foodStore } from "@/store/food";

// reduce foodData categoris and items to menu
const foodGroups = computed(() => {
  return foodStore.filteredFood.reduce((acc: IMenuList[], food: IFood) => {
    const group = acc.find((cat) => cat.name === food.category);
    if (group) {
      group.items.push(food);
    } else {
      acc.push({
        name: food.category,
        items: [food],
      });
    }
    return acc;
  }, []);
});

const menu = computed(() => {
  if (categoriesStore.selectedCategory.name === "All Categories") {
    return foodGroups.value;
  }
  return foodGroups.value.filter((group) => group.name === categoriesStore.selectedCategory.name);
});
</script>
