<script setup lang="ts">
import { ref } from "vue";
import type { IFood } from "@/interfaces/index.ts";
import { useToast } from "vue-toastification";
import { cartStore } from "@/store/cart";

const props = defineProps<{
  food: IFood;
}>();

const selected = ref(false);
const quantity = ref(1);
const toast = useToast();

const handleToggle = () => {
  const data = {
    id: props.food.id,
    price: props.food.price,
    selected: selected.value,
    quantity: quantity.value,
  };

  if (selected.value) {
    cartStore.addItem(data);
    toast.clear();
    toast.success("Total price is: " + cartStore.getTotalPrice());
  } else {
    cartStore.removeItem(data);
  }
};
</script>

<template>
  <div class="food-card">
    <input
      type="checkbox"
      v-model="selected"
      :value="food.price"
      name="selectedProducts"
      @change="handleToggle"
    />
    <img :src="food.image" :alt="food.name" class="food-image" />
    <div class="food-info">
      <h3>{{ food.name }}</h3>
      <p :title="food.description">{{ food.description }}</p>
      <span class="price">${{ food.price.toFixed(2) }}</span>
      <div class="quantity">
        <label>Quantity</label>
        <select v-model="quantity" @change="handleToggle">
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.food-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  position: relative;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.food-card input {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
}

.food-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.food-info {
  padding: 16px;
}
.food-info p {
  margin: 20px 0;
  color: var(--color-secondary);
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.price {
  font-weight: bold;
  color: var(--color-primary);
}
</style>
