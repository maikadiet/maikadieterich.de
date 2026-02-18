<template>
  <div class="container">
    <header>
      <nav>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="mailto:hello@maikadieterich.de">Contact</nuxt-link>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <Footer>
    </Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/footer.vue"
</script>

<style lang="sass" scoped>
.container
  min-height: 100vh
</style>
