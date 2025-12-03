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

    <!-- Three Column Layout for CV Data -->
    <div v-if="about && about.meta" class="grid" style="margin-top: 3rem">
      <!-- Exhibitions Column -->
      <div class="col-4">
        <h3>Exhibitions</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.exhibitions || [])" :key="`exhibition-${index}`">
            <span v-if="item">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Teaching & Publications Column -->
      <div class="col-4">
        <h3>Teaching & Publications</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.teaching_and_publications || [])" :key="`teaching-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- CV Column -->
      <div class="col-4">
        <h3>CV</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.cv || [])" :key="`cv-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

const about = computed(() => {
  return allContent.value?.find(item => item.path === '/about')
})
</script>

<style lang="sass" scoped>
h3
  margin-top: 0
  font-size: var(--font-size-base)
  font-weight: normal

.cv-list
  list-style: none
  padding: 0
  margin: 0

.cv-list li
  margin-bottom: 0.5rem
  font-size: var(--font-size-sm)
  line-height: 1.4
</style>
