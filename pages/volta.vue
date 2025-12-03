<template>
  <div class="container">
    <div class="grid">
      <!-- Homepage Content - Takes 2/3 width (8 out of 12 columns) -->
      <div class="col-8">
        <div class="header-text">
          <p>Hallo Volta <span>{{ getRandomEmoji() }}</span></p>
          <p>Ich entwickle und gestalte leidenschaftlich gerne Websites. Hier seht ihr einige Seiten an denen ich in den letzten Jahren gearbeitet habe.</p>
          <p class="spacer">Ich liebe es mich in neue Themen und Technologien zu vertiefen und diese spielerisch und einladend nach außen zu öffnen. Ich freue mich darauf, euch kennen zu lernen <span>{{ getRandomEmoji() }}</span><span>{{ getRandomEmoji() }}</span></p>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="project-grid spacer">
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

    <NuxtLink to="/">Hier gehts zu meinen weiteren Arbeiten</NuxtLink>
  </div>
</template>

<script setup>
const emojis = ['💓', '✨', '😊', '💫', '👩‍💻', '🕸️', '🪲', '🪸', '🌦', '️🫧', '🍋', '🧃', '🏔', '️❤️‍🔥', '🪄']

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)]
}
// Get all content
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

// Array of project titles to display (customize this as needed)
const selectedProjectTitles = ref([
  'Un/learn AI Website',
  'Learning platform',
  'Gestaltung AI',
  'Limbus',
  'Tanz auf dem Netz'
])

const projects = computed(() => {
  // Get all project items
  let projectItems = allContent.value?.filter(item => item.path.startsWith('/project'))

  // Filter by selected project titles
  if (selectedProjectTitles.value.length > 0) {
    return projectItems?.filter(project =>
        selectedProjectTitles.value.includes(project.title)
    )
  }

  return projectItems
})
</script>

<style lang="sass" scoped>
.spacer
  margin-bottom: 50px

a
  text-decoration: underline 1px
  text-underline-offset: 1.5px
</style>
