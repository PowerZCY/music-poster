import { HeroClient } from '@/components/hero-client'
import { getPaginatedPosters } from '@/data/posters'
import { getTranslations } from 'next-intl/server'

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'posters' });
  const initialData = getPaginatedPosters(1, 20)
  
  return (
    <section className="3xl mx-auto px-4 py-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t('title')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {t('subtitle')}
          </span>
        </h1>
        <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>
      
      {/* Client-side interactive components */}
      <HeroClient
        initialPosters={initialData.posters}
        totalPages={initialData.totalPages}
        locale={locale}
      />
    </section>
  )
}

