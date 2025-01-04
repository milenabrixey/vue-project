<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const card = ref<HTMLDivElement | null>(null)

const handleMouseMove = (event: MouseEvent) => {
  if (!card.value) return

  // Card's bounding rectangle
  const rect = card.value.getBoundingClientRect()
  const x = event.clientX - rect.left // Mouse position relative to card
  const y = event.clientY - rect.top

  // Calculate rotation values
  const rotateX = (y / rect.height - 0.5) * -50 // Tilt range
  const rotateY = (x / rect.width - 0.5) * 50

  // Apply rotation
  card.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  // Calculate shadow intensity
  const shadowX = (x / rect.width - 0.5) * -60 // Shadow movement
  const shadowY = (y / rect.height - 0.5) * 60

  // Apply box-shadow
  card.value.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.3)`
}

const isDesktop = ref(false)

const resetTransform = () => {
  if (card.value) {
    card.value.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
    card.value.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'
    card.value.style.transition = 'transform 300ms ease-out, box-shadow 300ms ease-out'
    setTimeout(() => {
      if (card.value) card.value.style.transition = '' // Remove transition after reset
    }, 300)
  }
}

const checkWindowSize = () => {
  isDesktop.value = window.innerWidth >= 1024 // Threshold
}

// Handle screen resizing
onMounted(() => {
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize)
})
</script>

<template>
  <div class="about">
    <br />
    <!-- Animated card for smaller screens -->
    <div
      v-if="isDesktop"
      class="card glass max-w-96"
      ref="card"
      @mousemove="handleMouseMove"
      @mouseleave="resetTransform"
    >
      <figure>
        <img alt="Portrait" src="@/assets/images/portrait.png" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Milena Brixey</h2>
        <p><font-awesome-icon :icon="['fas', 'house']" /> Toledo, Ohio</p>
        <p><font-awesome-icon :icon="['fas', 'envelope']" /> milenabrixey@gmail.com</p>
        <p><font-awesome-icon :icon="['fas', 'phone']" /> (419)260-8163</p>
      </div>
    </div>
    <!-- Static card for smaller screens -->
    <div v-else class="card glass max-w-96">
      <figure>
        <img alt="Portrait" src="@/assets/images/portrait.png" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Milena Brixey</h2>
        <p><font-awesome-icon :icon="['fas', 'house']" /> Toledo, Ohio</p>
        <p><font-awesome-icon :icon="['fas', 'envelope']" /> milenabrixey@gmail.com</p>
        <p><font-awesome-icon :icon="['fas', 'phone']" /> (419)260-8163</p>
        <!-- <div class="card-actions justify-end">
          <button class="btn btn-primary">Resumé</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Media query for desktop screens */
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Media query for smaller screens */
@media (max-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
