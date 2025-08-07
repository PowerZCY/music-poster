'use client'

import { PosterCard } from '@/components/posters/PosterCard'
import { CATEGORIES, getPosterById, getRelatedPosters } from '@/data/posters'
import { appConfig } from '@/lib/appConfig'
import { globalLucideIcons as icons } from '@windrun-huaiin/base-ui/components/server'
import { GradientButton } from '@windrun-huaiin/third-ui/fuma/mdx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use, useState } from 'react'

interface PosterDetailPageProps {
  params: Promise<{
    locale: string
    id: string
  }>
}

export default function PosterDetailPage({ params }: PosterDetailPageProps) {
  const resolvedParams = use(params)
  const { locale, id } = resolvedParams
  const t = useTranslations('posters')
  
  // Download state
  const [isDownloading, setIsDownloading] = useState(false)
  
  // Get poster data
  const poster = getPosterById(id)
  if (!poster) {
    notFound()
  }
  
  // Get related posters
  const relatedPosters = getRelatedPosters(id, 6)
  
  // Get category info
  const categoryInfo = CATEGORIES.find(cat => cat.id === poster.category)
  
  // CDN proxy URL - you need to provide the actual proxy server URL
  const cdnProxyUrl = appConfig.style
  
  // Handle download
  const handleDownload = async () => {
    // prevent duplicate clicks
    if (isDownloading) {
      return;
    }

    // set download status
    setIsDownloading(true);

    try {
      // use R2 proxy to download directly, no need to fetch
      // convert original R2 URL to proxy URL
      const originalUrl = new URL(poster.imageUrl);
      const filename = originalUrl.pathname.substring(1);

      // build proxy download URL
      const proxyUrl = `${cdnProxyUrl}/${encodeURIComponent(filename)}`;

      // extract file extension from URL
      const urlExtension = poster.imageUrl.split('.').pop()?.toLowerCase();
      let extension = '.webp';
      if (urlExtension && ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(urlExtension)) {
        extension = `.${urlExtension}`;
      }
      const downloadPrefix = t('downloadPrefix');

      // fetch file from proxy
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      // convert to blob
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // create download link and trigger download
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${downloadPrefix}-${poster.id.toLowerCase()}${extension}`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();

      // clean up DOM elements and blob URL
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 100);

    } catch (error) {
      console.error('Download failed:', error);
      alert(t('downloadError'));
    } finally {
      // clear download status
      setIsDownloading(false);
    }
  }
  
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

            <div className="pt-2">
              <GradientButton
                title={t('download')}
                onClick={handleDownload}
                disabled={isDownloading}
                icon={ isDownloading ? <icons.Loader2 className="h-5 w-5 animate-spin mx-auto" /> : <icons.Download className="h-5 w-5 text-white" />}
              />
            </div>
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