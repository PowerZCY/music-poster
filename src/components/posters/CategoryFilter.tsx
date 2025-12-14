'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/data/posters'
import { PosterCategory } from '@/types/poster'

interface CategoryFilterProps {
  currentCategory?: PosterCategory
  locale: string
}

export function CategoryFilter({ currentCategory, locale }: CategoryFilterProps) {
  const t = useTranslations('posters')
  const pathname = usePathname()
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`

  // 主要类别 (前6个)
  const mainCategories = CATEGORIES.filter(cat => 
    ['earphone', 'music-class', 'country-music', 'music-poster-wall', 'music-store', 'classical-music'].includes(cat.id)
  )
  
  // 新增类别
  const newCategories = CATEGORIES.filter(cat => 
    ['jazz', 'folk-music'].includes(cat.id)
  )
  
  // 其他类别
  const otherCategories = CATEGORIES.filter(cat => 
    !['earphone', 'music-class', 'country-music', 'music-poster-wall', 'music-store', 'classical-music', 'jazz', 'folk-music'].includes(cat.id)
  )

  return (
    <div className="mb-8 space-y-4">
      {/* 第一行：All Posters + 主要6个类别 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {/* All Posters button */}
        <Link
          href={`/${locale}`}
          className={`
            px-4 py-2 rounded-full font-medium transition-all duration-200
            ${isHomePage && !currentCategory
              ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
            }
          `}
        >
          {t('filter.all')}
        </Link>

        {/* 主要类别 */}
        {mainCategories.map((category) => (
          <Link
            key={category.id}
            href={`/${locale}/category/${category.id}`}
            className={`
              px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2
              ${currentCategory === category.id
                ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }
            `}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{t(category.nameKey)}</span>
          </Link>
        ))}
      </div>

      {/* 第二行：新增类别 + 其他类别 */}
      {(newCategories.length > 0 || otherCategories.length > 0) && (
        <div className="flex flex-wrap gap-2 justify-center">
          {[...newCategories, ...otherCategories].map((category) => (
            <Link
              key={category.id}
              href={`/${locale}/category/${category.id}`}
              className={`
                px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2
                ${currentCategory === category.id
                  ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{t(category.nameKey)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}