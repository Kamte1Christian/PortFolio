export type Quality = 'HD' | '4K' | '8K'

export interface ContentItem {
  id: string
  title: string
  image: string
  quality?: Quality
  progress?: number
  isNew?: boolean
  year?: number
  rating?: number
  duration?: string
  genres?: string[]
  description?: string
  preview?: boolean
}