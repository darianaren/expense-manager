<script></script>

<template>
  <form class="budget-form">
    <div class="field">
      <label class="label" for="new-budget">Definir Presupuesto</label>
      <input
        class="input"
        type="number"
        id="new-budget"
        placeholder="Ingresa tu presupuesto"
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
