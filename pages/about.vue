<template>
  <div class="container">
    <div class="grid">
      <!-- About Paragraph - Takes 2/3 width (8 out of 12 columns) -->
      <div class="col-8">
        <div class="header-text">
          <p>Nice to meet you <span>{{ getRandomEmoji() }}</span></p>
          <p>My name is Maika, I am a designer based in Basel. This winter I am writing my MA thesis in Transversal Design.</p>
          <p>I am currently fascinated by feminist infrastructure, alternative low-tech practices, situated software and {{ getRandomEmoji() }}{{ getRandomEmoji() }}{{ getRandomEmoji() }}.  Please get in touch ✉️</p>
        </div>
      </div>
    </div>

    <!-- Three Column Layout for CV Data -->
    <div v-if="about && about.meta" class="grid" style="margin-top: 3rem">
      <!-- CV Column -->
      <div class="col-4">
        <h3>Vita</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.vita || [])" :key="`vita-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Teaching Column -->
      <div class="col-4">
        <h3>Teaching</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.teaching_and_publications || [])" :key="`teaching-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Exhibitions Column -->
      <div class="col-4">
        <h3>Exhibitions & Publications</h3>
        <ul class="cv-list">
          <li v-for="(item, index) in (about.meta.exhibitions || [])" :key="`exhibition-${index}`">
            <span v-if="item">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const emojis = ['💓', '✨', '😊', '💫', '👩‍💻', '🕸️', '🪲', '🪸', '🌦', '️🫧', '🍋', '🧃', '🏔', '️❤️‍🔥', '🪄']

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)]
}

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
  font-family: var(--font-family-authentic), sans-serif
  font-weight: 60
</style>
