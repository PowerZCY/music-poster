import { NextResponse } from 'next/server'
import { getPaginatedPosters } from '@/data/posters'
import { PosterCategory } from '@/types/poster'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
  const rawPageSize = parseInt(searchParams.get('pageSize') || '20', 10)
  const pageSize = Math.min(Math.max(1, rawPageSize), 100)
  const category = searchParams.get('category') as PosterCategory | null

  const data = getPaginatedPosters(page, pageSize, {
    category: category || undefined,
  })

  return NextResponse.json(data)
}
