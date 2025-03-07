<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Menu, Search, X } from "lucide-vue-next";
import { categoriesStore } from "@/store/categories";
import { foodStore } from "@/store/food";

const search = ref("");
const selectedOption = ref(categoriesStore.categories[0].id);
const menu = ref(false);

watchEffect(() => {
  const category = categoriesStore.categories.find((option) => option.id === selectedOption.value)!;
  categoriesStore.setSelectedCategory(category);
});

watchEffect(() => {
  foodStore.setFilteredFood(
    foodStore.food.filter((food) => food.name.toLowerCase().includes(search.value.toLowerCase()))
  );
});

function toggleMenu() {
  menu.value = !menu.value;
  const inputsGroup = document.querySelector(".inputs-group");
  if (menu.value) {
    inputsGroup?.classList.add("active");
  } else {
    inputsGroup?.classList.remove("active");
  }
}
</script>

<template>
  <header>
    <h3>Menu</h3>
    <div class="inputs-group">
      <select v-model="selectedOption">
        <option
          v-for="category in categoriesStore.categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>

      <div class="search-container">
        <input type="text" placeholder="Search" v-model="search" class="search-input" />
        <Search :size="18" class="search-icon" />
      </div>
      <X class="close-icon" @click="toggleMenu" />
    </div>
    <Menu class="menu-icon" @click="toggleMenu" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: var(--color-secondary);
}

.search-input {
  width: 100%;
  height: 35px;
  padding-right: 30px;
}

.inputs-group {
  display: flex;
  gap: 10px;
}

.inputs-group select {
  width: 200px;
}

.menu-icon {
  display: none;
  cursor: pointer;
}
.close-icon {
  display: none;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  color: red;
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }
  .inputs-group {
    position: fixed;
    top: 0;
    left: -200%;
    width: 250px;
    height: 100%;
    padding: 20px;
    padding-top: 60px;
    z-index: 100;
    display: flex;
    background-color: var(--color-background);
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .inputs-group select {
    width: 100%;
  }
  .close-icon {
    display: block;
  }
}

.inputs-group.active {
  left: 0;
}
</style>
