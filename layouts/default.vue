<template>
  <header>
    <nav>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/">Work</nuxt-link>
    </nav>
  </header>
  <div>
    <slot />
  </div>
  <Footer>
  </Footer>
</template>

<script setup lang="ts">
import Footer from "~/components/footer.vue"
</script>

<style lang="sass" scoped>
</style>
