<template>
  <div class="container" v-if="project">
    <div class="grid">
      <!-- Main Content -->
      <div class="col-5 sticky">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="metadata">
          <h5 class="no-margin">{{ project.meta.date }}</h5>
          <h5 class="no-margin">{{ project.meta.metadata }}</h5>
          <h5 class="no-margin">{{ project.meta.collaborators }}</h5>
          <h5 class="no-margin">{{ project.meta.urls }}</h5>
        </div>
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
  margin-bottom: 40px
  max-width: 300px

.no-margin
  margin: 0 0 5px 0

.sticky
  position: sticky
  top: 0
  height: 100vh
  overflow-y: auto
  padding-right: 1rem /* Optional: add space for scrollbar */

.project-iframe
  width: 100%
  height: auto
  aspect-ratio: 16 / 9
  border: none
  box-shadow: none
  display: block
  padding-bottom: 40px

</style>
