export const formatDuration = (seconds: number | undefined): string => {
  if (!seconds) return '00:00'
  
  const h: number = Math.floor(seconds / 3600)
  const m: number = Math.floor((seconds % 3600) / 60)
  const s: number = Math.round(seconds % 60)
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
  return `${m}:${s.toString().padStart(2, '0')}`
}

export const formatViews = (views: number | undefined): string => {
  if (!views) return '0'
  
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`
  }
  return views.toString()
}

export type DateInput = string | number | Date | undefined

export const formatDate = (date: DateInput): string => {
  if (!date) return ''
  
  const now: Date = new Date()
  const videoDate: Date = new Date(date)
  const diffTime: number = Math.abs(now.getTime() - videoDate.getTime())
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'il y a 1 jour'
  if (diffDays < 7) return `il y a ${diffDays} jours`
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} semaines`
  if (diffDays < 365) return `il y a ${Math.floor(diffDays / 30)} mois`
  return `il y a ${Math.floor(diffDays / 365)} ans`
}

// Add type for video duration formatting
export interface Duration {
  hours?: number;
  minutes: number;
  seconds: number;
}

// Helper function to parse duration
export const parseDuration = (seconds: number): Duration => {
  const h: number = Math.floor(seconds / 3600)
  const m: number = Math.floor((seconds % 3600) / 60)
  const s: number = Math.round(seconds % 60)
  
  return h > 0 
    ? { hours: h, minutes: m, seconds: s }
    : { minutes: m, seconds: s }
}