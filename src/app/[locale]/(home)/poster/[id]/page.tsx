import { PosterCard } from '@/components/posters/PosterCard'
import { PosterDetailClient } from '@/components/poster-detail-client'
import { CATEGORIES, getPosterById, getRelatedPosters } from '@/data/posters'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { appConfig } from '@/lib/appConfig'
import { Metadata } from 'next'

interface PosterDetailPageProps {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateMetadata({ params }: PosterDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { locale, id } = resolvedParams
  const t = await getTranslations({ locale, namespace: 'posters' })
  
  // Get poster data
  const poster = getPosterById(id)
  if (!poster) {
    return {}
  }
  
  // Generate poster title from ID (convert hyphens to spaces and capitalize)
  const posterTitle = poster.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const title = `${posterTitle} - Free Music Poster`
  
  // Generate description using tags-based template
  let description: string
  if (poster.tags && poster.tags.length > 0) {
    description = `Download free music poster. Features: ${poster.tags.join(', ')}. High-quality WebP format, perfect for personal and commercial use. No registration required.`
  } else {
    description = t('defaultDescription').substring(0, 160)
  }
  
  const canonicalUrl = `${appConfig.baseUrl}/${locale}/poster/${id}`
  const keywords = poster.tags && poster.tags.length > 0 
    ? `${poster.tags.join(', ')}, free download, music poster, wall art, ${posterTitle.toLowerCase()}`
    : `music poster, free download, wall art, ${posterTitle.toLowerCase()}`
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(appConfig.baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": `${appConfig.baseUrl}/en/poster/${id}`,
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      locale: locale,
      images: [
        {
          url: poster.imageUrl,
          width: 600,
          height: 800,
          alt: posterTitle,
        }
      ],
    }
  }
}

export default async function PosterDetailPage({ params }: PosterDetailPageProps) {
  const resolvedParams = await params
  const { locale, id } = resolvedParams
  const t = await getTranslations({ locale, namespace: 'posters' })
  
  // Get poster data
  const poster = getPosterById(id)
  if (!poster) {
    notFound()
  }
  
  // Get related posters
  const relatedPosters = getRelatedPosters(id, 6)
  
  // Get category info
  const categoryInfo = CATEGORIES.find(cat => cat.id === poster.category)
  
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-purple-500 transition-colors">
                {t('home')}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link 
                href={`/${locale}/category/${poster.category}`}
                className="hover:text-purple-500 transition-colors"
              >
                {categoryInfo && t(categoryInfo.nameKey)}
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 dark:text-neutral-100 font-medium">
              {poster.id.replace(/-/g, ' ')}
            </li>
          </ol>
        </nav>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Image Section */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              <Image
                src={poster.imageUrl}
                alt={poster.id}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {poster.id.replace(/-/g, ' ')}
              </h1>
            </div>
            
            {/* Tags */}
            {poster.tags && poster.tags.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {poster.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            
            {/* Aspect Ratio */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{t('aspectRatio')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium">{poster.aspectRatio || '3:4'}</p>
            </div>
            
            {/* Image Format */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{t('format')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium">WebP</p>
            </div>
            
            {/* Download Button */}
            <PosterDetailClient
              poster={poster}
              downloadText={t('download')}
              downloadPrefix={t('downloadPrefix')}
              downloadErrorText={t('downloadError')}
            />
          </div>
        </div>
        
        {/* Description Section */}
        {poster.description && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">{t('about')}</h2>
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <div className="space-y-6">
                  {poster.description.split(/(?<=[.!?])\s+|\n\n/).filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                    <p 
                      key={index}
                      className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg mb-4 first:mt-0 last:mb-0"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Related Posters */}
        {relatedPosters.length > 0 && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12">
            <h2 className="text-2xl font-bold mb-6">{t('relatedPosters')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0.5">
              {relatedPosters.map((relatedPoster) => (
                <div key={relatedPoster.id} className="scale-90 origin-center -mb-[10%]">
                  <PosterCard
                    poster={relatedPoster}
                    locale={locale}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      
    </>
  )
}