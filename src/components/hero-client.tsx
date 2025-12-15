'use client'

import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
import { useCallback, useState } from 'react'
import type { Poster } from '@/types/poster'

interface HeroClientProps {
  initialPosters: Poster[]
  totalPages: number
  locale: string
}

export function HeroClient({ initialPosters, totalPages, locale }: HeroClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20
  
  const loadMore = useCallback(async () => {
    const nextPage = currentPage + 1
    const response = await fetch(`/api/posters?page=${nextPage}&pageSize=${pageSize}`)
    
    if (!response.ok) {
      console.error('Failed to fetch more posters')
      return []
    }
    
    const data = await response.json()
    const posters = Array.isArray(data?.posters) ? data.posters : []
    
    if (posters.length > 0) {
      setCurrentPage(nextPage)
      return posters
    }
    
    return []
  }, [currentPage, pageSize])

  return (
    <>
      <CategoryFilter locale={locale} />
      <PosterGrid
        initialPosters={initialPosters}
        loadMore={loadMore}
        locale={locale}
        hasMore={currentPage < totalPages}
      />
    </>
  )
}
