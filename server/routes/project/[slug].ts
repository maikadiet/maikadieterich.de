// server/routes/project/[slug].ts
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  // This allows Nuxt to prerender all project pages
  if (!slug) {
    throw createError({ statusCode: 404 })
  }

  return null
})
