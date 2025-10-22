<template>
  <div class="container" v-if="project">
    <div class="grid">
      <!-- Main Content -->
      <div class="col-6">
        <h1>{{ project.title }}</h1>
        <ContentRenderer :value="project" />
      </div>

      <!-- Images -->
      <div class="col-6">
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

// Function to convert file system path to URL path
function convertPathToUrl(path) {
  // Remove ../../public prefix and return the rest
  return path.replace('../../public', '')
}
</script>
