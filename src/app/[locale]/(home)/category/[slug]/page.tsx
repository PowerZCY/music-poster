'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
import { getPaginatedPosters, CATEGORIES } from '@/data/posters'
import { PosterCategory } from '@/types/poster'
import { FAQ, SeoContent } from "@windrun-huaiin/third-ui/main"

interface CategoryPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params)
  const { locale, slug } = resolvedParams
  const t = useTranslations('posters')
  
  // Validate category
  const category = CATEGORIES.find(cat => cat.id === slug)
  if (!category) {
    notFound()
  }
  
  // Initial data load with category filter
  const [currentPage, setCurrentPage] = useState(1)
  const initialData = getPaginatedPosters(1, 20, { category: slug as PosterCategory })
  
  // Load more function for infinite scroll
  const loadMore = useCallback(async () => {
    const nextPage = currentPage + 1
    const data = getPaginatedPosters(nextPage, 20, { category: slug as PosterCategory })
    
    if (data.posters.length > 0) {
      setCurrentPage(nextPage)
      return data.posters
    }
    
    return []
  }, [currentPage, slug])
  
  return (
    <>
      <section className="3xl mx-auto px-4 py-8">
        {/* Category Title and Description */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">{category.icon}</span>
            <span>{t(category.nameKey)}</span>
          </h1>
          <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {category.description || t(`${category.nameKey}.description`)}
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="px-4 mb-4">
          <CategoryFilter 
            currentCategory={slug as PosterCategory}
            locale={locale} 
          />
        </div>
        
        {/* Poster Grid */}
        <PosterGrid
          initialPosters={initialData.posters}
          loadMore={loadMore}
          locale={locale}
          hasMore={currentPage < initialData.totalPages}
        />
      </section>
      
      {/* Keep existing SaaS components */}
      <SeoContent />
      <FAQ />
    </>
  )
}

// Add React use hook import
import { use } from 'react'