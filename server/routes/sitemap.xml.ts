// server/routes/sitemap.xml.ts
export default defineEventHandler(async (event) => {
  const projects = await queryCollectionItem('content').find()

  const urls = projects
    .filter(project => project.path.startsWith('/project/'))
    .map(project => {
      const slug = project.slug
      return `<url><loc>https://yoursite.com/project/${slug}</loc></url>`
    })
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://yoursite.com</loc></url>
      <url><loc>https://yoursite.com/imprint</loc></url>
      ${urls}
    </urlset>`

  return sitemap
})
