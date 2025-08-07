'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
import { getPaginatedPosters } from '@/data/posters'

export function Hero() {
  const t = useTranslations('posters')
  const params = useParams()
  const locale = params.locale as string
  
  // Initial data load - same as Category page
  const [currentPage, setCurrentPage] = useState(1)
  const initialData = getPaginatedPosters(1, 20)
  
  // Load more function for infinite scroll
  const loadMore = useCallback(async () => {
    const nextPage = currentPage + 1
    const data = getPaginatedPosters(nextPage, 20)
    
    if (data.posters.length > 0) {
      setCurrentPage(nextPage)
      return data.posters
    }
    
    return []
  }, [currentPage])
  
  return (
    <section className="3xl mx-auto px-4 py-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t('title')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {t('subtitle')}
          </span>
        </h1>
        <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>
      
      {/* Category Filter */}
      <CategoryFilter locale={locale} />
      
      {/* Poster Grid */}
      <PosterGrid
        initialPosters={initialData.posters}
        loadMore={loadMore}
        locale={locale}
        hasMore={currentPage < initialData.totalPages}
      />
    </section>
  )
}

