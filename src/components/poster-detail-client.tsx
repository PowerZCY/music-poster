'use client'

import { GradientButton } from '@windrun-huaiin/third-ui/fuma/mdx'
import { globalLucideIcons as icons } from '@windrun-huaiin/base-ui/components/server'
import { useState } from 'react'
import { appConfig } from '@/lib/appConfig'
import type { Poster } from '@/types/poster'

interface PosterDetailClientProps {
  poster: Poster
  downloadText: string
  downloadPrefix: string
  downloadErrorText: string
}

export function PosterDetailClient({ 
  poster, 
  downloadText, 
  downloadPrefix, 
  downloadErrorText 
}: PosterDetailClientProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  
  const cdnProxyUrl = appConfig.style
  
  const handleDownload = async () => {
    if (isDownloading) {
      return
    }

    setIsDownloading(true)

    try {
      const originalUrl = new URL(poster.imageUrl)
      const filename = originalUrl.pathname.substring(1)
      const proxyUrl = `${cdnProxyUrl}/${encodeURIComponent(filename)}`
      
      const urlExtension = poster.imageUrl.split('.').pop()?.toLowerCase()
      let extension = '.webp'
      if (urlExtension && ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(urlExtension)) {
        extension = `.${urlExtension}`
      }

      const response = await fetch(proxyUrl)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = blobUrl
      a.download = `${downloadPrefix}-${poster.id.toLowerCase()}${extension}`
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()

      setTimeout(() => {
        document.body.removeChild(a)
        URL.revokeObjectURL(blobUrl)
      }, 100)

    } catch (error) {
      console.error('Download failed:', error)
      alert(downloadErrorText)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="pt-2">
      <GradientButton
        title={downloadText}
        onClick={handleDownload}
        disabled={isDownloading}
        icon={isDownloading ? 
          <icons.Loader2 className="h-5 w-5 animate-spin mx-auto" /> : 
          <icons.Download className="h-5 w-5 text-white" />
        }
      />
    </div>
  )
}