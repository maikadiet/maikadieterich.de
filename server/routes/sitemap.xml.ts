// server/routes/sitemap.xml.ts
export default defineEventHandler(async (event) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://yoursite.com</loc></url>
      <url><loc>https://yoursite.com/about</loc></url>
      <url><loc>https://yoursite.com/imprint</loc></url>
      <url><loc>https://yoursite.com/project/1-un-learn-ai-books</loc></url>
      <url><loc>https://yoursite.com/project/2-un-learn-ai-website</loc></url>
      <url><loc>https://yoursite.com/project/3-gestaltung-ai</loc></url>
      <url><loc>https://yoursite.com/project/4-learning-platform</loc></url>
      <url><loc>https://yoursite.com/project/5-design-in-the-cracks</loc></url>
      <url><loc>https://yoursite.com/project/6-publishing-carefully</loc></url>
      <url><loc>https://yoursite.com/project/7-fingerprinting-language</loc></url>
      <url><loc>https://yoursite.com/project/8-hyperobjects</loc></url>
      <url><loc>https://yoursite.com/project/9.1-designup</loc></url>
      <url><loc>https://yoursite.com/project/9.2-stackreport</loc></url>
      <url><loc>https://yoursite.com/project/9.3-limbus</loc></url>
      <url><loc>https://yoursite.com/project/9.4-tanzaufdemnetz</loc></url>
    </urlset>`

  return sitemap
})
