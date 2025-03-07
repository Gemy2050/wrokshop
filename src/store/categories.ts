import foodData from "@/data/food.json";
import { reactive } from "vue";
import type { ICategory } from "@/interfaces";

export const categoriesStore = reactive({
  categories: [{ id: 0, name: "All Categories" }, ...foodData.categories],
  selectedCategory: { id: 0, name: "All Categories" },
  setCategories(categories: ICategory[]) {
    this.categories = categories;
  },
  setSelectedCategory(category: ICategory) {
    this.selectedCategory = category;
  },
});
