'use client'

import { useState, useCallback } from 'react'
import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
import { getPaginatedPosters } from '@/data/posters'
import type { Poster, PosterCategory } from '@/types/poster'

interface CategoryPageClientProps {
  initialPosters: Poster[]
  totalPages: number
  slug: string
  locale: string
}

export function CategoryPageClient({ 
  initialPosters, 
  totalPages, 
  slug, 
  locale 
}: CategoryPageClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  
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
      <div className="px-4 mb-4">
        <CategoryFilter 
          currentCategory={slug as PosterCategory}
          locale={locale} 
        />
      </div>
      
      <PosterGrid
        initialPosters={initialPosters}
        loadMore={loadMore}
        locale={locale}
        hasMore={currentPage < totalPages}
      />
    </>
  )
}