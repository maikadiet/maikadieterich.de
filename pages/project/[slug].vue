<template>
  <div class="container" v-if="project">
    <div class="grid">
      <!-- Main Content -->
      <div class="col-6">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="metadata">
          <h6 class="pixel-text">{{ project.meta.date }}</h6>
          <h6 class="pixel-text">{{ project.meta.metadata }}</h6>
          <h6 class="pixel-text">{{ project.meta.collaborators }}</h6>
          <h6 class="pixel-text">{{ project.meta.urls }}</h6>
        </div>
        <ContentRenderer :value="project" />
      </div>

      <!-- Images -->
      <div class="col-5">
        <!-- Show images if they exist -->
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
</style>
