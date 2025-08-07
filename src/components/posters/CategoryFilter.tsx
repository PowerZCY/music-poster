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

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {/* All Posters button */}
      <Link
        href={`/${locale}`}
        className={`
          px-4 py-2 rounded-full font-medium transition-all duration-200
          ${isHomePage && !currentCategory
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
          }
        `}
      >
        {t('filter.all')}
      </Link>

      {/* Category buttons */}
      {CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={`/${locale}/category/${category.id}`}
          className={`
            px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2
            ${currentCategory === category.id
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
            }
          `}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{t(category.nameKey)}</span>
        </Link>
      ))}
    </div>
  )
}