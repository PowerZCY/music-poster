import { Poster, PosterCategory, CategoryInfo } from '@/types/poster'

// Cloudflare R2 base URL (replace with your actual R2 bucket URL)
const R2_BASE_URL = 'https://r2.d8ger.com/music-poster'

// Category definitions
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'earphone',
    name: 'Earphone',
    nameKey: 'category.earphone',
    description: 'Music posters featuring headphones and earphones',
    icon: '🎧',
  },
  {
    id: 'music-class',
    name: 'Music Class',
    nameKey: 'category.musicClass',
    description: 'Educational music posters and classroom themes',
    icon: '🎼',
  },
  {
    id: 'country-music',
    name: 'Country Music',
    nameKey: 'category.countryMusic',
    description: 'Country music themed posters',
    icon: '🎸',
  },
  {
    id: 'music-poster-wall',
    name: 'Music Poster Wall',
    nameKey: 'category.musicPosterWall',
    description: 'Collection of music wall art posters',
    icon: '🖼️',
  },
  {
    id: 'music-store',
    name: 'Music Store',
    nameKey: 'category.musicStore',
    description: 'Music store and retail themed posters',
    icon: '🏪',
  },
]

// Actual poster data from generated batches
export const POSTERS: Poster[] = [
  // Music Poster Wall Category - Wall Collection
  // Batch 1 - First 10 posters
  {
    id: 'Vinyl-Symphony-Collection',
    imageUrl: `${R2_BASE_URL}/wall/vinyl-symphony-collection.webp`,
    category: 'music-poster-wall',
    tags: ['vinyl', 'collection', 'vintage', 'interior', 'gallery'],
    description: `Step into a curated sanctuary where music meets visual artistry, a living room transformed into a personal gallery of sonic memories. This extraordinary wall arrangement showcases nine distinct music-themed artworks, each piece telling its own story while contributing to a harmonious symphony of design. The collection features an eclectic mix of abstract vinyl representations, from bold geometric circles reminiscent of classic LPs to minimalist interpretations that blur the lines between sound waves and visual art. The warm amber glow from the modern floor lamp casts a gentle illumination across the display, highlighting the rich textures and varied color palettes – from deep obsidian blacks to vibrant coral reds, cool aqua blues to sun-kissed yellows. Below this artistic tableau, a carefully curated vinyl collection stands sentinel in the console, their spines creating a rhythmic pattern that echoes the visual melody above. The mustard yellow armchair, with its mid-century modern lines, invites contemplation and serves as the perfect vantage point for appreciating this intersection of audio and visual culture. This space represents more than mere decoration; it's a testament to the enduring romance between music lovers and the tangible artifacts of their passion. Each poster captures a different mood, a different era, a different genre – yet together they create a cohesive narrative about the universal language of music. The thoughtful arrangement speaks to the curator's understanding that music isn't just heard, but seen, felt, and lived. This is where nostalgia meets contemporary design, where every glance reveals a new detail, a hidden note in the visual score of a life lived in harmony with music.`,
  },
  {
    id: 'Golden-Treble-Elegance',
    imageUrl: `${R2_BASE_URL}/wall/golden-treble-elegance.webp`,
    category: 'music-poster-wall',
    tags: ['treble clef', 'gold', 'minimalist', 'modern', 'sophisticated'],
    description: `In this sophisticated corner of contemporary design, a striking musical statement takes center stage – a golden treble clef that seems to dance across a midnight canvas, its metallic brilliance creating an explosive visual rhythm against the deep, mysterious background. This isn't merely a poster; it's a celebration of music's most recognizable symbol, reimagined through a modern lens that speaks to both classical tradition and contemporary aesthetics. The artwork's genius lies in its dynamic composition, where the treble clef appears to be dissolving and reforming simultaneously, with golden particles streaming across the canvas like musical notes caught in a cosmic wind. The splatter effect surrounding the central symbol suggests the explosive power of music itself – unpredictable, energetic, and beautifully chaotic. Set against charcoal-grey walls, the piece commands attention while maintaining an air of sophisticated restraint. The carefully chosen mustard velvet armchair below creates a perfect color dialogue with the golden tones above, while the brass floor lamp adds another layer of metallic warmth to the composition. This interior design choice speaks to a deep appreciation for music as both an auditory and visual art form. The surrounding elements – the minimalist side table, the carefully placed design books – all defer to the poster's commanding presence. The space feels like a private listening room in a high-end recording studio or the office of a distinguished music producer. The artwork transforms the treble clef from a simple musical notation into a symbol of luxury, creativity, and artistic expression. It reminds us that music notation itself is a form of visual art, a written language that has guided musicians for centuries, here elevated to become the focal point of modern interior design.`,
  },
  {
    id: 'Urban-Melody-Collage',
    imageUrl: `${R2_BASE_URL}/wall/urban-melody-collage.webp`,
    category: 'music-poster-wall',
    tags: ['collage', 'urban', 'colorful', 'sheet music', 'contemporary'],
    description: `This vibrant musical collage erupts with the raw energy of urban street art, transforming traditional sheet music into a kaleidoscope of color and emotion that pulses with the heartbeat of the city. The artwork brilliantly deconstructs and reconstructs musical notation, layering vintage sheet music with bold blocks of color – electric blues, sunset oranges, passionate reds, and golden yellows – creating a visual jazz improvisation frozen in time. Text fragments peek through the layers like whispered lyrics, while the treble clef anchors the composition, a familiar friend in this beautiful chaos. The piece speaks to music's evolution from classical concert halls to urban streets, from formal notation to freestyle expression. Positioned above a rustic wooden console, the artwork creates a stunning contrast between organic textures and explosive creativity. The natural elements in the room – the architectural plant in its brass vessel, the woven basket, the dried pampas grass – provide a grounding counterpoint to the poster's dynamic energy. This is more than wall art; it's a manifesto about music's democratic nature, how it belongs equally in symphony halls and subway stations, in recording studios and street corners. The distressed, layered aesthetic suggests the palimpsest of musical history, where each generation writes its songs over the fading notes of the past, creating something entirely new while honoring what came before. The poster captures that magical moment when structure meets spontaneity, when classical notation collides with contemporary expression, producing a visual symphony that speaks to music lovers across all genres and generations. It's a piece that invites closer inspection, revealing new details with each viewing – a hidden measure of music here, a splash of unexpected color there, making it a living document of musical creativity.`,
  },
  {
    id: 'Melodic-Manuscript-Dreams',
    imageUrl: `${R2_BASE_URL}/wall/melodic-manuscript-dreams.webp`,
    category: 'music-poster-wall',
    tags: ['manuscript', 'artistic', 'treble clef', 'vintage', 'elegant'],
    description: `Against a backdrop of sophisticated charcoal walls, this exquisite piece transforms classical musical notation into a work of fine art, where a oversized treble clef becomes the protagonist in a visual narrative about music's timeless elegance. The artwork masterfully blends traditional sheet music with artistic interpretation, as if a master calligrapher has reimagined musical notation through the lens of abstract expressionism. The treble clef, rendered in bold black strokes with subtle red accents, appears to be breaking free from the constraints of the staff lines, suggesting music's inherent desire to transcend boundaries and rules. The aged parchment background, with its warm cream tones and subtle distressing, evokes centuries of musical history, from medieval manuscripts to contemporary compositions. This carefully curated space, with its modern copper pendant lights and plush terracotta seating, creates a dialogue between past and present, tradition and innovation. The poster serves as a bridge between these worlds, honoring classical music's rich heritage while presenting it in a thoroughly contemporary context. The composition's genius lies in its restraint – while the treble clef dominates, delicate musical notes dance across the background like memories of melodies half-remembered. Small splashes of red ink suggest passion, intensity, the emotional core that makes music more than mere notation. This is the kind of piece that would grace the studio of a renowned composer or the waiting room of an exclusive music conservatory. It speaks to those who understand that musical notation is itself a form of visual poetry, a written language that captures the ineffable and makes it tangible. The artwork reminds us that before music reaches our ears, it exists as marks on paper, as visual symbols that hold within them infinite possibilities for interpretation and expression.`,
  },
  {
    id: 'Guitar-Blueprint-Trinity',
    imageUrl: `${R2_BASE_URL}/wall/guitar-blueprint-trinity.webp`,
    category: 'music-poster-wall',
    tags: ['guitar', 'blueprint', 'technical', 'vintage', 'music studio'],
    description: `This remarkable triptych transforms a music lover's workspace into a shrine to the art of guitar craftsmanship and musical notation, where three distinct yet harmonious pieces create a visual symphony celebrating both the technical and artistic aspects of music creation. The left panel features a classic stratocaster silhouette overlaid on vintage sheet music, its sunburst finish glowing against the aged musical manuscript like a phoenix rising from classical tradition. The center piece showcases a stunning turquoise Les Paul rendered with technical precision, surrounded by engineering notations and measurements that reveal the mathematical perfection underlying musical instrument design. The right panel returns to pure musical notation, presenting a carefully composed score that seems to flow directly from the instruments beside it. Together, these pieces tell the complete story of music creation – from the instruments that produce the sound, through the technical mastery required to build them, to the notation that preserves melodies for posterity. The workspace below, with its warm wooden surfaces and carefully organized shelves filled with vinyl records and books, creates the perfect environment for musical contemplation and creation. A small ukulele rests casually against the storage unit, suggesting this is not just a space for admiring music, but for making it. The industrial desk lamp provides focused illumination, perfect for late-night composition sessions or detailed study of musical theory. This installation speaks to the modern musician who appreciates both the analog warmth of vintage instruments and the precision of contemporary design. It's a space where technology meets tradition, where the mathematical precision of instrument design coexists with the emotional expression of musical performance. The poster arrangement creates a visual narrative about music's journey from conception to creation to preservation, making it perfect for recording studios, music schools, or the private sanctuaries of serious musicians.`,
  },
  {
    id: 'Rhythmic-Circles-Symphony',
    imageUrl: `${R2_BASE_URL}/wall/rhythmic-circles-symphony.webp`,
    category: 'music-poster-wall',
    tags: ['abstract', 'geometric', 'vinyl', 'modern art', 'audio equipment'],
    description: `In this audiophile's paradise, a stunning abstract composition takes center stage, where geometric shapes dance across vintage sheet music in a visual representation of sound waves and vinyl records. The artwork masterfully combines circular motifs reminiscent of records and speakers with flowing musical staves that curve and bend like sound waves through space. Bold coral and terracotta circles punctuate the composition, their warm tones echoing the leather lounge chair below, while black geometric elements ground the piece with sophisticated contrast. This is more than mere decoration; it's a meditation on the physical nature of sound – how music travels in waves, spins on turntables, and resonates through speakers. The poster's position above a carefully curated hi-fi setup creates a perfect marriage of visual and audio art. Vintage amplifiers and modern turntables sit in harmonious arrangement, their brushed metal surfaces catching the ambient light. The golden Les Paul guitar leaning casually against the console suggests this is a space for both music consumption and creation. The surrounding shelves, filled with vinyl records and audio equipment, frame the scene like a temple to analog sound. The composition speaks to the golden age of hi-fi culture, when album artwork was as important as the music itself, when listeners would sit in dedicated spaces to experience music as a full sensory event. The abstract elements in the poster seem to visualize what the equipment below produces – circles expanding like sound waves, notes flowing like electrical signals through circuits. This installation represents the perfect synthesis of mid-century modern design and contemporary artistic expression, creating a space where technology and art converge in celebration of music's enduring power to move both ears and eyes.`,
  },
  {
    id: 'Cosmic-Sound-Waves',
    imageUrl: `${R2_BASE_URL}/wall/cosmic-sound-waves.webp`,
    category: 'music-poster-wall',
    tags: ['abstract', 'waves', 'cosmic', 'modern', 'minimalist'],
    description: `This mesmerizing piece transforms sound visualization into high art, presenting flowing waves of coral, gold, and midnight blue that seem to pulse with an inner rhythm against a pristine canvas. The artwork captures the essence of sound in motion – undulating forms that rise and fall like audio waveforms on an oscilloscope, yet rendered with an organic fluidity that suggests music's emotional rather than technical qualities. Each wave layer tells a different story: the deep navy base notes, the warm golden midtones, and the coral high frequencies, all harmonizing in a visual symphony. The piece's genius lies in its ability to make the invisible visible, translating the ephemeral nature of sound into something tangible and lasting. Positioned in a minimalist setting, the artwork becomes a focal point that draws the eye and invites contemplation. The subtle texture and weathered quality of the background adds depth and character, suggesting this is not just a representation of modern music but a timeless exploration of sound itself. The composition evokes everything from ocean waves to mountain ranges, from ECG readings to seismographic recordings, reminding us that rhythm and vibration are fundamental to all of nature. This is the kind of piece that would be at home in a recording studio's lounge, a music therapist's office, or the living room of someone who understands that music is more than entertainment – it's a fundamental force that shapes our emotional and physical experience of the world. The artwork serves as a daily reminder that we live in a universe of vibration, where everything from atoms to galaxies moves in patterns that, if we could hear them, would form the ultimate cosmic symphony.`,
  },
  {
    id: 'Vintage-Vinyl-Nostalgia',
    imageUrl: `${R2_BASE_URL}/wall/vintage-vinyl-nostalgia.webp`,
    category: 'music-poster-wall',
    tags: ['vinyl', 'vintage', 'record', 'retro', 'classic'],
    description: `A celebration of analog audio culture, this striking poster features a perfectly rendered vinyl record that seems to spin eternally against a weathered, cream-colored background. The record, with its deep grooves and glossy black surface, becomes an icon of musical history, representing decades of recorded sound from jazz to rock, classical to punk. The orange label at its center glows like a sunset, bearing mysterious markings that could be from any era, any genre, suggesting the universal nature of recorded music. The distressed background, with its subtle stains and age marks, adds authenticity and character, as if this poster has been hanging in record shops and music venues for generations. This piece speaks to the tactile, physical relationship we once had with music – when listening meant carefully removing a record from its sleeve, placing it on the turntable, and gently lowering the needle into the groove. It's a nostalgic reminder of when music was an event, not just background noise. The composition's simplicity is its strength, focusing entirely on the record as object, as artifact, as art. The subtle shadows and highlights give the vinyl a three-dimensional quality, as if you could reach out and feel the grooves beneath your fingers. This artwork appeals to collectors who understand that vinyl isn't just about superior sound quality; it's about the ritual, the large-format artwork, the liner notes, the weight of the record in your hands. It's perfect for spaces where music history is honored – vintage record stores, audiophile listening rooms, or the studios of DJs who still spin actual vinyl. The poster transforms a functional object into fine art, elevating the humble record to its rightful place as one of the 20th century's most important cultural artifacts.`,
  },
  {
    id: 'Sheet-Music-Sunset',
    imageUrl: `${R2_BASE_URL}/wall/sheet-music-sunset.webp`,
    category: 'music-poster-wall',
    tags: ['sheet music', 'sunset', 'minimalist', 'geometric', 'contemporary'],
    description: `This evocative piece presents a stunning juxtaposition of classical musical notation with bold geometric abstraction, where a massive coral-red circle rises like a sun or sets like a moon over a landscape of vintage sheet music. The composition creates a powerful visual metaphor for music's ability to evoke time and place – the circle could represent the sun setting over a jazz club, the moon rising over an opera house, or simply the cyclical nature of musical movements. Below this celestial orb, a black semicircle grounds the composition, perhaps representing the earth, a hill, or the curve of a grand piano's body. The aged sheet music background, with its yellowed edges and faded notes, provides texture and history, suggesting this is not just any music but something precious, preserved, worthy of artistic interpretation. Musical notations peek through like memories, readable yet abstract, familiar yet mysterious. The minimalist approach strips away everything unnecessary, leaving only the essential elements needed to convey the intersection of music and visual art. This piece would resonate in spaces where contemplation and creativity merge – a composer's studio, a music teacher's classroom, or the apartment of someone who sees music not just as sound but as a complete aesthetic experience. The warm coral tone brings energy and optimism, while the vintage background adds sophistication and depth. It's a reminder that music has always been visual as well as auditory – from the beautiful manuscripts of medieval monks to the psychedelic album covers of the 1960s. This poster continues that tradition, transforming musical notation into a landscape of possibility, where notes become horizons and staves become the lines that connect earth to sky.`,
  },
  {
    id: 'Musical-Elements-Collage',
    imageUrl: `${R2_BASE_URL}/wall/musical-elements-collage.webp`,
    category: 'music-poster-wall',
    tags: ['collage', 'mixed media', 'abstract', 'colorful', 'eclectic'],
    description: `This dynamic collage explodes with creative energy, combining sheet music, geometric shapes, and abstract elements in a composition that captures the chaotic beauty of musical creation. The piece layers multiple visual languages – from precise musical notation to free-form splashes of color, from geometric circles that could be records or sound waves to organic shapes that suggest the emotional flow of melody. Coral reds, deep blacks, and warm creams create a sophisticated color palette that feels both vintage and contemporary. The artwork seems to visualize the moment of musical inspiration, when structure and spontaneity collide to create something new. Fragments of sheet music appear and disappear beneath layers of paint and geometric overlays, suggesting how melodies emerge from and return to the collective unconscious of musical history. This is the visual equivalent of a jazz improvisation or a DJ's remix – taking existing elements and recombining them into something fresh and unexpected. The composition's energy is palpable, with elements seeming to vibrate and move even in their static form. This piece would be perfect for creative spaces where boundaries are pushed and conventions challenged – recording studios where genres are mixed, music schools where tradition meets innovation, or the homes of musicians who understand that creativity often comes from collision rather than harmony. The collage technique itself is a metaphor for modern music-making, where sampling, mixing, and layering create new sounds from old sources. Every viewing reveals new details – a hidden treble clef here, a fragment of lyrics there – making this a living document of musical creativity that continues to inspire long after its creation. It's a celebration of music's ability to bring together disparate elements and create unity from diversity.`,
  },
  // Batch 2 - Additional 3 posters
  {
    id: 'Jazz-Fusion-Instruments',
    imageUrl: `${R2_BASE_URL}/wall/jazz-fusion-instruments.webp`,
    category: 'music-poster-wall',
    tags: ['jazz', 'instruments', 'geometric', 'modern', 'colorful'],
    description: `This stunning contemporary piece transforms musical instruments into geometric art, creating a visual jazz fusion that celebrates the intersection of traditional instrumentation and modern design. The poster features elegant silhouettes of a trumpet, acoustic guitar, and drums, rendered in rich terracotta, teal, and coral tones against overlapping circular forms that suggest sound waves, vinyl records, or the cyclical nature of musical rhythm. The composition masterfully balances warm and cool tones, with the trumpet's bold presence anchored by subtle drum elements and guitar details that speak to the collaborative nature of ensemble playing. Set against sage-green walls in this sophisticated music lover's sanctuary, the artwork creates a perfect harmony with the vintage amplifier and gleaming guitar below. The space feels like a modern jazz club's VIP lounge, where classic instruments meet contemporary aesthetics. The geometric abstraction doesn't obscure the instruments' identity but rather elevates them to iconic status, suggesting that these tools of musical creation are themselves works of art worthy of gallery display. The overlapping circular elements create depth and movement, as if the poster captures the moment when separate instruments blend into unified musical expression. This piece would resonate with musicians who appreciate both technical precision and artistic innovation, making it perfect for recording studios, music schools, or the homes of those who understand that the best music happens when individual voices combine to create something greater than the sum of their parts. The warm color palette and organic shapes suggest the emotional warmth of live music, while the clean geometric approach speaks to the mathematical precision underlying all great musical composition.`,
  },
  {
    id: 'Music-Legend-Portrait-Gallery',
    imageUrl: `${R2_BASE_URL}/wall/music-legend-portrait-gallery.webp`,
    category: 'music-poster-wall',
    tags: ['portrait', 'music legends', 'pop art', 'gallery wall', 'vintage'],
    description: `This remarkable gallery wall creates a shrine to musical history, where iconic portraits and vintage concert posters transform a living space into a personal hall of fame. The centerpiece features a striking pop art portrait rendered in vibrant yellows, reds, and blues against a dramatic black background, capturing the intensity and charisma that defines musical legends. The artwork employs the bold aesthetic of Andy Warhol's celebrity portraits, with high contrast colors and sharp shadows that turn the subject into an icon of popular culture. Surrounding this focal piece, an eclectic collection of vintage concert posters and promotional materials creates a rich tapestry of musical history – each piece a window into different eras, genres, and cultural moments. The industrial-chic setting, with its exposed concrete walls and modern furniture in deep teals and rich oranges, provides the perfect backdrop for this celebration of music's greatest figures. The vintage turntable setup below suggests this isn't just about visual appreciation but active musical engagement. This space represents the ultimate music enthusiast's environment, where the visual and auditory aspects of musical culture coexist in perfect harmony. The arrangement speaks to the collector's mentality, the desire to preserve and display the artifacts of musical greatness. Each poster tells a story, each portrait represents a moment in cultural history, creating a room that functions as both living space and private museum. This type of display appeals to those who see music not just as entertainment but as cultural heritage worth celebrating and preserving. The combination of pop art techniques with vintage promotional materials bridges the gap between high and low culture, suggesting that popular music deserves the same reverence traditionally reserved for classical arts.`,
  },
  {
    id: 'Retro-Concert-Poster-Triptych',
    imageUrl: `${R2_BASE_URL}/wall/retro-concert-poster-triptych.webp`,
    category: 'music-poster-wall',
    tags: ['retro', 'concert posters', 'triptych', 'vintage', 'collection'],
    description: `This captivating triptych transforms vintage concert promotion into high art, presenting three distinct poster designs that capture different eras and aesthetics of live music culture. The left panel bursts with psychedelic energy, featuring bold typography and collaged elements that evoke the experimental concert posters of the 1960s counterculture movement. Its layered composition of text, images, and graphic elements creates a visual cacophony that mirrors the rebellious spirit of rock and folk festivals. The center panel adopts a more structured approach with split-screen design in warm oranges and cool blues, reminiscent of 1970s graphic design when concert promotion became more professional yet retained artistic integrity. The right panel presents a sunset cityscape with silhouetted figures, evoking the romantic notion of music as a communal experience that brings people together under shared skies. Together, these pieces chronicle the evolution of music promotion from grassroots art movement to sophisticated marketing while maintaining the essential spirit of musical community. The pristine white gallery setting allows each poster's distinct personality to shine while creating dialogue between different design philosophies and historical moments. The presence of the rich burgundy acoustic guitar adds a contemporary note to this historical survey, suggesting that while promotional styles change, the fundamental relationship between musicians and their audiences remains constant. This collection would appeal to graphic designers, music historians, and anyone fascinated by the intersection of commercial art and cultural movements. The careful curation and presentation elevate these once-ephemeral promotional materials to the status of fine art, recognizing their role not just in selling tickets but in shaping the visual language of popular culture. Each piece represents a different approach to the challenge of capturing musical energy in static visual form.`,
  },
  // Batch 3 - Additional 3 posters
  {
    id: 'Classical-Instruments-Gallery',
    imageUrl: `${R2_BASE_URL}/wall/classical-instruments-gallery.webp`,
    category: 'music-poster-wall',
    tags: ['classical', 'instruments', 'violin', 'geometric', 'minimalist'],
    description: `This sophisticated quintet of artwork transforms classical instruments into modern geometric art, creating an elegant homage to the timeless beauty of orchestral music. The collection features carefully abstracted representations of string instruments, with two prominent violin silhouettes rendered in rich black against warm cream backgrounds, their familiar curves transformed into bold graphic elements. The central piece presents a fascinating geometric interpretation of musical elements, with overlapping circles and angular forms in warm terracotta and rust tones that suggest both the physical construction of instruments and the mathematical precision underlying musical harmony. Each piece maintains the essential character of its subject while stripping away unnecessary detail, creating a visual language that speaks to both classical music aficionados and contemporary design enthusiasts. The arrangement creates a dialogue between individual instruments and their collective identity as components of orchestral music. Set in this refined interior with its mid-century modern furniture and neutral palette, the artwork elevates the space to gallery status while maintaining residential warmth. The consistent cream backgrounds and black frames create unity across the diverse compositions, while the varied approaches to abstraction keep each piece visually distinct and engaging. This collection would be perfect for music conservatories, the homes of classical musicians, or any space where traditional craftsmanship meets contemporary aesthetics. The pieces celebrate not just the visual beauty of musical instruments but their role as bridges between human creativity and mathematical perfection, between individual expression and collaborative harmony. The geometric approach suggests that these instruments represent more than tools for making music – they are cultural artifacts that embody centuries of artistic and technical evolution.`,
  },
  {
    id: 'Piano-Manuscript-Gallery',
    imageUrl: `${R2_BASE_URL}/wall/piano-manuscript-gallery.webp`,
    category: 'music-poster-wall',
    tags: ['piano', 'manuscript', 'sheet music', 'classical', 'portrait'],
    description: `This exquisite gallery wall creates a sanctuary for classical music, where vintage sheet music and a striking portrait combine to celebrate the rich heritage of piano performance and composition. The arrangement features multiple authentic musical manuscripts, their aged parchment and handwritten notations bearing witness to centuries of musical creativity. A beautifully rendered treble clef serves as the visual anchor for the left side, its bold black curves creating an elegant contrast against the delicate musical staves surrounding it. The centerpiece portrait captures the essence of classical performance with dramatic lighting and sophisticated composition, suggesting both the technical mastery and emotional depth required for great musical interpretation. The presence of the piano below isn't merely functional but integral to the artistic statement – its dark wood and pristine keys echo the monochromatic palette of the artwork above while providing the means to bring these written compositions to life. This space represents the perfect marriage of visual and auditory art, where the written record of musical genius serves as both historical document and contemporary decoration. The black walls create an intimate, library-like atmosphere that suggests serious musical study and contemplation. This type of installation appeals to those who understand that musical notation is itself a form of visual poetry, a written language that captures the ephemeral beauty of sound and preserves it for future generations. The careful arrangement of manuscripts at various sizes and orientations creates visual rhythm that mirrors the musical concepts they represent. This is more than decoration – it's a tribute to the entire ecosystem of classical music, from composition to notation to performance, creating a space where past and present musical traditions converge in harmonious display.`,
  },
  {
    id: 'Rock-Concert-Collection',
    imageUrl: `${R2_BASE_URL}/wall/rock-concert-collection.webp`,
    category: 'music-poster-wall',
    tags: ['rock', 'concert posters', 'red', 'gallery wall', 'rebellion'],
    description: `This powerful gallery wall transforms a living space into a shrine to rock music's rebellious spirit, where bold red and black concert posters create a visual crescendo that captures the energy and attitude of live rock performance. The collection features an eclectic mix of promotional materials, from abstract drummer silhouettes against dramatic red backdrops to detailed venue information and band graphics that speak to different eras of rock culture. The dominant red color scheme creates unity while allowing individual posters to maintain their distinct personalities – some featuring bold typography, others emphasizing imagery, and several combining both in the classic tradition of rock poster art. The arrangement itself suggests the controlled chaos of a rock show, with pieces of varying sizes creating visual rhythm that mirrors the syncopated beats of rock music. A striking "République" poster anchors the composition with its bold graphics and vintage typography, while abstract pieces suggest the atmospheric and emotional aspects of live performance. The modern living room setting, with its charcoal sofa and acoustic guitar, bridges the gap between the raw energy of rock culture and contemporary domestic comfort. This type of display appeals to those who see rock music not just as entertainment but as a form of cultural rebellion and artistic expression. The posters serve as both historical documents and ongoing inspiration, reminding viewers of music's power to challenge, inspire, and unite. The careful curation transforms ephemeral promotional materials into a cohesive artistic statement about the enduring appeal of rock music. Each piece contributes to a larger narrative about the relationship between musicians and their audiences, between commercial promotion and artistic integrity, creating a space that celebrates rock music's ability to transform both venues and lives.`,
  },
  // Batch 4 - Final 8 posters
  {
    id: 'Rainbow-Guitar-Explosion',
    imageUrl: `${R2_BASE_URL}/wall/rainbow-guitar-explosion.webp`,
    category: 'music-poster-wall',
    tags: ['guitar', 'rainbow', 'explosion', 'colorful', 'dynamic'],
    description: `This electrifying artwork captures the explosive power of music through a stunning guitar silhouette that seems to dissolve into a constellation of rainbow colors against a deep black canvas. The piece transforms a classic electric guitar into a cosmic event, with vibrant streams of orange, yellow, blue, and purple flowing from the instrument like musical energy made visible. Each colored streak and particle suggests the emotional impact of a powerful guitar solo, the moment when technical skill transcends into pure artistic expression. The composition brilliantly uses negative space, with the stark black background making the colorful elements appear to glow with inner fire. This artwork speaks to the transformative power of music, how it can take ordinary moments and fill them with extraordinary color and emotion. The vintage amplifier and cherry-red guitar in the room below create a perfect dialogue between the poster's artistic interpretation and the actual tools of musical creation. The sophisticated interior setting, with its classic moldings and mid-century furniture, grounds this explosion of creativity in a space of refined taste. This piece would resonate with guitarists who understand that their instrument is more than wood and metal – it's a conduit for emotional expression that can paint the air with sound. The artwork celebrates music's ability to transform both performer and listener, turning simple chord progressions into kaleidoscopic experiences. The dynamic composition suggests movement and energy, as if the viewer is witnessing the moment when music breaks free from its physical constraints and becomes pure, visible emotion streaming through space.`,
  },
  {
    id: 'Treble-Clef-Abstract-Symphony',
    imageUrl: `${R2_BASE_URL}/wall/treble-clef-abstract-symphony.webp`,
    category: 'music-poster-wall',
    tags: ['treble clef', 'abstract', 'geometric', 'colorful', 'modern'],
    description: `This sophisticated composition transforms the fundamental symbol of musical notation into a contemporary masterpiece, where a bold treble clef anchors a symphony of geometric shapes and vintage musical elements. The artwork layers aged sheet music with modern abstract forms in a carefully orchestrated palette of coral, teal, gold, and deep black, creating visual harmony that mirrors musical composition. Overlapping circles suggest sound waves, vinyl records, or the cyclical nature of musical phrases, while the weathered musical manuscript provides historical context and texture. The piece demonstrates how traditional musical notation can serve as the foundation for contemporary artistic expression, bridging centuries of musical heritage with modern design sensibility. The treble clef itself appears to be both emerging from and dissolving into the surrounding geometric elements, suggesting the fluid relationship between written music and performed art. Set in this refined interior with its iconic Eames lounge chair and carefully curated accessories, the artwork elevates the space to gallery status while maintaining residential warmth. The brass details in the room echo the golden tones in the poster, creating a cohesive design narrative. This piece would appeal to musicians, composers, and music educators who appreciate both the technical aspects of musical notation and its potential for artistic interpretation. The composition celebrates the visual beauty of musical symbols while exploring their deeper meaning as carriers of human expression. The layered approach mirrors how music itself is built from individual notes and rhythms that combine to create complex emotional landscapes. This artwork reminds us that musical notation is itself a form of visual art, a written language that captures the ineffable qualities of sound and preserves them for future generations to interpret and enjoy.`,
  },
  {
    id: 'Vinyl-Audio-Equipment-Collage',
    imageUrl: `${R2_BASE_URL}/wall/vinyl-audio-equipment-collage.webp`,
    category: 'music-poster-wall',
    tags: ['vinyl', 'audio equipment', 'collage', 'vintage', 'technology'],
    description: `This remarkable six-panel composition creates a visual encyclopedia of analog music culture, celebrating the golden age of vinyl records and the sophisticated equipment that brought them to life. Each frame showcases different aspects of audio technology, from gleaming turntables and precision equalizers to the iconic circular forms of vinyl records and the geometric patterns of sound visualization. The collection uses a cohesive color palette dominated by rich oranges, deep teals, and classic blacks, creating unity while highlighting the diverse forms and functions of each piece of equipment. Some panels feature actual vinyl records, their labels glowing like beacons of musical history, while others present abstract interpretations of sound waves and frequency patterns. The arrangement transforms technical specifications into artistic statements, elevating the humble mechanics of music reproduction to the status of fine art. This artwork speaks to the era when listening to music was a deliberate, ceremonial act requiring knowledge, care, and attention to detail. The presence of the vintage turntable below the artwork reinforces this theme, creating a dialogue between representation and reality. Set against dark walls in this sophisticated listening room, the collection creates an immersive environment for serious music appreciation. The careful arrangement of vinyl records below suggests this is a functioning music space, not just a display area. This installation would appeal to audiophiles, vinyl collectors, and anyone who appreciates the tactile, ritualistic aspects of analog music consumption. The artwork celebrates not just the aesthetic beauty of vintage audio equipment but its role in preserving and transmitting musical culture across generations. Each panel serves as a reminder that behind every great musical experience lies sophisticated technology designed by people who understood that superior sound reproduction is itself an art form.`,
  },
  {
    id: 'Audio-Equipment-Museum',
    imageUrl: `${R2_BASE_URL}/wall/audio-equipment-museum.webp`,
    category: 'music-poster-wall',
    tags: ['audio equipment', 'museum', 'vintage', 'collection', 'technology'],
    description: `This extraordinary poster presents a meticulously arranged museum of vintage audio equipment, transforming dozens of classic devices into a colorful mosaic that celebrates the evolution of sound technology. The composition features an impressive array of authentic equipment from different eras – analog synthesizers, mixing consoles, drum machines, amplifiers, and recording devices – each rendered in period-appropriate colors that create a vibrant tapestry of musical history. The grid-like arrangement suggests both the systematic nature of audio engineering and the democratic spirit of electronic music, where every piece of equipment has its place and purpose. Each device is presented with museum-quality attention to detail, from the distinctive knobs and sliders of vintage synthesizers to the characteristic VU meters and patch bays of professional recording equipment. The artwork uses a sophisticated color palette that ranges from classic black and chrome to bold magentas, teals, and oranges, reflecting both the serious functionality and playful creativity of electronic music production. This piece would serve as both educational tool and artistic statement, perfect for recording studios, electronic music schools, or the homes of producers and engineers who appreciate the historical development of their craft. The poster celebrates the era when electronic music was born, when innovative musicians and engineers worked together to create new sounds and expand the possibilities of musical expression. Set in this elegant library-like environment, the artwork creates an interesting dialogue between traditional and electronic music cultures. The collection reminds viewers that electronic music has its own rich history and deserves the same reverence traditionally accorded to classical instruments. This is more than nostalgia; it's a tribute to the pioneers who democratized music production and opened new frontiers for artistic expression.`,
  },
  {
    id: 'Classical-Sheet-Music-Manuscript',
    imageUrl: `${R2_BASE_URL}/wall/classical-sheet-music-manuscript.webp`,
    category: 'music-poster-wall',
    tags: ['classical', 'sheet music', 'manuscript', 'elegant', 'traditional'],
    description: `This elegant masterpiece presents an authentic classical music manuscript with the reverence typically reserved for fine art, transforming musical notation into a study of historical documentation and artistic beauty. The aged parchment bears the handwritten marks of musical composition, each note and staff line a testament to the meticulous craft required to preserve musical ideas before the age of recording technology. The manuscript's weathered appearance adds character and authenticity, suggesting years of use by musicians who brought these written symbols to life through performance. The careful penmanship and precise notation speak to an era when music copying was itself a skilled art form, requiring both technical accuracy and aesthetic sensitivity. A prominent treble clef anchors the composition, its bold curves creating visual rhythm that complements the horizontal flow of the musical staves. The warm cream background and subtle aging effects give the piece a museum-quality appearance that honors the historical significance of written music. Set in this sophisticated interior with its pristine white walls and modern furnishings, the manuscript creates a beautiful dialogue between past and present, tradition and innovation. The presence of plants and contemporary design elements suggests that classical music remains vital and relevant in modern life. This artwork would be perfect for music conservatories, concert halls, or the homes of classical musicians who appreciate the connection between written notation and performed art. The piece celebrates the entire ecosystem of classical music, from composition to notation to performance, recognizing that musical manuscripts are not just functional documents but cultural treasures that preserve humanity's greatest artistic achievements. The careful framing and presentation elevate this working document to art object status, reminding viewers that musical notation itself is a form of visual poetry that captures the ineffable beauty of sound.`,
  },
  {
    id: 'Neon-Guitar-Electric-Dreams',
    imageUrl: `${R2_BASE_URL}/wall/neon-guitar-electric-dreams.webp`,
    category: 'music-poster-wall',
    tags: ['neon', 'guitar', 'electric', 'modern', 'glowing'],
    description: `This striking artwork transforms the classic electric guitar into a glowing beacon of musical energy, presenting the instrument as if it were constructed from pure light against an infinite black void. The neon-style rendering captures every detail of the guitar's construction – from the curved body and bolt-on neck to the bridge, pickups, and tuning pegs – but renders them in warm, golden light that seems to pulse with inner energy. The effect is both retro and futuristic, evoking the neon signs of classic music venues while suggesting the high-tech possibilities of electronic music. The minimalist composition focuses entirely on the guitar's iconic silhouette, stripping away all distractions to celebrate the instrument's essential form and function. This approach transforms a utilitarian object into a sacred symbol of musical expression. The industrial workspace setting below creates perfect context for this celebration of musical craftsmanship and creativity. The presence of actual musical equipment and sheet music suggests this is a working studio where the poster's artistic vision can be transformed into audible reality. The dramatic lighting and careful composition make this piece perfect for recording studios, music shops, or any space where the electric guitar is appreciated not just as an instrument but as an icon of popular culture. The artwork speaks to the guitar's role in democratizing music, making it possible for individuals to create powerful, expressive sounds with relatively simple equipment. The glowing effect suggests the transformative power of amplification, how electronics can take acoustic vibrations and turn them into sounds that can fill stadiums and move crowds. This piece celebrates the marriage of traditional craftsmanship and modern technology that makes the electric guitar one of the most influential musical instruments ever created.`,
  },
  {
    id: 'Modern-Music-Typography',
    imageUrl: `${R2_BASE_URL}/wall/modern-music-typography.webp`,
    category: 'music-poster-wall',
    tags: ['typography', 'modern', 'geometric', 'abstract', 'design'],
    description: `This sophisticated typographic poster transforms the word "MUSIC" into a complex geometric composition that visualizes the structural elements of musical composition through modern graphic design. The artwork deconstructs and reconstructs musical concepts using bold typography, geometric shapes, and a carefully orchestrated color palette of reds, teals, yellows, and blacks. Each letter becomes a launching point for abstract exploration, with overlapping circles, rectangles, and linear elements that suggest everything from musical notation to sound waves to the mechanical components of instruments. The composition demonstrates how graphic design can capture the mathematical precision underlying musical harmony while celebrating music's emotional and creative aspects. Piano keys, musical notes, and staff lines are integrated into the overall design, creating a visual language that speaks to both musicians and design enthusiasts. The clean, modernist approach reflects the influence of Bauhaus design principles, where form follows function and visual elements are reduced to their essential components. Set in this contemporary interior with its natural light and modern furnishings, the artwork creates a perfect synthesis of artistic disciplines. The presence of the acoustic guitar and vintage turntable suggests this is a space where multiple forms of musical expression coexist harmoniously. This piece would be ideal for music schools, design studios, or any environment where creativity and technical precision intersect. The artwork celebrates the interdisciplinary nature of contemporary culture, where music, graphic design, and visual art inform and inspire each other. The typographic approach makes this piece particularly relevant in our digital age, where music and design are increasingly intertwined in everything from album covers to music apps. This poster reminds us that music exists not just in sound but in visual culture, shaping how we see and understand artistic expression across all media.`,
  },
  {
    id: 'Eclectic-Music-Gallery-Wall',
    imageUrl: `${R2_BASE_URL}/wall/eclectic-music-gallery-wall.webp`,
    category: 'music-poster-wall',
    tags: ['eclectic', 'gallery wall', 'mixed media', 'guitars', 'vintage'],
    description: `This carefully curated gallery wall creates a comprehensive celebration of musical diversity, showcasing six distinct artworks that together tell the story of music's many forms and influences. The collection spans from abstract compositions with bold geometric elements to realistic guitar portraits that capture the beauty of acoustic and electric instruments in vivid detail. A striking red acoustic guitar takes center stage in one piece, its warm wood tones contrasting beautifully with a serene blue-green background that suggests both tranquility and depth. Another piece features intricate collage work with vintage musical elements, creating layers of meaning that reward close examination. The careful arrangement of different sizes and orientations creates visual rhythm while allowing each piece to maintain its individual character and message. The consistent use of warm frames unifies the collection while the varied subjects and styles keep the viewer engaged and discovering new details. Abstract pieces featuring tape equipment and sound wave patterns speak to the technical side of music production, while guitar portraits celebrate the instruments themselves as objects of beauty worthy of artistic attention. Set in this sophisticated living space with its modern furniture and carefully chosen accessories, the gallery wall transforms the room into a personal museum of musical appreciation. The presence of actual guitars and vintage audio equipment below reinforces the theme while suggesting this is a space for both contemplating and creating music. This installation would appeal to serious music lovers who appreciate the full spectrum of musical expression, from the craftsmanship of instrument building to the artistry of performance to the technical innovation of recording and reproduction. The diverse collection reflects music's democratic nature – there's no single correct way to appreciate or express musical ideas, and this gallery wall celebrates that beautiful diversity.`,
  },

  // Sample data for other categories (to be replaced with actual generated content)
  // Earphone Category
  {
    id: 'Beats-in-Motion',
    imageUrl: `${R2_BASE_URL}/earphone/poster-001.jpg`,
    category: 'earphone',
    tags: ['headphones', 'electronic', 'modern'],
    description: 'A dynamic representation of sound waves flowing through premium headphones, capturing the essence of modern audio technology.',
  },
  {
    id: 'Silent-Symphony',
    imageUrl: `${R2_BASE_URL}/earphone/poster-002.jpg`,
    category: 'earphone',
    tags: ['minimalist', 'audio', 'peaceful'],
    description: 'Minimalist design showcasing the beauty of silence and sound in perfect harmony.',
  },
  // Music Class Category
  {
    id: 'Learning-Melodies',
    imageUrl: `${R2_BASE_URL}/music-class/poster-003.jpg`,
    category: 'music-class',
    tags: ['education', 'classroom', 'instruments'],
    description: 'An educational poster designed to inspire young musicians in their journey of musical discovery.',
  },
  {
    id: 'Music-Theory-Basics',
    imageUrl: `${R2_BASE_URL}/music-class/poster-004.jpg`,
    category: 'music-class',
    tags: ['theory', 'notes', 'learning'],
    description: 'Comprehensive visual guide to fundamental music theory concepts for beginners.',
  },
  // Country Music Category
  {
    id: 'Nashville-Nights',
    imageUrl: `${R2_BASE_URL}/country-music/poster-005.jpg`,
    category: 'country-music',
    tags: ['nashville', 'guitar', 'vintage'],
    description: 'Vintage-inspired poster capturing the spirit of Nashville\'s legendary music scene.',
  },
  {
    id: 'Desert-Highway-Blues',
    imageUrl: `${R2_BASE_URL}/country-music/poster-006.jpg`,
    category: 'country-music',
    tags: ['western', 'acoustic', 'road'],
    description: 'A journey through the American heartland with acoustic melodies and endless horizons.',
  },
  // Music Store Category
  {
    id: 'Vinyl-Paradise',
    imageUrl: `${R2_BASE_URL}/music-store/poster-009.jpg`,
    category: 'music-store',
    tags: ['vinyl', 'records', 'shop'],
    description: 'Step into a world of endless musical discoveries with our vintage record store aesthetic.',
  },
  {
    id: 'Instrument-Heaven',
    imageUrl: `${R2_BASE_URL}/music-store/poster-010.jpg`,
    category: 'music-store',
    tags: ['instruments', 'guitar', 'retail'],
    description: 'A showcase of premium musical instruments waiting to create the next masterpiece.',
  },
]

