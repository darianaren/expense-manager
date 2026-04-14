<script setup>
import Budget from "./components/Budget.vue";
</script>

<template>
  <div>
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="container-header container shadow">
        <Budget />
      </div>
    </header>
  </div>
</template>

<style>
:root {
  --blue: #3b82f6;
  --blue-dark: #1758e5;
  --white: #fff;
  --gray-light: #f5f5f5;
  --gray: #94a3b8;
  --gray-dark: #64748b;
  --black: #000;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  font-size: 0.9rem;
  box-sizing: inherit;

  @media (min-width: 768px) {
    font-size: 1rem;
    box-sizing: inherit;
  }
}

body {
  font-family: "Lato", sans-serif;
  background-color: var(--gray-light);
}

h1 {
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1300px) {
    font-size: 4rem;
  }
}

h2 {
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1300px) {
    font-size: 3rem;
  }
}

header {
  background-color: var(--blue);

  h1 {
    padding: 3rem 0;
    margin: 0;
    color: var(--white);
    text-align: center;
    line-height: 1;
  }
}

.container {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.container-header {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
    padding-top: 3rem;
  }
  @media (min-width: 1300px) {
    padding: 5rem;
    padding-top: 4rem;
  }
}

.shadow {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 1.2rem;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
    padding-top: 3rem;
  }
  @media (min-width: 1300px) {
    padding: 5rem;
    padding-top: 4rem;
  }
}
</style>
