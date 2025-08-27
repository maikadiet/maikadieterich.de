<template>
  <div>
    <!-- Homepage Content -->
    <div v-if="homepageContent">
      <ContentRenderer :value="homepageContent" />
    </div>

    <!-- Projects List -->
    <div v-if="projects && projects.length > 0">
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.path">
          <NuxtLink :to="project.path">
            {{ project.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Get all content
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

// Separate homepage content and project
const homepageContent = computed(() => {
  return allContent.value?.find(item => item.path === '/')
})

const projects = computed(() => {
  return allContent.value?.filter(item => item.path.startsWith('/project'))
})
</script>

<style scoped>
</style>
