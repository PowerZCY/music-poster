export type PosterCategory = 'earphone' | 'music-class' | 'country-music' | 'music-poster-wall' | 'music-store'

export interface Poster {
  id: string
  imageUrl: string
  category: PosterCategory
  tags?: string[]
  description?: string
  createdAt?: string
  aspectRatio?: '3:4' | '16:9' | '1:1'
}

export interface PosterFilter {
  category?: PosterCategory
  tags?: string[]
  searchQuery?: string
}

export interface CategoryInfo {
  id: PosterCategory
  name: string
  nameKey: string
  description?: string
  icon?: string
  count?: number
}