'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Poster } from '@/types/poster'
import { PosterCard } from './PosterCard'

interface PosterGridProps {
  initialPosters: Poster[]
  loadMore?: () => Promise<Poster[]>
  locale: string
  hasMore?: boolean
}

export function PosterGrid({ 
  initialPosters, 
  loadMore, 
  locale,
  hasMore = false 
}: PosterGridProps) {
  const t = useTranslations('posters')
  const [posters, setPosters] = useState<Poster[]>(initialPosters)
  const [loading, setLoading] = useState(false)
  const [canLoadMore, setCanLoadMore] = useState(hasMore)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Infinite scroll implementation
  const handleLoadMore = useCallback(async () => {
    if (loading || !canLoadMore || !loadMore) return
    
    setLoading(true)
    try {
      const newPosters = await loadMore()
      if (newPosters.length > 0) {
        setPosters(prev => [...prev, ...newPosters])
      } else {
        setCanLoadMore(false)
      }
    } catch (error) {
      console.error('Failed to load more posters:', error)
      setCanLoadMore(false)
    } finally {
      setLoading(false)
    }
  }, [loading, canLoadMore, loadMore])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [handleLoadMore])

  // Update posters when initialPosters change (e.g., category change)
  useEffect(() => {
    setPosters(initialPosters)
    setCanLoadMore(hasMore)
  }, [initialPosters, hasMore])

  if (posters.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          {t('noPosters')}
        </p>
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        .poster-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          width: 100%;
        }
        
        @media (max-width: 1024px) {
          .poster-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .poster-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .poster-item {
          width: 100%;
        }
        
        .poster-card {
          width: 100%;
          transform: scale(0.9);
          transform-origin: center;
          margin-bottom: -10%;
        }
      `}</style>
      
      <div className="poster-container">
        {posters.map((poster, index) => (
          <div key={poster.id} className="poster-item">
            <div className="poster-card">
              <PosterCard
                poster={poster}
                locale={locale}
                priority={index < 8}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator and infinite scroll trigger */}
      {canLoadMore && (
        <div
          ref={observerTarget}
          className="flex justify-center py-8"
        >
          {loading && (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 animate-spin rounded-full border-4 border-neutral-400 border-t-purple-500" />
              <span className="text-neutral-500 dark:text-neutral-400">
                {t('loading')}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  )
}