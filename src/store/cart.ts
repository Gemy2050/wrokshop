import type { ISelectedFood } from "@/interfaces";
import { reactive } from "vue";

export const cartStore = reactive({
  items: [] as ISelectedFood[],
  addItem(item: ISelectedFood) {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    } else {
      this.items.push(item);
    }
  },
  removeItem(item: ISelectedFood) {
    this.items = this.items.filter((i) => i.id !== item.id);
  },
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  },
});
