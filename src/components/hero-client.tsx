'use client'

import { CategoryFilter } from '@/components/posters/CategoryFilter'
import { PosterGrid } from '@/components/posters/PosterGrid'
import { getPaginatedPosters } from '@/data/posters'
import { useCallback, useState } from 'react'
import type { Poster } from '@/types/poster'

interface HeroClientProps {
  initialPosters: Poster[]
  totalPages: number
  locale: string
}

export function HeroClient({ initialPosters, totalPages, locale }: HeroClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  
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