<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<style scoped>
.alert {
  color: #b91c1c;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-align: center;

  padding: 0.5rem;
  margin-bottom: 1rem;

  background-color: #f3dede;
  border-left: 0.5rem solid #b91c1c;
}
</style>
