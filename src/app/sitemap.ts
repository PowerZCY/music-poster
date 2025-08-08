import { MetadataRoute } from 'next'
import { appConfig } from "@/lib/appConfig"
import { CATEGORIES, POSTERS } from '@/data/posters'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = appConfig.baseUrl
  const locale = 'en' // Only English locale based on current config
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Static pages
  sitemap.push({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })
  
  // Legal pages - using basic legal page
  sitemap.push({
    url: `${baseUrl}/${locale}/legal`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  })
  
  // Category pages - based on CATEGORIES data
  CATEGORIES.forEach(category => {
    sitemap.push({
      url: `${baseUrl}/${locale}/category/${category.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })
  
  // Poster detail pages - based on POSTERS data
  POSTERS.forEach(poster => {
    sitemap.push({
      url: `${baseUrl}/${locale}/poster/${poster.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })
  
  return sitemap
}