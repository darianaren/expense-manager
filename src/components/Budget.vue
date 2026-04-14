<script setup>
import { ref } from "vue";
import Alert from "./Alert.vue";

const budget = ref(0);
const error = ref("");

const handleSubmit = () => {
  if (!budget.value || budget.value <= 0 || isNaN(budget.value)) {
    error.value = "El presupuesto igresado no es válido";
    setTimeout(() => {
      error.value = "";
    }, 3000);
    return;
  }
};
</script>

<template>
  <form class="budget-form" @submit.prevent="handleSubmit">
    <Alert v-if="error">
      <p>{{ error }}</p>
    </Alert>
    <div class="field">
      <label class="label" for="new-budget">Definir Presupuesto</label>
      <input
        class="input"
        type="number"
        id="new-budget"
        min="0"
        placeholder="Ingresa tu presupuesto"
        v-model.number="budget"
      />
    </div>
    <input class="submit" type="submit" value="Añadir Presupuesto" />
  </form>
</template>

<style scoped>
.budget-form {
  width: 100%;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.label {
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  color: var(--blue);
}
.input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--gray-light);
  text-align: center;
}
.submit {
  color: var(--white);
  font-weight: 900;
  text-align: center;

  margin-top: 1.5rem;
  padding: 1rem;

  width: 100%;

  border: none;
  border-radius: 1rem;
  background-color: var(--blue);
  transition: background-color 0.3s ease;
}
.submit:hover {
  background-color: var(--blue-dark);
  cursor: pointer;
}
</style>
