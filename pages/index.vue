<template>
  <div class="container">
    <div class="grid">
      <!-- Homepage Content - Takes 2/3 width (8 out of 12 columns) -->
      <div v-if="homepageContent" class="col-8">
        <div class="header-text">
          <ContentRenderer :value="homepageContent"/>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div v-if="projects && projects.length > 0">
      <h2>Projects</h2>
      <div class="project-grid">
        <div
          v-for="project in projects"
          :key="project.path"
          class="project-item"
        >
          <NuxtLink :to="project.path" class="project-link">
            <!-- Thumbnail image if it exists -->
            <img
              v-if="project.meta?.thumbnail"
              :src="`/projects/${project.meta.thumbnail}`"
              :alt="`${project.title} thumbnail`"
              class="project-thumbnail"
            />
            {{ project.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Get all content
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

// Separate homepage content and projects
const homepageContent = computed(() => {
  return allContent.value?.find(item => item.path === '/')
})

const projects = computed(() => {
  // Filter projects and potentially sort them (e.g., by date if available in frontmatter)
  const projectItems = allContent.value?.filter(item => item.path.startsWith('/project'))
  // Example: Sort by a 'date' field in frontmatter (newest first)
  // projectItems?.sort((a, b) => new Date(b.date) - new Date(a.date))
  return projectItems
})
</script>

<style scoped>
</style>
