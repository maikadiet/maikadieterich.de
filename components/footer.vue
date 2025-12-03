<template>
  <div class="footer">
    © Maika Dieterich 2025
    <nuxt-link class="float-right" to="/imprint">Imprint & Privacy Policy</nuxt-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass">
.footer
  margin-top: 100px
  font-size: var(--font-size-small)
  @media (max-width: $breakpoint-mobile)
    font-size: var(--mobile-font-size-small) !important

.float-right
  position: relative
  float: right
</style>
