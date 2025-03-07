import foodData from "@/data/food.json";
import { reactive } from "vue";
import type { IFood } from "@/interfaces";
export const foodStore = reactive({
  food: foodData.foods,
  filteredFood: foodData.foods,
  setFilteredFood(food: IFood[]) {
    this.filteredFood = food;
  },
});
