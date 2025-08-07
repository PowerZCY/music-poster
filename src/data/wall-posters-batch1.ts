import { Poster } from '@/types/poster'

// Cloudflare R2 base URL - 请替换为你的实际URL
const R2_BASE_URL = 'https://your-bucket.r2.cloudflarestorage.com/posters'

export const WALL_POSTERS_BATCH1: Poster[] = [
  {
    id: 'Vinyl-Symphony-Collection',
    imageUrl: `${R2_BASE_URL}/music-poster-wall/vinyl-symphony-collection.webp`,
    category: 'music-poster-wall',
    tags: ['vinyl', 'collection', 'vintage', 'interior', 'gallery'],
    description: `Step into a curated sanctuary where music meets visual artistry, a living room transformed into a personal gallery of sonic memories. This extraordinary wall arrangement showcases nine distinct music-themed artworks, each piece telling its own story while contributing to a harmonious symphony of design. The collection features an eclectic mix of abstract vinyl representations, from bold geometric circles reminiscent of classic LPs to minimalist interpretations that blur the lines between sound waves and visual art. The warm amber glow from the modern floor lamp casts a gentle illumination across the display, highlighting the rich textures and varied color palettes – from deep obsidian blacks to vibrant coral reds, cool aqua blues to sun-kissed yellows. Below this artistic tableau, a carefully curated vinyl collection stands sentinel in the console, their spines creating a rhythmic pattern that echoes the visual melody above. The mustard yellow armchair, with its mid-century modern lines, invites contemplation and serves as the perfect vantage point for appreciating this intersection of audio and visual culture. This space represents more than mere decoration; it's a testament to the enduring romance between music lovers and the tangible artifacts of their passion. Each poster captures a different mood, a different era, a different genre – yet together they create a cohesive narrative about the universal language of music. The thoughtful arrangement speaks to the curator's understanding that music isn't just heard, but seen, felt, and lived. This is where nostalgia meets contemporary design, where every glance reveals a new detail, a hidden note in the visual score of a life lived in harmony with music.`,
  },
  {
    id: 'Golden-Treble-Elegance',
    imageUrl: `${R2_BASE_URL}/music-poster-wall/golden-treble-elegance.webp`,
    category: 'music-poster-wall',
    tags: ['treble clef', 'gold', 'minimalist', 'modern', 'sophisticated'],
    description: `In this sophisticated corner of contemporary design, a striking musical statement takes center stage – a golden treble clef that seems to dance across a midnight canvas, its metallic brilliance creating an explosive visual rhythm against the deep, mysterious background. This isn't merely a poster; it's a celebration of music's most recognizable symbol, reimagined through a modern lens that speaks to both classical tradition and contemporary aesthetics. The artwork's genius lies in its dynamic composition, where the treble clef appears to be dissolving and reforming simultaneously, with golden particles streaming across the canvas like musical notes caught in a cosmic wind. The splatter effect surrounding the central symbol suggests the explosive power of music itself – unpredictable, energetic, and beautifully chaotic. Set against charcoal-grey walls, the piece commands attention while maintaining an air of sophisticated restraint. The carefully chosen mustard velvet armchair below creates a perfect color dialogue with the golden tones above, while the brass floor lamp adds another layer of metallic warmth to the composition. This interior design choice speaks to a deep appreciation for music as both an auditory and visual art form. The surrounding elements – the minimalist side table, the carefully placed design books – all defer to the poster's commanding presence. The space feels like a private listening room in a high-end recording studio or the office of a distinguished music producer. The artwork transforms the treble clef from a simple musical notation into a symbol of luxury, creativity, and artistic expression. It reminds us that music notation itself is a form of visual art, a written language that has guided musicians for centuries, here elevated to become the focal point of modern interior design.`,
  },
  {
    id: 'Urban-Melody-Collage',
    imageUrl: `${R2_BASE_URL}/music-poster-wall/urban-melody-collage.webp`,
    category: 'music-poster-wall',
    tags: ['collage', 'urban', 'colorful', 'sheet music', 'contemporary'],
    description: `This vibrant musical collage erupts with the raw energy of urban street art, transforming traditional sheet music into a kaleidoscope of color and emotion that pulses with the heartbeat of the city. The artwork brilliantly deconstructs and reconstructs musical notation, layering vintage sheet music with bold blocks of color – electric blues, sunset oranges, passionate reds, and golden yellows – creating a visual jazz improvisation frozen in time. Text fragments peek through the layers like whispered lyrics, while the treble clef anchors the composition, a familiar friend in this beautiful chaos. The piece speaks to music's evolution from classical concert halls to urban streets, from formal notation to freestyle expression. Positioned above a rustic wooden console, the artwork creates a stunning contrast between organic textures and explosive creativity. The natural elements in the room – the architectural plant in its brass vessel, the woven basket, the dried pampas grass – provide a grounding counterpoint to the poster's dynamic energy. This is more than wall art; it's a manifesto about music's democratic nature, how it belongs equally in symphony halls and subway stations, in recording studios and street corners. The distressed, layered aesthetic suggests the palimpsest of musical history, where each generation writes its songs over the fading notes of the past, creating something entirely new while honoring what came before. The poster captures that magical moment when structure meets spontaneity, when classical notation collides with contemporary expression, producing a visual symphony that speaks to music lovers across all genres and generations. It's a piece that invites closer inspection, revealing new details with each viewing – a hidden measure of music here, a splash of unexpected color there, making it a living document of musical creativity.`,
  }
]

// 批量重命名函数示例
export const renameFiles = [
  { original: '0_0 (1).webp', new: 'vinyl-symphony-collection.webp' },
  { original: '0_0 (2).webp', new: 'golden-treble-elegance.webp' },
  { original: '0_0 (3).webp', new: 'urban-melody-collage.webp' },
  { original: '0_0 (4).webp', new: 'melodic-manuscript-dreams.webp' },
  { original: '0_0.webp', new: 'guitar-blueprint-trinity.webp' },
  { original: '0_1 (1).webp', new: 'rhythmic-circles-symphony.webp' },
  { original: '0_1 (2).webp', new: 'cosmic-sound-waves.webp' },
  { original: '0_1 (3).webp', new: 'vintage-vinyl-nostalgia.webp' },
  { original: '0_1 (4).webp', new: 'sheet-music-sunset.webp' },
  { original: '0_1.webp', new: 'musical-elements-collage.webp' },
]