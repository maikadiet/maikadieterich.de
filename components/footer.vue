<template>
  <div class="footer">
    <p class="footer-text">© Maika Dieterich 2025</p>
    <nuxt-link class="footer-text float-right" to="/imprint">Imprint & Privacy Policy</nuxt-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass">
.footer
  margin-top: 100px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  gap: 1rem

.footer-text
  margin-bottom: 0
  font-size: var(--font-size-sm)
  white-space: nowrap
  @media (max-width: $breakpoint-mobile)
    font-size: var(--mobile-font-size-sm) !important

.float-right
  margin-left: auto
</style>
