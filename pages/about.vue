<template>
  <div class="container">
    <div class="grid">
      <!-- About Paragraph - Takes 2/3 width (8 out of 12 columns) -->
      <div v-if="about" class="col-8">
        <div class="header-text">
          <ContentRenderer :value="about"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentRenderer } from '#components'

const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

const about = computed(() => {
  return allContent.value?.find(item => item.path === '/about')
})
</script>

<style scoped>

</style>
