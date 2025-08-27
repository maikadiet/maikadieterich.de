<template>
  <div v-if="project">
    <h1>{{project.title}}</h1>
    <ContentRenderer :value="project" />
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

<style scoped>

</style>
