<template>
  <div class="container">
    <div class="grid">
      <!-- Homepage Content - Takes 2/3 width (8 out of 12 columns) -->
      <div class="col-8">
        <div class="header-text">
          <client-only><p>Nice to meet you <span>{{ emoji }}</span></p></client-only>
          <p>My name is Maika, I am a designer based in Basel.</p>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div v-if="projects && projects.length > 0">
      <button
          v-for="filter in ['Web','Print','Installation','Research']"
          :key="filter"
          :class="{ active: activeFilters.includes(filter) }"
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
const emojis = ['💓', '✨', '😊', '💫', '👩‍💻', '🕸️', '🪲', '🪸', '🌦', '️🫧', '🍋', '🧃', '🏔', '️❤️‍🔥', '🪄', '👾', '🧚', '🕺', '🪰', '🌈', '🌊', '🪩']
const emoji = ref(emojis[Math.floor(Math.random() * emojis.length)])

// Get all content
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

const activeFilters = ref([])

const projects = computed(() => {
  // If no filters active, return all projects
  let projectItems = allContent.value?.filter(item => item.path.startsWith('/project'))

  // If no filters active, return all projects
  if (activeFilters.value.length === 0) {
    return projectItems
  }

  // Filter projects that have at least one of the active tags
  return projectItems?.filter(project => {
    const projectTags = project.meta?.metadata
      ? project.meta.metadata.split(',').map(tag => tag.trim().toLowerCase())
      : []

    return activeFilters.value.some(filter =>
      projectTags.includes(filter.toLowerCase())
    )
  })
})

function toggleFilter(filter) {
  const index = activeFilters.value.indexOf(filter)
  if (index > -1) {
    activeFilters.value.splice(index, 1)
  } else {
    activeFilters.value.push(filter)
  }
}
</script>

<style lang="sass" scoped>
</style>
