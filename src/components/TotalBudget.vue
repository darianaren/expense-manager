<script setup>
import image from "../assets/img/grafico.jpg";

const props = defineProps({
  budget: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="two-columns">
    <div class="chart-container">
      <img :src="image" alt="Presupuesto" />
    </div>
    <div class="budget-container">
      <button>Restablecer presupuesto</button>
      <p><span>Presupuesto:</span> ${{ budget }}</p>
      <p><span>Disponible:</span> ${{ budget - spent }}</p>
      <p><span>Gastado:</span> ${{ spent }}</p>
    </div>
  </div>
</template>

<style scoped>
.two-columns {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media (min-width: 650px) {
    flex-direction: row;
    gap: 4rem;
  }
}

.chart-container {
}

.budget-container {
  text-align: center;

  p {
    color: var(--gray-dark);
    span {
      font-weight: 800;
      color: var(--blue);
    }
  }

  button {
    color: var(--white);
    font-weight: 700;
    text-align: center;

    margin-top: 1.5rem;
    padding: 1rem;
    width: 100%;

    border: none;
    border-radius: 1rem;
    background-color: #af1c61;
    transition: background-color 0.3s ease;
    :hover {
      background-color: #74113f;
      cursor: pointer;
    }
  }
  @media (min-width: 380px) {
    p,
    p > span {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 650px) {
    text-align: left;
  }
}
</style>
