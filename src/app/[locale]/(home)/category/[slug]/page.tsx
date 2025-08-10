import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { CategoryPageClient } from '@/components/category-page-client'
import { getPaginatedPosters, CATEGORIES } from '@/data/posters'
import { PosterCategory } from '@/types/poster'
import { FAQ, SeoContent } from "@windrun-huaiin/third-ui/main/server"

interface CategoryPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const { locale, slug } = resolvedParams
  const t = await getTranslations({ locale, namespace: 'posters' })
  
  // Validate category
  const category = CATEGORIES.find(cat => cat.id === slug)
  if (!category) {
    notFound()
  }
  
  // Initial data load with category filter
  const initialData = getPaginatedPosters(1, 20, { category: slug as PosterCategory })
  
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
        
        {/* Client-side interactive components */}
        <CategoryPageClient
          initialPosters={initialData.posters}
          totalPages={initialData.totalPages}
          slug={slug}
          locale={locale}
        />
      </section>
      
      {/* Keep existing SaaS components */}
      <SeoContent locale={locale} />
      <FAQ locale={locale} />
    </>
  )
}
