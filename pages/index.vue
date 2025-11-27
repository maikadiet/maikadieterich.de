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
      <button
          v-for="filter in ['web','print','installation','research']"
          :key="filter"
          :class="{ active: activeFilter === filter }"
          @click="toggleFilter(filter)"
      >
        {{ filter }}
      </button>
      <div class="project-grid">
        <div
          v-for="project in projects"
          :key="project.path"
          class="project-item"
        >
          <NuxtLink :to="project.path" >
            <!-- Thumbnail image if it exists -->
            <img
              v-if="project.meta?.thumbnail"
              :src="`/project/${project.meta.thumbnail}`"
              :alt="`${project.title} thumbnail`"
              class="project-thumbnail"
            />
            <p class="project-link" > {{ project.title }} </p>
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

// Separate homepage content and project
const homepageContent = computed(() => {
  return allContent.value?.find(item => item.path === '/')
})

const projects = computed(() => {
  // Filter project and potentially sort them
  const projectItems = allContent.value?.filter(item => item.path.startsWith('/project'))
  // Sort by a 'date' field in frontmatter (newest first)
  // projectItems?.sort((a, b) => new Date(b.date) - new Date(a.date))
  return projectItems
})

const activeFilter = ref(null)

function toggleFilter(filter) {
  activeFilter.value = activeFilter.value === filter ? null : filter
}
</script>

<style scoped>
</style>
