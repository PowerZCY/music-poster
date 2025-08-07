'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Poster } from '@/types/poster'
import { useState } from 'react'

interface PosterCardProps {
  poster: Poster
  locale: string
  priority?: boolean
}

export function PosterCard({ poster, locale, priority = false }: PosterCardProps) {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  return (
    <Link
      href={`/${locale}/poster/${poster.id}`}
      className="group relative block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] w-full">
        {/* Enhanced loading state with shimmer effect */}
        {imageLoading && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
            {/* Shimmer animation */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent" />
            
            {/* Subtle loading indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-purple-400 dark:border-neutral-600 dark:border-t-purple-500" />
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
            <div className="text-neutral-400 dark:text-neutral-500 text-2xl mb-2">🎵</div>
            <span className="text-neutral-500 dark:text-neutral-400 text-sm">Image unavailable</span>
          </div>
        ) : (
          <Image
            src={poster.imageUrl}
            alt={poster.id}
            fill
            priority={priority}
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 640px) 38vw, (max-width: 1024px) 25vw, 19vw"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false)
              setImageError(true)
            }}
          />
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg line-clamp-2">
              {poster.id.replace(/-/g, ' ')}
            </h3>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Link>
  )
}