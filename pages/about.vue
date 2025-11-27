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
const { data: about } = await useAsyncData('about-content', async () => {
  return await queryContent('about').findOne();
});
</script>

<style scoped>

</style>
