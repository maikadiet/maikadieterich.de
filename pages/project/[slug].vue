<template>
  <div class="container" v-if="project">
    <div class="grid">
      <!-- Main Content -->
      <div class="col-5 sticky">
        <p class="project-title">{{ project.title }}</p>
        <div class="metadata">
          <p class="no-margin">{{ project.meta.date }}</p>
          <p class="no-margin">{{ project.meta.metadata }}</p>
          <a class="underline no-margin" :href="`${project.meta.urls}`" target="_blank" rel="noopener noreferrer">Go to Website</a>
        </div>
          <p class="margin-bottom">{{ project.meta.collaborators }}</p>
        <ContentRenderer :value="project" class="authentic-sans"/>
      </div>

      <!-- Images -->
        <!-- Show images if they exist -->
      <div class="col-7">
        <div v-if="project.meta?.images && project.meta.images.length > 0">
          <div
            v-for="(image, index) in project.meta.images"
            :key="index"
            class="project-image"
          >
            <img
              :src="`/project/${image}`"
              :alt="`Project image ${index + 1}`"
              style="width: 100%; height: auto;"
            />
          </div>
        </div>

        <!-- Show thumbnail if no images exist -->
        <div v-else-if="project.meta?.thumbnail" class="project-image">
          <img
            :src="`/project/${project.meta.thumbnail}`"
            :alt="`${project.title} thumbnail`"
            style="width: 100%; height: auto;"
          />
        </div>

        <!-- Show message if no images or thumbnail -->
        <div v-else>
          <p>No images available for this project.</p>
        </div>

          <!-- Show video if it exists -->
          <div v-if="project.meta?.videos && project.meta.videos.length > 0">
            <div
                v-for="(video, index) in project.meta.videos"
                :key="index"
                class="project-video"
            >
              <iframe
                  :src="video + '?controls=0&modestbranding=1&rel=0&showinfo=0'"
                  allowfullscreen
                  class="project-iframe"
              />
            </div>
          </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Project not found</p>
  </div>
</template>

<script setup>
const slug = useRoute().params.slug

const { data: project } = await useAsyncData(`project-${slug}`, async () => {
  const allContent = await queryCollection('content').all()
  return allContent.find(item => item.path === `/project/${slug}`)
})

</script>

<style lang="sass">
.metadata
  max-width: 300px
  display: flex
  flex-wrap: wrap
  gap: 1rem
  align-items: center
  & *
    padding: 0.125rem 0.5rem
    border-color: var(--color-typography)
    border-style: dashed
    border-width: 1px
    box-sizing: border-box
    width: fit-content

.no-margin
  margin: 0 0 5px 0

.margin-bottom
  margin: 10px 0 40px 0

.sticky
  position: sticky
  top: 0
  height: 100vh
  overflow-y: auto
  padding-right: 1rem
  @media (max-width: $breakpoint-mobile)
    position: relative
    height: auto

.project-iframe
  width: 100%
  height: auto
  aspect-ratio: 16 / 9
  border: none
  box-shadow: none
  display: block
  padding-bottom: 40px

.underline
  text-decoration: underline 1px
  text-underline-offset: 1.5px
  border-style: none !important
</style>
