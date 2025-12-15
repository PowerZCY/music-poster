'use client'

import { useState, useCallback } from 'react'
import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
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
  const pageSize = 20
  
  const loadMore = useCallback(async () => {
    const nextPage = currentPage + 1
    const response = await fetch(`/api/posters?page=${nextPage}&pageSize=${pageSize}&category=${slug}`)
    
    if (!response.ok) {
      console.error('Failed to fetch more posters for category', slug)
      return []
    }

    const data = await response.json()
    const posters = Array.isArray(data?.posters) ? data.posters : []

    if (posters.length > 0) {
      setCurrentPage(nextPage)
      return posters
    }
    
    return []
  }, [currentPage, pageSize, slug])

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
