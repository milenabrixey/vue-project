<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h3 class="">Hello, I am a</h3>
    <h1 class="gradient-text animate-glow font-medium">{{ msg }}</h1>
    <h3 class="italic">Precision, performance, and passion in every line of code.</h3>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* Media query for desktop screens */
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