// Helper functions
export function getPostersByCategory(category: PosterCategory): Poster[] {
  return POSTERS.filter(poster => poster.category === category)
}

export function getPosterById(id: string): Poster | undefined {
  return POSTERS.find(poster => poster.id === id)
}

export function getRelatedPosters(posterId: string, limit: number = 6): Poster[] {
  const poster = getPosterById(posterId)
  if (!poster) return []
  
  // Get posters from same category, excluding current poster
  const related = POSTERS.filter(
    p => p.category === poster.category && p.id !== posterId
  )
  
  // Return limited results (no shuffling to avoid hydration mismatch)
  return related.slice(0, limit)
}

export function searchPosters(query: string): Poster[] {
  const lowerQuery = query.toLowerCase()
  return POSTERS.filter(poster => 
    poster.id.toLowerCase().includes(lowerQuery) ||
    poster.description?.toLowerCase().includes(lowerQuery) ||
    poster.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

// Pagination helper
export function getPaginatedPosters(
  page: number = 1,
  pageSize: number = 20,
  filter?: { category?: PosterCategory }
): {
  posters: Poster[]
  totalPages: number
  currentPage: number
  total: number
} {
  let filteredPosters = POSTERS
  
  if (filter?.category) {
    filteredPosters = getPostersByCategory(filter.category)
  }
  
  const total = filteredPosters.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const end = start + pageSize
  
  return {
    posters: filteredPosters.slice(start, end),
    totalPages,
    currentPage: page,
    total,
  }
}